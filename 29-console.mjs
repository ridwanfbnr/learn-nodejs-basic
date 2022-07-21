import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");

const log = new Console({
    stdout: file,
    stderr: file,
});

log.info("Hello World!");
log.error("Hello Error!");


const person = {
    firstName: "Eko",
    lastName: "kurniawan"
}

log.table(person);

/*
    Console

-   Console adalah standard library yang sudah sering kita gunakan
-   Secara global, object console bisa kita gunakan tanpa harus melakukan import module, dan
    console melakukan print text nya ke stdout
-   Namun kita juga bisa membuat object console sendiri jika kita mau
-   https://nodejs.org/dist/latest-v16.x/docs/api/console.html
*/
