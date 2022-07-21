import os from "os";

console.info(os.platform());
console.info(os.arch());
console.info(os.freemem());
console.info(os.totalmem());
console.info(os.homedir());
console.info(os.hostname());
console.info(os.release());
console.info(os.type());
console.info(os.version());

console.table(os.cpus());
console.table(os.networkInterfaces());

/*
    OS

-   OS merupakan standard library yang bisa digunakan untuk mendapatkan informasi tentang
    sistem operasi yang digunakan
-   https://nodejs.org/dist/latest-v16.x/docs/api/os.html
*/
