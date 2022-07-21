import os from "os";

console.info(os.platform());
console.table(os.cpus());

// Error karna bukan js modules file
/*
    Karena NodeJS menggunakan Modules, jika kita ingin menggunakan Modules, kita juga perlu memberi tahu bahwa file JavaScript kita menggunakan Modules, caranya dengan mengubah nama file dari .js menjadi .mjs
*/