import cluster from "cluster";
import os from "os";
import process from "process";
import http from "http";

if (cluster.isPrimary) {
    // Jalankan workernya
    console.info(`Primary : ${process.pid}`);

    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }

    cluster.addListener("exit", function (worker) {
        console.info(`Worker - ${worker.id} is exit`);
        cluster.fork();
    })
}

if (cluster.isWorker) {
    console.info(`Worker : ${process.pid}`);

    const server = http.createServer(function (req, res) {
        res.write(`Response from process ${process.pid}`);
        res.end();
        process.exit();
    });

    server.listen(3000);
}


/*
    Cluster

-   NodeJS itu secara default dia berjalan single thread, kecuali jika kita membuat thread manual
    menggunakan worker thread, tapi tetap dalam satu process
-   NodeJS memiliki standard library bernama cluster, dimana kita bisa menjalankan beberapa
    process NodeJS secara sekaligus
-   Ini sangat cocok ketika kita menggunakan CPU yang multicore, sehingga semua core bisa kita
    utilisasi dengan baik, misal kita jalankan process NodeJS sejumlah CPU Core
-   https://nodejs.org/dist/latest-v16.x/docs/api/cluster.html


    Cluster Primary dan Worker

-   Di dalam cluster, terdapat 2 jenis aplikasi, Primary dan Worker
-   Primary biasanya digunakan sebagai koordinator atau manager untuk para Worker
-   Sedangkan Worker sendiri adalah aplikasi yang menjalankan tugas nya 
*/
