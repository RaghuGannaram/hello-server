# Hello World REST API

This is a simple REST API that returns a JSON response with the message "Hello, World!".

-   Usage:

    -   Endpoint: `/hello`
    -   Method: `GET`
    -   Description: Returns a JSON response with the message "Hello, World!".
    -   Request:
        ```http
        GET /hello HTTP/1.1
        Host: localhost
        ```
    -   Response:

        ```http
        HTTP/1.1 200 OK
        Content-Type: application/json

        {
            "message": "Hello, World!"
        }
        ```
