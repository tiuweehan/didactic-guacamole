package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello World\n")
	})

	log.Println("Starting Server on port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
