package shared

import (
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
)

var HeartbeatCounter = promauto.NewCounterVec(prometheus.CounterOpts{
	Name: "heartbeat_requests",
	Help: "Number of heartbeat requests sent.",
},
	[]string{"src_pod_name", "dst_service", "handler", "response_code"})

var ReceivedRequestCounter = promauto.NewCounterVec(prometheus.CounterOpts{
	Name: "received_requests",
	Help: "Number of requests received at a specific handler.",
},
	[]string{"dst_pod", "handler", "source", "response_code"})
