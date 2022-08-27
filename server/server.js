const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001

app.get('/', (req, res)=> {
    res.end('hello')
})

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})