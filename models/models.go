package models

type CreatePadRequest struct {
	Type   string `json:"type"`
	Count  int    `json:"count"`
	Custom bool   `json:"custom"`
	Input  string `json:"input"`
}

type CreatePadResponse struct {
	PadID string `json:"pad_id"`
}

type GetPadResponse struct {
	Input string `json:"input"`
}
