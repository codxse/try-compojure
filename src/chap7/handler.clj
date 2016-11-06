(ns chap7.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.json :as ring-json]
            [ring.util.response :as rr]))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (GET "/smile" []
    (rr/response {:a "Katti"}))
  (route/not-found "Not Found"))

(def app
  (-> app-routes
      (wrap-defaults site-defaults)
      (ring-json/wrap-json-response)))
