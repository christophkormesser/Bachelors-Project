package main

import (
	"dummyserver/shared"
	"net/http"
	"strconv"
	"strings"

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

		shared.ReceivedRequestCounter.With(
			prometheus.Labels{
				"dst_pod":       env["POD_NAME"],
				"handler":       "/action",
				"source":        strings.Split(c.Request().RemoteAddr, ":")[0],
				"response_code": strconv.Itoa(c.Response().Status),
			},
		).Inc()

		response := "App2: Hello! \n" + shared.Call(env, "app3", "1323", "/action")

		return c.String(http.StatusOK, response)
	})

	// Expose Root Endpoint
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Welcome to APP2!\n")
	})

	e.Logger.Fatal(e.Start(":1323"))
}
