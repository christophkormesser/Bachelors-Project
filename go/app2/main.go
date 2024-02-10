package main

import (
	"dummyserver/shared"
	"net/http"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

func main() {

	// Init Environment Variables
	var envVars = []string{"NODE_NAME", "POD_NAME", "POD_NAMESPACE", "POD_IP"}
	env := shared.EnvHandler(envVars)

	// Expose Prometheus Metrics
	http.Handle("/metrics", promhttp.Handler())

	// Create Web server
	e := echo.New()

	e.GET("/action", func(c echo.Context) error {
		return c.String(http.StatusOK, "Request from "+c.Request().RemoteAddr+" went through to "+c.Path()+"!"+
			"You have reached:"+
			"Node: "+env["NODE_NAME"]+
			"Pod Name: "+env["POD_NAME"]+
			"Pod Namespace: "+env["POD_NAMESPACE"]+
			"Pod IP: "+env["POD_IP"])
	})
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Welcome to APP2!")
	})

	// Closure to include map as an argument in the scheduler later
	heartbeatTask := func() {
		shared.Heartbeat(env, "app2", "1323", "/action")
	}
	go shared.StartScheduler(1*time.Minute, heartbeatTask)

	e.Logger.Fatal(e.Start(":1323"))
}
