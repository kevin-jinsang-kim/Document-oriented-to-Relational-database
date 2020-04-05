const express = require('express');
const router = express.Router();

const db = require('../../db')


router.get('/', (req, res) => {
    db.getSongs()
    .then(response => {
        console.log("backend response")
        res.json(response)
    })
    .catch(err => {
        res.status(500).send('Database error: ' + err.message)
    })
})

router.post('/', (req, res) => {
    const song = req.body
    console.log("posted to backend: ", song)
    db.migrateSong(song)
    .then(resolve => res.json(''))
})

module.exports = router
