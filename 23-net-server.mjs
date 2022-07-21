
import net from "net";

const server = net.createServer( (client) => {
    console.info("Client Connected");

    client.addListener("data", (data) => {
        console.info(`Receive data ${data.toString()}`);
        client.write(`Hello ${data.toString()}\r\n`);
    });

})

server.listen(3000, "localhost");

/*
    Net

-   Net merupakan standard library yang bisa digunakan untuk membuat network client dan server
    berbasis TCP
-   Net Client dan Server merupakan object Stream, sehingga kita bisa baca datanya atau tulis
    datanya dari object Stream nya tersebut, selain itu Net Server dan Client juga merupakan
    turunan dari EventEmitter sehingga bisa menambahkan listener
-   Net
*/
