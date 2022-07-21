setInterval(() => {
    console.info(`Start Time at ${new Date()}`);
}, 1000);

/*
    Timer

-   Timer merupakan standard library untuk melakukan scheduling
-   Function di Timer terdapat di globals, sehingga kita bisa menggunakannya tanpa melakukan
    import, namun semua function timer menggunakan callback
-   Jika kita ingin menggunakan timer versi promise, kita bisa meng-import dari module
    timer/promise
-   https://nodejs.org/dist/latest-v16.x/docs/api/timers.html
*/
