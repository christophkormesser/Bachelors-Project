package shared

import (
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
	"log"
	"net/http"
)

var HeartbeatCounter = promauto.NewCounterVec(prometheus.CounterOpts{
	Name: "heartbeat_requests",
	Help: "Number of heartbeat requests sent.",
},
	[]string{"src_pod_name", "dst_service", "handler", "response_code"})

func Heartbeat(env map[string]string, destinationService string, port string, handler string) {

	url := "http://" + destinationService + ":" + port + handler

	response, err := http.Get(url)
	if err != nil {
		log.Println("ERROR: ", err)
		return
	}

	defer func() {
		if err := response.Body.Close(); err != nil {
			log.Println("ERROR: ", err)
		}
	}()

	// Increase Prometheus Counter
	HeartbeatCounter.With(prometheus.Labels{"src_pod_name": env["POD_NAME"], "dst_service": destinationService, "handler": handler, "response_code": response.Status}).Inc()

	log.Printf("INFO: Heartbeat response: [%s]\n", response.Status)
}
