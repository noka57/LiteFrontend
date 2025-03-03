#!/bin/bash

url="http://localhost:4173"

# Make the HTTP GET request using curl
response=$(curl -s "$url")

# Check if the request was successful
if [ $? -eq 0 ]; then
    echo "HTTP GET request to $url successful!"
    echo "Response body:"
    echo "$response" > "EDashboard.html"
else
    echo "HTTP GET request to $url failed!"
fi
