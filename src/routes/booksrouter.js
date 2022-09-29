const express = require('express')
const multer = require('multer')
const booksRouter = express.Router() //creating router
const bookdata = require('../models/book')

//image storage
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './public/images/upload')
    },
    filename: function(req, file, callback) {
        callback(null, file.originalname)
    }

})
const upload = multer({ storage: storage });
booksRouter.post('/add', upload.single('bookimage'), function(req, res) {
    var bk = {
        bookname: req.query.bookname,
        auther: req.query.auther,
        bookimage: req.file.filename

    }
    console.log(bk)
    var book = bookdata(bk).save()
    res.redirect("/index")
})

booksRouter.get('/', function(req, res) {
    bookdata.find().then(function(books) {
        res.render("books", {
            title: 'librarylogin',
            books,
            nav: [{ link: '/', name: 'HOME' },
                { link: '/books', name: 'BOOKS' },
                { link: '/authers', name: 'AUTHERS' },
                { link: '/books/addbook', name: 'ADD BOOK' },
                { link: '/authers/addauther', name: 'ADD AUTHER' },
                { link: '/profile', name: 'profile' },

            ]

        })
    })
})



booksRouter.get('/addbook', function(req, res) {
    // res.send("helloworld")
    res.render("addbook", {
        title: 'librarylogin',
        nav: [{ link: '/', name: 'HOME' },
            { link: '/books', name: 'BOOKS' },
            { link: '/authers', name: 'AUTHERS' },
            { link: '/books/addbook', name: 'ADD BOOK' },
            { link: '/authers/addauther', name: 'ADD AUTHER' },
            { link: '/profile', name: 'profile' },

        ]
    })

})
booksRouter.get('/single/:id', function(req, res) {
    const id = req.params.id
    console.log(id)
    bookdata.findOne({ _id: id }).then((books) => {
        console.log("details" + books)
        res.render("image1", {
            title: 'librarybook',
            nav: [{ link: '/', name: 'HOME' },
                { link: '/books', name: 'BOOKS' },
                { link: '/authers', name: 'AUTHERS' },
                { link: '/books/addbook', name: 'ADD BOOK' },
                { link: '/authers/addauther', name: 'ADD AUTHER' },
                { link: '/profile', name: 'profile' },

            ],
            books: books



        })
    })
})




module.exports = booksRouter;