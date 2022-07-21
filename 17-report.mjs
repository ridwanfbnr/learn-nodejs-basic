import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "report.json";

function sampleError() {
    throw new Error("sample error");
}

sampleError();


/*
    Report
    
-   Report merupakan fitur yang terdapat di NodeJS untuk membuat laporan secara otomatis dalam
    file ketika sesuatu terjadi pada aplikasi NodeJS kita, misal terjadi error
-   https://nodejs.org/dist/latest-v16.x/docs/api/report.html
*/