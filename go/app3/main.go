package main

import (
	"dummyserver/shared"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"

	"github.com/labstack/echo/v4"
)

func main() {

	// Init Kubernetes Environment Variables
	var envVars = []string{"NODE_NAME", "POD_NAME", "POD_NAMESPACE", "POD_IP"}
	env := shared.EnvHandler(envVars)

	// Create Web server
	e := echo.New()

	// Expose Prometheus Metrics
	e.GET("/metrics", echo.WrapHandler(promhttp.Handler()))

	// Expose Test Endpoint
	e.GET("/action", func(c echo.Context) error {

		shared.ReceivedRequestCounter.With(prometheus.Labels{"dst_pod": env["POD_NAME"], "handler": "/action", "source": strings.Split(c.Request().RemoteAddr, ":")[0], "response_code": strconv.Itoa(c.Response().Status)}).Inc()

		return c.String(http.StatusOK, "Request from "+c.Request().RemoteAddr+" went through to "+c.Path()+"!\n"+
			"Node: "+env["NODE_NAME"]+"\n"+
			"Pod Name: "+env["POD_NAME"]+"\n"+
			"Pod Namespace: "+env["POD_NAMESPACE"]+"\n"+
			"Pod IP: "+env["POD_IP"]+"\n")
	})

	// Expose Root Endpoint
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Welcome to APP3!\n")
	})

	// Closure to include map as an argument in the scheduler later
	heartbeatTask := func() {
		shared.Heartbeat(env, "app2", "1323", "/action")
	}
	// Starts the scheduler with the above heartbeatTask function
	go shared.StartScheduler(time.Duration(shared.REQUEST_INTERVAL)*time.Millisecond, heartbeatTask)

	e.Logger.Fatal(e.Start(":1323"))
}
