import http from "http";

const server = http.createServer(function (request, response) {
    console.info(request.method);
    console.info(request.url);

    if (request.method === "POST") {
        request.addListener("data", function (data) {
            response.setHeader("Content-Type", "application/json");
            response.write(data);
            response.end();
        });
    } else {
        if (request.url === "/eko") {
            response.write("Success Eko");
        } else {
            response.write("Success");
        }
        response.end();
    }

});

server.listen(3000);

/*
    HTTP Server

-   Standard library hTTP juga tidak hanya bisa digunakan untuk membuat HTTP Client, tapi juga
    bisa digunakan untuk membuat HTTP Server
-   Untuk kasus sederhana, cocok sekali jika ingin membuat HTTP Server menggunakan standard
    library NodeJS, namun untuk kasus yang lebih kompleks, direkomendasikan menggunakan library
    atau framework yang lebih mudah penggunanya
-   https://nodejs.org/dist/latest-v16.x/docs/api/http.html
*/
