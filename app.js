require('./models/db')
const express = require("express");
var bodyParser = require('body-parser');

// var redis = require('redis');
// var publisher = redis.createClient();
// publisher.publish(`notification`, `{ ”message”: "Hello world” }`, function () {
//     process.exit(0);
// });

const app = express();
const ContentRouter = require('./routes/contentRoutes')
app.use(bodyParser.json())

app.use('/content', ContentRouter)
app.get('/', (req, res) => {
    res.end("hello darkness my old friend !!!!")
})
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

