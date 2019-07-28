FROM golang

WORKDIR /go/src/app
COPY . .
RUN go get -d -v ./...
RUN go install -v ./...

CMD go run /go/src/app/server.go