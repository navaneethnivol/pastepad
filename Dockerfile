FROM golang:latest AS build

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -o pastepad ./cmd/


FROM alpine:latest

WORKDIR /app

COPY --from=build /app/pastepad /app/pastepad

ENTRYPOINT ["./pastepad"]