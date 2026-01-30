// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('Selesai')
//     }, 2000);
// });

// cara tanpa async await
// coba.then(() => console.log(coba));

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const timeout = 5000;
        if (timeout < 5000) {
            setTimeout(() => {
                resolve('Selesai');
            }, timeout);
        } else {
            reject('Terlalu lama');
        }
    });
}
// async await
async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
        // Error Handling
    } catch (error) {
        console.error(error);
    }
}

cobaAsync();

// Error Handling



