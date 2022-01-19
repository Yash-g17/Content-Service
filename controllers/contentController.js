const express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const Content = mongoose.model('Content')
router.get('/list', (req, res) => {
    data = Content.aggregate({
        $project: {
            "Title": 1,
            "Story": 1,
            "_id": 0
        }
    });
    res.send(data);
})

router.get('/delete', (req, res) => {
    try {
        Content.deleteOne({ "Title": $`req.body.title`, "Story": $`req.body.story` })
    }
    catch (err) {
        if (err)
            res.send("there was some error")
    }
})
router.get('new_contents', (req, res) => {
    data = Conent.aggregate(
        [
            { $sort: { borough: 1 } }
        ]
    )
    res.send(data);
})
router.get('top_contents', (req, res) => {
    data = Content.aggregate(
        [
            { "$addFields": { "sort_order": { "$add": ["$User_interaction.like", "$User_interaction.reads"] } } },
            { "$sort": { "sort_order": -1 } },
            { "$project": { "sort_order": 0, "_id": 0 } }
        ]
    )
})
module.exports = router;