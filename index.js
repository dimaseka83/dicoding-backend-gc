const fs = require('fs');

const readableStream = fs.createReadStream('./notes.txt', {
    highWaterMark: 10
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
        console.log(error);
    }
})

readableStream.on('end', () => {
    console.log('Done');
})