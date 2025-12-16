(ns shio-walk.api
  (:require [ajax.core :as ajax]))

(def api-base-url "http://localhost:3000/api")

(defn auth-header [token]
  (when token
    [:Authorization (str "Bearer " token)]))

(defn register [user success-fn error-fn]
  (ajax/POST (str api-base-url "/auth/register")
             {:params user
              :format :json
              :response-format :json
              :keywords? true
              :handler success-fn
              :error-handler error-fn}))

(defn login [credentials success-fn error-fn]
  (ajax/POST (str api-base-url "/auth/login")
             {:params credentials
              :format :json
              :response-format :json
              :keywords? true
              :handler success-fn
              :error-handler error-fn}))

(defn get-profile [token success-fn error-fn]
  (ajax/GET (str api-base-url "/user/profile")
            {:headers (auth-header token)
             :response-format :json
             :keywords? true
             :handler success-fn
             :error-handler error-fn}))

(defn get-stats [token success-fn error-fn]
  (ajax/GET (str api-base-url "/stats")
            {:headers (auth-header token)
             :response-format :json
             :keywords? true
             :handler success-fn
             :error-handler error-fn}))

(defn start-walk [token success-fn error-fn]
  (ajax/POST (str api-base-url "/walks/start")
             {:headers (auth-header token)
              :response-format :json
              :keywords? true
              :handler success-fn
              :error-handler error-fn}))

(defn update-walk [token walk-id data success-fn error-fn]
  (ajax/PUT (str api-base-url "/walks/" walk-id)
            {:headers (auth-header token)
             :params data
             :format :json
             :response-format :json
             :keywords? true
             :handler success-fn
             :error-handler error-fn}))

(defn complete-walk [token walk-id success-fn error-fn]
  (ajax/POST (str api-base-url "/walks/" walk-id "/complete")
             {:headers (auth-header token)
              :response-format :json
              :keywords? true
              :handler success-fn
              :error-handler error-fn}))

(defn get-walks [token success-fn error-fn]
  (ajax/GET (str api-base-url "/walks")
            {:headers (auth-header token)
             :response-format :json
             :keywords? true
             :handler success-fn
             :error-handler error-fn}))

(defn get-rewards [token success-fn error-fn]
  (ajax/GET (str api-base-url "/rewards")
            {:headers (auth-header token)
             :response-format :json
             :keywords? true
             :handler success-fn
             :error-handler error-fn}))

(defn get-unlocked-rewards [token success-fn error-fn]
  (ajax/GET (str api-base-url "/rewards/unlocked")
            {:headers (auth-header token)
             :response-format :json
             :keywords? true
             :handler success-fn
             :error-handler error-fn}))
