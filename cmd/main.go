package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/patrickmn/go-cache"
)

var db *cache.Cache

func main() {

	// By Default data in the cache is valid till 1 Week.
	db = cache.New(5*time.Minute, 10*time.Minute)
	fmt.Println("Cache Initialized")

	r := mux.NewRouter()

	r.HandleFunc("/new", createNewPad).Methods("POST")
	r.HandleFunc("/pad/{id}", getPad).Methods("GET")

	port := ":9000"

	loggedRouter := handlers.LoggingHandler(os.Stdout, corsHandler(r))

	fmt.Printf("Server Started on Port %s \n", port)
	err := http.ListenAndServe(port, loggedRouter)

	if err != nil {
		log.Fatal("Server failed to start:", err)
		return
	}
}
