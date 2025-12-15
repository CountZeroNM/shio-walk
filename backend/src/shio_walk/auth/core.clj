(ns shio-walk.auth.core
  (:require [buddy.hashers :as hashers]
            [buddy.sign.jwt :as jwt]
            [shio-walk.config :refer [config]]))

(def secret (get-in config [:auth :secret]))
(def token-expiry (get-in config [:auth :token-expiry]))

;; ===== パスワード処理 =====

(defn hash-password 
  "パスワードをハッシュ化"
  [password]
  (hashers/derive password {:alg :bcrypt+sha512}))

(defn verify-password 
  "パスワードを検証"
  [password hash]
  (hashers/check password hash))

;; ===== JWT トークン =====

(defn generate-token 
  "JWTトークンを生成"
  [user-id]
  (let [claims {:user-id (str user-id)
                :exp (+ (quot (System/currentTimeMillis) 1000) 
                        token-expiry)}]
    (jwt/sign claims secret {:alg :hs256})))

(defn verify-token 
  "JWTトークンを検証"
  [token]
  (try
    (jwt/unsign token secret {:alg :hs256})
    (catch Exception _ nil)))

(defn extract-user-id 
  "トークンからユーザーIDを抽出"
  [token]
  (when-let [claims (verify-token token)]
    (:user-id claims)))
