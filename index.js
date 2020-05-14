console.log('starting...');

const signals = ['SIGTERM', 'SIGINT', 'SIGHUP'];

signals.forEach(signal => {
    process.on(signal, () => {
        shutdown(signal);
    });
});

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // delay response
    setTimeout(() => {
        res.send('Hello World!')
    }, 5000);
})

const server = app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

function shutdown(signal) {
    console.log('Shutdown signal recieved: ' + signal)
    server.close(() => {
        console.log('express server closed.')
        process.exit(0);
    })
}