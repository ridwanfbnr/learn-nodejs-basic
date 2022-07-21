const buffer = Buffer.from("Eko Kurniawan Khannedy");

console.info(buffer);
console.info(buffer.toString());

buffer.reverse();
console.info(buffer.toString());


/*
    Buffer

-   Buffer merupakan object yang berisikan urutan byte dengan panjang tetap
-   Buffer merupakan turunan dari tipe data Uint8Array
-   https://nodejs.org/dist/latest-v16.x/docs/api/buffer.html
*/