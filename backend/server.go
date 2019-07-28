package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "<h1>Hello World\n</h1> <p>Hello, my name is Wee Han and this is my landing page :)</p>")
	})

	log.Println("Starting Server on port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
