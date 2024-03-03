package main

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/navaneethnivol/pastepad/models"

	"github.com/gorilla/mux"
	"github.com/patrickmn/go-cache"
)

// Create Pad Controller

func createNewPad(w http.ResponseWriter, r *http.Request) {

	var requestBody models.CreatePadRequest
	err := json.NewDecoder(r.Body).Decode(&requestBody)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	var id string

	for {
		id = generateRandomString(10)
		_, exists := db.Get(id)
		if !exists {
			break
		}
	}

	if requestBody.Type == "views" {
		db.Set(id, requestBody, cache.NoExpiration)
	} else {
		db.Set(id, requestBody, time.Duration(requestBody.Count)*time.Minute)
	}

	responseBody := models.CreatePadResponse{
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

// Get Pad Controller

func getPad(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	id := params["id"]

	cacheValue, exists := db.Get(id)

	if !exists {
		http.Error(w, "PastePad not found", http.StatusInternalServerError)
		return
	}

	value := cacheValue.(models.CreatePadRequest)

	if value.Type == "views" {
		if value.Count > 1 {
			value.Count = value.Count - 1
			db.Set(id, value, cache.NoExpiration)
		} else {
			defer db.Delete(id)
		}
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
