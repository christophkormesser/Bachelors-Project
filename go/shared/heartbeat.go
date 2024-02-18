package shared

import (
	"github.com/prometheus/client_golang/prometheus"
	"log"
	"net/http"
)

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

	// Increase Heartbeat Counter
	HeartbeatCounter.With(prometheus.Labels{"src_pod_name": env["POD_NAME"], "dst_service": destinationService, "handler": handler, "response_code": response.Status}).Inc()

	log.Printf("INFO: Heartbeat response: [%s]\n", response.Status)
}
