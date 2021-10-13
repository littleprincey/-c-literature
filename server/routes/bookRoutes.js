const express = require('express')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')

const { getBooks, getBook, addNewBookToDB } = require('../db/booksDBFuncs')

// READ -- GET LIST OF BOOKS
router.get('/', (req, res) => {
    getBooks()
        .then(books => {
            res.json(books)
            //res.json means stringify the response & put it in JSON format so we can then deal with it this way
        })
        .catch(err => {
            console.log('catch', err)
            res.status(500).json({ message: 'Something broke' })
        })
})

// READ -- GET SINGLE BOOK 
router.get('/:id', (req, res) => {
    const id = req.params.id
    getBook(id)
        .then(book => {
            res.json(book)
            //res.json means res.send(JSON.stringify(plant))
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Something broke' })
        })
})

// CREATE i.e ADD ONE NEW BOOK 
router.post('/', (req, res) => {
    const newBook = req.body
    addNewBookToDB(newBook)
        .then(id => {
            res.json({ id: id })
            // at this stage one bit of info we don't have is the auto generated id of the new plant, which is why we're passing this back as the response 
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Something broke' })
        })
})

// making a change for github, again, and again, and a-fucking-GAIN


module.exports = router