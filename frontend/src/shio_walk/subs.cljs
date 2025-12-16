(ns shio-walk.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :user
 (fn [db _]
   (:user db)))

(rf/reg-sub
 :token
 (fn [db _]
   (:token db)))

(rf/reg-sub
 :current-page
 (fn [db _]
   (:current-page db)))

(rf/reg-sub
 :loading?
 (fn [db _]
   (:loading? db)))

(rf/reg-sub
 :error
 (fn [db _]
   (:error db)))

(rf/reg-sub
 :stats
 (fn [db _]
   (:stats db)))

(rf/reg-sub
 :current-walk
 (fn [db _]
   (:current-walk db)))

(rf/reg-sub
 :walks
 (fn [db _]
   (:walks db)))

(rf/reg-sub
 :rewards
 (fn [db _]
   (:rewards db)))

(rf/reg-sub
 :unlocked-rewards
 (fn [db _]
   (:unlocked-rewards db)))

(rf/reg-sub
 :is-authenticated?
 (fn [db _]
   (boolean (:token db))))
