function samplePromise() {
    return Promise.resolve("Eko");
}

async function runPromise() {
    const name = await samplePromise();
    console.info(name);
}

runPromise();
