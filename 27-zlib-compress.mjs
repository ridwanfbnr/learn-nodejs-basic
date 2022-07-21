import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("27-zlib-compress.mjs");
const result = zlib.gzipSync(source);

fs.writeFileSync("27-zlib-compress.mjs.txt", result);

/*
    Zlib

-   Zlib adalah standard library yang digunakan untuk melakukan kompresi menggunakan Gzip
-   https://nodejs.org/dist/latest-v16.x/docs/api/zlib.html
*/