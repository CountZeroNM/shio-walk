(ns shio-walk.auth.handlers
  (:require [clojure.string :as str]
            [shio-walk.auth.core :as auth]
            [shio-walk.convert :as convert]
            [shio-walk.db :as db]
            [ring.util.response :as response]))

(defn- error [status body]
  (-> (response/response body) (response/status status)))

;; ===== ユーザー登録 =====
(defn register [request]
  (let [{:keys [email username password]} (:body request)]
    (cond
      (some #(or (not (string? %)) (str/blank? %)) [email username password])
      (error 400 {:error "Email, username, and password are required"})

      (< (count password) 8)
      (error 400 {:error "Password must be at least 8 characters"})

      (db/user-exists? email)
      (error 409 {:error "Email already exists"})

      :else
      (try
        (let [user (db/create-user! {:email email
                                     :username username
                                     :password-hash (auth/hash-password password)})]
          (response/response {:token (auth/generate-token (:users/id user))
                              :user (convert/user user)}))
        (catch org.postgresql.util.PSQLException e
          (case (.getSQLState e)
            "23505" (error 409 {:error "Email or username already exists"}) ; 一意制約
            "23514" (error 400 {:error "Invalid email format"})              ; CHECK 制約 (email_format)
            (throw e)))))))

;; ===== ログイン =====
(defn login [request]
  (let [{:keys [email password]} (:body request)
        user (when (and (string? email) (string? password))
               (db/get-user-by-email email))]
    (if (and user (auth/verify-password password (:users/password_hash user)))
      (do
        (db/update-last-login! (:users/id user))
        (response/response {:token (auth/generate-token (:users/id user))
                            :user (convert/user (select-keys user [:users/id :users/email :users/username]))}))
      (error 401 {:error "Invalid credentials"}))))

;; ===== プロフィール取得 (認証必須) =====
(defn get-profile [request]
  (if-let [user (db/get-user-by-id (:user-id request))]
    (response/response {:user (convert/user user)})
    (error 404 {:error "User not found"})))
