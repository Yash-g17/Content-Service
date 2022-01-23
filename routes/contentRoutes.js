var express = require('express');
const multer = require('multer');
const fs = require('fs')
var router = express.Router();
var content = require('../controllers/ContentController.js')
const upload = multer({ dest: 'tmp/csv/' });


// add csv 

router.post('/addcsv', upload.single('csv'), (req, res) => {
    content.addcsv(req, res)
})

// add new content

router.post('/add', (req, res) => {
    content.add(req, res);
})

// show list of [title , story] 

router.get('/list', (req, res) => {
    content.listContent(req, res);
})

//listall

router.get('/listall', (req, res) => {
    content.listAll(req, res);
})

//listid
router.get('/listid', (req, res) => {
    content.listid(req, res);
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

//deleteAll 

router.delete('/deleteAll', (req, res) => {
    content.deleteAll(req, res)
})
module.exports = router;