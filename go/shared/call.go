package shared

import (
	"io"
	"log"
	"net/http"

	"github.com/prometheus/client_golang/prometheus"
)

func Call(env map[string]string, destinationService string, port string, handler string) string {

	url := "http://" + destinationService + ":" + port + handler

	response, err := http.Get(url)
	if err != nil {
		log.Println("ERROR: ", err)
		return err.Error()
	}

	// read response body
	body, error := io.ReadAll(response.Body)
	if error != nil {
		log.Println(error)
	}

	defer func() {
		if err := response.Body.Close(); err != nil {
			log.Println("ERROR: ", err)
		}
	}()

	// Increase Heartbeat Counter
	HeartbeatCounter.With(prometheus.Labels{"src_pod_name": env["POD_NAME"], "dst_service": destinationService, "handler": handler, "response_code": response.Status}).Inc()

	log.Printf("INFO: Call response: [%s]\n", response.Status)

	return string(body)
}
