package main

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/patrickmn/go-cache"
)

var db *cache.Cache

func init() {
	db = cache.New(5*time.Minute, 10*time.Minute)
	fmt.Println("Cache Initialized")
}

func main() {

	r := mux.NewRouter()

	// By Default data in the cache is valid till 1 Week.

	r.HandleFunc("/create", createNewPad).Methods("POST")
	r.HandleFunc("/view/{id}", getPad).Methods("GET")

	port := ":9000"

	err := http.ListenAndServe(port, r)

	if err != nil {
		fmt.Println("Server failed to start:", err)
		return
	}

	fmt.Printf("Server Started on Port %s", port)
}

// Route Handlers

func createNewPad(w http.ResponseWriter, r *http.Request) {

	var requestBody CreatePadRequest
	err := json.NewDecoder(r.Body).Decode(&requestBody)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	id := generateRandomString(10)

	for {
		_, exists := db.Get(id)
		if !exists {
			break
		}
		id = generateRandomString(10)
	}

	if requestBody.Type == "views" {
		db.Set(id, requestBody, cache.NoExpiration)
	} else {
		db.Set(id, requestBody, time.Duration(time.Duration(requestBody.Count).Minutes()))
	}

	responseBody := CreatePadResponse{
		Status: true,
		ID:     id,
	}

	jsonResponse, err := json.Marshal(responseBody)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jsonResponse)
}

func getPad(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	id := params["id"]

	value, exists := db.Get(id)

	if !exists {
		http.Error(w, "PastePad not found", http.StatusInternalServerError)
		return
	}

	jsonResponse, err := json.Marshal(value)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jsonResponse)
}

// Types

type CreatePadRequest struct {
	Type   string `json:"type"`
	Count  int    `json:"count"`
	Custom bool   `json:"custom"`
	Input  string `json:"input"`
}

type CreatePadResponse struct {
	Status bool   `json:"status"`
	ID     string `json:"id"`
}

type GetPadResponse struct {
	Type   string `json:"type"`
	Count  int    `json:"count"`
	Custom bool   `json:"custom"`
	Input  string `json:"input"`
}

// Utils

func generateRandomString(length int) string {
	const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	randomString := make([]byte, length)
	for i := range randomString {
		randomString[i] = charset[rand.Intn(len(charset))]
	}
	return string(randomString)
}
