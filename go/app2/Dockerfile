# Start from the official Go image to build our application.
# This is the first stage where the build happens.
FROM golang:1.21-alpine as builder

# Enable Go modules and disable CGO.
ENV GO111MODULE=on \
    CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64

# Copy the local package files to the container's workspace.
WORKDIR /build

# Copy go mod and sum files.
COPY go.mod go.sum ./

RUN go mod download

# Copy the source code into the container.
COPY . .

# Build the application.
RUN go build -o main ./app2

# Start a new stage from scratch for the runtime image.
# This is the second stage where the binary is copied.
FROM alpine:latest

RUN apk --no-cache add ca-certificates

RUN apk add curl

WORKDIR /root/

# Copy the binary from the builder stage.
COPY --from=builder /build/main .

# Command to run the executable.
CMD ["./main"]
