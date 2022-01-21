const mongoose = require('mongoose')
const Content = mongoose.model('Content')

var contentController = {}

//add new contents via csv 

contentController.addcsv = (req, res) => {

}

//add a new content 

contentController.add = (req, res) => {
    try {
        var content = new Content();
        content.id = req.body.id;
        content.title = req.body.title;
        content.story = req.body.story;
        content.date_published = req.body.date_published;
        content.user_id = req.body.user_id;
        content.user_interaction.reads = req.body.user_interaction.reads;
        content.user_interaction.likes = req.body.user_interaction.likes;
        content.save((err, doc) => {
            if (!err) {
                console.log(doc);
                contentController.listAll(req, res);
            }
            else {
                console.log(err);
                if (err.name == "ValidationError") {
                    res.send("Validation error , send valid parameters and try again");
                }
            }
        })
    }
    catch (err) {
        console.log(err);
        res.send("there was an error")
    }

}

//show everything

contentController.listAll = (req, res) => {

    Content.find({}).exec(function (err, contents) {
        if (err) {
            console.log(err);
            res.send('error has occured');
        } else {
            console.log(contents);
            res.send(contents);
        }
    });
}

//show list of [title,story]

contentController.listContent = (req, res) => {

    // data = Content.find({})
    Content.aggregate([{
        $project: { _id: 0, title: 1, story: 1 }
    }]).exec(function (err, contents) {
        if (err) {
            console.log(err);
            res.send('error has occured');
        } else {
            console.log(contents);
            res.send(contents);
        }
    });
    // res.send(data);
}

//list data sorted on the basis of date

contentController.newContents = (req, res) => {
    Content.aggregate(
        [
            { $sort: { date_published: 1 } }
        ]
    ).exec(function (err, contents) {
        if (err) {
            console.log(err);
            res.send('error has occured');
        } else {
            console.log(contents);
            res.send(contents);
        }
    });
    // res.send(data);
}

//list data sorted on the basis of user interaction

contentController.topContents = (req, res) => {
    Content.aggregate(
        [
            { $addFields: { sort_order: { $add: ["$user_interaction.likes", "$user_interaction.reads"] } } },
            { $sort: { sort_order: -1 } },
            { $project: { sort_order: 0, _id: 0 } }
        ]
    ).exec(function (err, contents) {
        if (err) {
            console.log(err);
            res.send('error has occured');
        } else {
            console.log(contents);
            res.send(contents);
        }
    });
    // res.send(data);
}


//update an entry 

contentController.update = (req, res) => {

    Content.findByIdAndUpdate(req.body._id, { $set: { id: req.body.id, title: req.body.title, story: req.body.story, date_published: req.body.date_published, user_id: req.body.user_id, user_interaction: req.body.user_interaction } }, { new: true }, function (err) {
        if (!err) {
            res.send("updated succesfully");
        }
        else {
            if (err.name == "ValidationError") {
                res.send("Validation error , send valid parameters and try again");
            }
        }
    })

}

//delete a record of a given  title and story

contentController.delete = (req, res) => {
    Content.deleteOne({ "title": `${req.body.title}`, "Story": `${req.body.story}` }).exec(function (err, contents) {
        if (err) {
            console.log(err);
            res.send('error has occured');
        } else {
            console.log(contents);
            res.send(contents);
        }
    });
}


module.exports = contentController;