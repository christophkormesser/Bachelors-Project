package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/labstack/echo/v4"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

type Environment struct {
	nodeName     string
	podName      string
	podNamespace string
	podIP        string
}

// metric counter
var HEARTBEAT_COUNTER = promauto.NewCounterVec(prometheus.CounterOpts{
	Name: "heartbeat_requests",
	Help: "Number of heartbeat requests sent.",
},
	[]string{"src_pod_name", "dst_service", "handler", "response_code"})

func main() {
	env := &Environment{
		nodeName:     os.Getenv("NODE_NAME"),
		podName:      os.Getenv("POD_NAME"),
		podNamespace: os.Getenv("POD_NAMESPACE"),
		podIP:        os.Getenv("POD_IP"),
	}

	// prometheus
	http.Handle("/metrics", promhttp.Handler())

	// web server
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Welcome to app1!")
	})

	for i := 0; i < 10; i++ {
		heartbeat(i, env)
	}

	e.Logger.Fatal(e.Start(":1323"))
}

func heartbeat(counter int, env *Environment) {
	const destinationService string = "fastapi2"
	const handler string = "/action"

	//url := "http://" + destinationService + ":8001" + handler

	url := "http://orf.at"

	response, err := http.Get(url)
	if err != nil {
		log.Fatal("Error getting url: ", err)
	}
	response.Body.Close()
	// body, err := io.ReadAll(response.Body)
	// if err != nil {
	// 	log.Fatal("Error reading body: ", err)
	// }
	HEARTBEAT_COUNTER.With(prometheus.Labels{"src_pod_name": env.podName, "dst_service": destinationService, "handler": handler, "response_code": response.Status})

	fmt.Printf("Heartbeat response: #%d [%s]\n", counter, response.Status)
}
