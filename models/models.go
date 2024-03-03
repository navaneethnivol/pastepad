package models

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
