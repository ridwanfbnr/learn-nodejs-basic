
import util from "util";

const firstName = "Eko";
const lastName = "Khannedy"

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", "Eko", "Khannedy"));

const person = {
    firstName: "Eko",
    lastName: "Khannedy"
}

console.info(`Person ${JSON.stringify(person)}`);
console.info(util.format("Person %j", person));

/*
    Util

-   Util adalah standard library yang berisikan utility-utility yang bisa kita gunakan untuk
    mempermudah pembuatan kode program di NodeJS
-   https://nodejs.org/dist/latest-v16.x/docs/api/util.html
*/
