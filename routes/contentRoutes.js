var express = require('express')
var router = express.Router();
var content = require('../controllers/ContentController.js')

// add new content

router.post('/add', (req, res) => {
    content.add(req, res);
})

// show list of [title , story] 

router.get('/list', (req, res) => {
    content.list(req, res);
})

// show list of contents sorted on the basis of user_interaction

router.get('/topContents', (req, res) => {
    content.topContents(req, res);
})

//show list of contents sorted on the basis of date published

router.get('/newContents', (req, res) => {
    content.newContents(req, res);
})

//update a content 

router.post('/update', (req, res) => {
    content.update(req, res);
})

//delete a content 

router.delete('/delete', (req, res) => {
    content.delete(req, res);
})