import dns from "dns/promises";

const result = await dns.lookup("www.programmerzamannow.com");

console.info(result);

console.info(result.address);
console.info(result.family);


/*
    DNS

-   DNS merupakan standard library yang bisa digunakan untuk bekerja dengan DNS 
    (Domain Name Server)
-   https://nodejs.org/dist/latest-v16.x/docs/api/dns.html
*/