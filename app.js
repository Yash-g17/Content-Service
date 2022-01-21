require('./models/db')
const ContentRouter = require('./routes/contentRoutes')
const express = require("express");
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())


app.use('/content', ContentRouter)
app.get('/', (req, res) => {
    res.end("hello darkness my old friend")
})
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

