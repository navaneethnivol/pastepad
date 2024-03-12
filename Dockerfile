FROM golang:latest AS build-stage

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . ./

RUN CGO_ENABLED=0 GOOS=linux go build -o /pastepad ./cmd/

FROM alpine:latest AS build-release-stage

WORKDIR /

COPY --from=build-stage /pastepad /pastepad

EXPOSE 9000

ENTRYPOINT ["/pastepad"]