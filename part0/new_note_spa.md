```mermaid
sequenceDiagram
    participant browser
    participant server

    Note left of server: User sends input
    Note left of server: Notes array is updated
    Note left of server: Notes are redrawn

    browser->>server: POST /exampleapp/new_note_spa | Content-type: application/json
    activate server
    server-->>browser: Status code 201 Created
    deactivate server
```
