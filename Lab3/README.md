## HTTP
Hypertext Transfer Protocol


## Status Codes

200 OK
201 Created
400 Bad Request
401 Unautorized
403 Forbidden
404 not 




- api genreally startrs wiht api/


browser only chekin get ereqm for post anfd other we require third party and other tester like postman / thunder client


# Content type 
it defines the type of content being send from the server 

- text/plain - normal text
- application/json - for files
- text/html - for rendering html pages


## Status Codes
- 200 - OK
- 201 - Created
- 400 - Bad Request
- 401 - Unauthorized
- 403 - Forbidden
- 404 - Not Found
- 500 - Internal Server Error
- 502 - Bad Gateway
- 503 - Service Unavailable

## server can send data
1. html content
2. html file
3. json data
4. plain text
5. css
6. js
7. file

## server can set header to send data
1. res.writeHeader()
2. res.setHeader()
3. res.writeHead()

## sever can set status code
1. res.statusCode = 200
2. res.writeHeader(200)

## request methods
1. get
2. post
3. put/patch
4. delete

## Routes
