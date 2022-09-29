const express = require('express')
const indexrouter = express.Router() //creating router
indexrouter.get('/', function(req, res) {
    // res.send("helloworld")
    res.render("index", {
        title: 'librarybook',
        nav: [{ link: '/index', name: 'HOME' },
            { link: '/books', name: 'BOOKS' },
            { link: '/authers', name: 'AUTHERS' },
            { link: '/books/addbook', name: 'ADD BOOK' },
            { link: '/authers/addauther', name: 'ADD AUTHER' },
            { link: '/profile', name: 'profile' },
        ]
    })
})


module.exports = indexrouter