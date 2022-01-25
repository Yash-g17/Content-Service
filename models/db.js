const mongoose = require('mongoose');
mongoose.connect('mongodb://mongocontent:27017/ContentDB', { useNewUrlParser: true }, (err) => {
    if (!err) console.log("connected mongodb");
    else console.log('error in connection ' + error);
})

require('./content.model.js');