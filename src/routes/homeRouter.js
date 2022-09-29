const express = require('express')
const homerouter = express.Router() //creating router
homerouter.get('/', function(req, res) {
    // res.send("helloworld")
    res.render("index", {
        title: 'librarylogin',
        nav: [{ link: '/index', name: 'HOME' },
            { link: '/books', name: 'BOOKS' },
            { link: '/authers', name: 'AUTHERS' },
            { link: '/books/addbook', name: 'ADD BOOK' },
            { link: '/authers/addauther', name: 'ADD AUTHER' },
            { link: '/profile', name: 'profile' },

        ]
    })
})

module.exports = homerouter