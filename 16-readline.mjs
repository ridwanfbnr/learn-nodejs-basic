import process from "process";
import readline from "readline";

const result = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

result.question("Siapa Nama Anda ? ", function (name) {
    console.info(`Hallo ${name}`);
    result.close();
})

/*
    Readline

-   Readline merupakan standard library yang digunakan untuk membaca input
-   Readline hanya mendukung versi callback di versi NodeJS LTS 16
-   Di versi NodeJS LTS 17 sudah mendukung promise sehingga lebih mudah digunakan, namun itupun
    masih dalam tahap experimental
-   https://nodejs.org/dist/latest-v16.x/docs/api/readline.html
*/