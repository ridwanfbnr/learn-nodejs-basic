import fs from 'fs/promises';

const buffer = await fs.readFile("10-file-system.mjs");

console.info(buffer.toString());

await fs.writeFile("contoh.txt", "Hello NodeJS");

/*
    File System

-   File System merupakan standard library yang bisa digunakan untuk memanipulasi file system
-   Dalam File System terdapat 3 jenis library
-   Pertama library yang bersifat blocking atau synchronous
-   Kedua library yang bersifat non-blocking atau asynchronous menggunakan callback
-   Ktiga library yang bersifat non-blocking atau asynchronous tapi menggunakan promise
-   Disarankan menggunakan yang ketiga yaitu asynchronous menggunakan promise
-   https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
*/