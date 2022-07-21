
import {URL} from "url";

const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs");

pzn.hostname = "www.khannedy.com";
pzn.searchParams.append("status", "premium");

console.info(pzn.toString());
console.info(pzn.href);
console.info(pzn.protocol);
console.info(pzn.hostname);
console.info(pzn.pathname);
console.info(pzn.searchParams);


/*
    URL

-   URL merupakan standard library untuk bekerja dengan URL
-   https://nodejs.org/dist/latest-v16.x/docs/api/url.html
*/
