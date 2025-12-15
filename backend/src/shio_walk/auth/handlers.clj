(ns shio-walk.auth.handlers
  (:require [shio-walk.auth.core :as auth]
            [shio-walk.db :as db]
            [ring.util.response :as response]))

;; ===== ユーザー登録 =====

(defn register [request]
  (let [{:keys [email username password]} (:body request)]
    (cond
      ;; バリデーション
      (or (nil? email) (nil? username) (nil? password))
      (-> (response/response {:error "Email, username, and password are required"})
          (response/status 400))
      
      (< (count password) 8)
      (-> (response/response {:error "Password must be at least 8 characters"})
          (response/status 400))
      
      ;; メールアドレス重複チェック
      (db/user-exists? email)
      (-> (response/response {:error "Email already exists"})
          (response/status 409))
      
      ;; ユーザー作成
      :else
      (try
        (let [user (db/create-user! 
                    {:email email
                     :username username
                     :password-hash (auth/hash-password password)})
              token (auth/generate-token (:users/id user))]
          (response/response 
           {:token token
            :user {:id (str (:users/id user))
                   :email (:users/email user)
                   :username (:users/username user)
                   :created_at (str (:users/created_at user))}}))
        (catch Exception e
          (-> (response/response {:error "Failed to create user"
                                 :details (.getMessage e)})
              (response/status 500)))))))

;; ===== ログイン =====

(defn login [request]
  (let [{:keys [email password]} (:body request)]
    (if-let [user (db/get-user-by-email email)]
      (if (auth/verify-password password (:users/password_hash user))
        (do
          ;; 最終ログイン時刻更新
          (db/update-last-login! (:users/id user))
          (response/response 
           {:token (auth/generate-token (:users/id user))
            :user {:id (str (:users/id user))
                   :email (:users/email user)
                   :username (:users/username user)}}))
        (-> (response/response {:error "Invalid credentials"})
            (response/status 401)))
      (-> (response/response {:error "Invalid credentials"})
          (response/status 401)))))

;; ===== プロフィール取得 (認証必須) =====

(defn get-profile [request]
  (let [user-id (:user-id request)]
    (if-let [user (db/get-user-by-id user-id)]
      (response/response 
       {:user {:id (str (:users/id user))
               :email (:users/email user)
               :username (:users/username user)
               :created_at (str (:users/created_at user))
               :last_login (str (:users/last_login user))}})
      (-> (response/response {:error "User not found"})
          (response/status 404)))))
