import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.addListener("event", function () {
    console.info("Hello World!");
})

emitter.addListener("event", function (name) {
    console.info(`Hello ${name}!`);
});

console.info(emitter.listeners("event"));

emitter.emit("event", "Eko")

/*
    Events

-   Events adalah standard library di NodeJS yang bisa digunakan sebagai implementasi EventListener
-   Di dalam Events, terdapat sebuah class bernama EventEmitter yang bisa digunakan untuk
    menampung data listener per jenis event
-   Lalu kita bisa melakukan emmit untuk mentrigger jenis event dan mengirim data ke event tersebut
-   https://nodejs.org/dist/latest-v16.x/docs/api/events.html
*/