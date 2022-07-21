const buffer = Buffer.from("Eko Kurniawan Khannedy", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferHex = Buffer.from("456b6f204b75726e696177616e204b68616e6e656479", "hex");
console.info(bufferHex.toString());
console.info(bufferHex.toString("utf8"));

/*
    Buffer Encoding

-   Buffer juga bisa digunakan untuk melakukan encoding dari satu encoding ke encoding yang lain
-   Ada banyak encoding yang didukung oleh Buffer, misal utf8, ascii, hex, base64, base64url dan
    lain-lain
*/