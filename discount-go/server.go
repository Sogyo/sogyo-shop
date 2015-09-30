package main

import (
	"net/http"
	"encoding/json"
	"strings"
	"log"
)

type Discount struct {
	Percentage uint64 `json:"percentage"`
}

func main() {
	http.HandleFunc("/", MakeHandler(DiscountHandler))
	http.ListenAndServe(":8080", nil)
}

func LogRequest(request *http.Request, handler string) {
	log.Printf("[%s] %s [%s]\n", request.Method, request.URL, handler)
}

func MakeHandler(fn func(http.ResponseWriter, *http.Request, string)) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		splitted := strings.Split(r.URL.Path, "/")
		if splitted == nil || len(splitted) < 2 {
			http.NotFound(w, r)
			return
		}
		fn(w, r, splitted[1])
	}
}

func DiscountHandler(response http.ResponseWriter, request *http.Request, uuid string) {
	response.Header().Set("X-Server-Language", "go")
	response.Header().Set("Content-Type", "application/json")

	LogRequest(request, "DiscountHandler")

	result := Discount{
		Percentage: CalculateDiscountPercentage(strings.ToLower(uuid)),
	}

	resp, err := json.Marshal(result)

	if (err != nil) {
		http.Error(response, err.Error(), http.StatusInternalServerError)
	} else {
		response.Write(resp)
	}
}
