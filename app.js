require('./models/db')
const express = require("express");
var bodyParser = require('body-parser');
const cron = require("node-cron")


// cron.schedule("* * * * *", function () {

// });

const app = express();
const ContentRouter = require('./routes/contentRoutes');
const { schedule } = require('node-cron');
app.use(bodyParser.json())

app.use('/content', ContentRouter)
app.get('/', (req, res) => {
    res.end("hello darkness my old friend !!!!")
})
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

