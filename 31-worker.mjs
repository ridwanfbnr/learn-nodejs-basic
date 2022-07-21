import { threadId, parentPort } from "worker_threads";

parentPort.addListener("message", function (message) {
    for (let i = 0; i < message; i++) {
        console.info(`Thread - ${threadId}, send message ke ${i}`);
        parentPort.postMessage(i);
    };
    parentPort.close();
})

/*
    Worker Threads

-   Worker Threads adalah standard library yang bisa kita gunakan untuk menggunakan thread ketika
    mengeksekusi JavaScript secara pararel
-   Worker Threads sangat cocok ketika kita membuat kode program yang butuh jalan secara pararel,
    dan biasanya kasusnya adalah ketika kode program kita membutuhkan proses yang CPU intensive,
    seperti misalnya enkripsi atau kompresi
-   Cara kerja Worker Threads mirip dengan Web Worker di JavaScript Web Api
-   https://nodejs.org/dist/latest-v16.x/docs/api/worker_threads.html
*/
