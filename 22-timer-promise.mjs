
import timers from "timers/promises";

// console.info(`Start Time at ${new Date()}`);
// const name = await timers.setTimeout(5000, "Hello");
// console.info(`Start Time at ${new Date()}`);
// console.info(name);

for await (const startTime of timers.setInterval(1000, "Hello")) {
    console.info(`Start Time at ${new Date()}`);
}
