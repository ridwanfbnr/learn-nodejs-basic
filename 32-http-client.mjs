import https from "https";

const url = "https://client.free.beeceptor.com";

const request = https.request(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}, function (response) {
    response.addListener("data", function (data) {
        console.info(`Receive Data : ${data.toString()}`);
    });
});

const body = {
    firstName: "Eko",
    lastName: "Khannedy"
};

request.write(JSON.stringify(body));
request.end();


/*
    HTTP Client

-   NodeJS juga memiliki standard library untuk HTTP
-   Salah satu fitur di module HTTP adalah HTTP client, dimana kita bisa melakukan simulasi HTTP
    Request menggunakan NodeJS
-   Terdapat 2 jenis module HTTP di NodeJS, HTTP dan HTTPS
-   https://nodejs.org/dist/latest-v16.x/docs/api/http.html
-   https://nodejs.org/dist/latest-v16.x/docs/api/https.html
*/
