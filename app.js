require('./models/db')
const contentController = require('./controllers/contentController')
const express = require("express");
const app = express();
// app.get('/', (req, res) => {
//     res.end("helllo there general kenobi")
// })
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

app.use('/content', contentController)
