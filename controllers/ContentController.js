const mongoose = require('mongoose')
const Content = mongoose.model('Content')

var contentController = {}


//add a new content 

contentController.add = (req, res) => {
    var content = new Content();
    content.id = req.body.id;
    content.title = req.body.title;
    content.story = req.body.story;
    content.date_published = req.body.date_published;
    content.user_id = req.body.user_id;
    content.user_interaction.reads = req.body.user_interaction.reads;
    content.user_interaction.writes = req.body.user_interaction.writes;
    content.save((err, doc) => {
        if (!err) {
            contentController.list(req, res);
        }
        else {
            if (err.name == "ValidationError") {
                res.send("Validation error , send valid parameters and try again");
            }
        }
    })

}

//show list of [title,story]

contentController.list = (req, res) => {
    data = Content.aggregate({
        $project: {
            "title": 1,
            "story": 1,
            "_id": 0
        }
    });
    res.send(data);
}

//list data sorted on the basis of date

contentController.newContents = (req, res) => {
    data = Conent.aggregate(
        [
            { $sort: { date_published: 1 } }
        ]
    )
    res.send(data);
}

//list data sorted on the basis of user interaction

contentController.topContents = (req, res) => {
    data = Content.aggregate(
        [
            { "$addFields": { "sort_order": { "$add": ["$user_interaction.like", "$user_interaction.reads"] } } },
            { "$sort": { "sort_order": -1 } },
            { "$project": { "sort_order": 0, "_id": 0 } }
        ]
    )
    res.send(data);
}


//update an entry 

contentController.update = (req, res) => {
    data = Content.findByIdAndUpdate(req.body.id, { $set: { id: req.body.id, title: req.body.title, story: req.body.story, date_published: req.body.date_published, user_id: req.body.user_id, user_interaction: req.body.user_interaction } }, { new: true }, function (err) {
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
    try {
        data = Content.deleteOne({ "title": $`req.body.title`, "Story": $`req.body.story` })
    }
    catch (err) {
        if (err)
            res.send("there was some error")
        else
            res.send(data)
    }
}


module.exports = contentController;