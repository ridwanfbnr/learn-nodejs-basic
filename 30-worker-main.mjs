import { threadId, Worker } from "worker_threads";

const worker1 = new Worker("./31-worker.mjs");
const worker2 = new Worker("./31-worker.mjs");

worker1.postMessage(10);
worker2.postMessage(10);

worker1.addListener("message", function (message) {
    console.info(`Thread - ${threadId}, received message ke ${message} from Thread 1`);
});

worker2.addListener("message", function (message) {
    console.info(`Thread - ${threadId}, received message ke ${message} from Thread 2`);
});

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
