require('./models/db')
const ContentController = require('./controllers/ContentController')
const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.end("hello darkness my old friend")
})
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

// app.use('/content', ContentController)
