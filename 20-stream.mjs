import fs from "fs";

const writer = fs.createWriteStream("target.txt");
writer.write("Eko\n");
writer.write("Kurniawan\n");
writer.write("Khannedy\n");
writer.end();

const reader = fs.createReadStream("target.txt");
reader.addListener("data", function (result) {
    console.info(result.toString());
})

/*
    Stream

-   Stream adalah standard library untuk kontrak aliran data di NodeJS
-   Ada banyak sekali Stream object di NodeJS
-   Stream bisa jadi object yang dibaca, atau bisa ditulis, dan Stream adalah turunan dari
    EventEmitter
-   https://nodejs.org/dist/latest-v16.x/docs/api/stream.html
*/