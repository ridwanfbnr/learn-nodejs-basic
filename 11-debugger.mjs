function sayHello(name) {
    debugger;
    return `Hello ${name}`;
}

const firstName = "Eko";
console.info(sayHello(firstName));

/*
    Debugger

-   NodeJS memiliki fitur Debugger, dimana kita bisa mengikuti tahapan eksekusi program di NodeJS
-   Hal ini sangat cocok ketika kita melakukan proses debugging, mencari sebab masalah yang terjadi
    di aplikasi kita
-   https://nodejs.org/dist/latest-v16.x/docs/api/debugger.html


    Menjalankan Mode Debug

-   Jika kita menjalankan file JavaScript hanya dengan menggunakan perintah node namafile.js
    maka secara default dia tidak akan jalan dalam mode debug
-   Agar jalan dalam mode debug, kita harus menambahkan perintah inspect
    node inspect namafile.js


    Perintah Debugger

-   Saat masuk ke mode debug, ada beberapa perintah yang bisa kita gunakan dalam melakukan
    debugging

    cont, c: Continue execution
    next, n: Step Next
    step, s: Step in
    out, o: Step out
    pause: Pause running code
*/