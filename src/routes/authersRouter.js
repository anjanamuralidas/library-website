const express = require('express')
const autherrouter = express.Router() //creating router
const multer = require('multer')
var autherdata = require('../models/auther')
var authers = [{ img: 'auther5.jpg', auther: 'chethan bhagath' },
    { img: 'auther2.jpg', auther: 'lee child' },
    { img: 'auther3.jpg', auther: 'alice oswald' },
    { img: 'auther1.jpg', auther: 'david lodge' },
    { img: 'auther4.jpg', auther: 'ronald blythe' },
    { img: 'auther2.jpg', auther: 'lee child' },


]
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './public/images/upload')
    },
    filename: function(req, file, callback) {
        callback(null, file.originalname)
    }

})
const upload = multer({ storage: storage });
autherrouter.post('/add', upload.single('autherimage'), function(req, res) {
    var auth = {
        authername: req.body.authername,
        category: req.body.category,
        autherimage: req.file.filename

    }
    console.log(auth)
    var auther = autherdata(auth).save()
    res.redirect("/index")
})

autherrouter.get('/', function(req, res) {
    autherdata.find().then(function(auther) {
        res.render("authers", {
            title: 'librarylogin',
            auther,
            nav: [{ link: '/', name: 'HOME' },
                { link: '/books', name: 'BOOKS' },
                { link: '/authers', name: 'AUTHERS' },
                { link: '/books/addbook', name: 'ADD BOOK' },
                { link: '/authers/addauther', name: 'ADD AUTHER' },
                { link: '/profile', name: 'profile' }
            ]

        })
        console.log(auther)
    })
})











autherrouter.get('/addauther', function(req, res) {
    // res.send("helloworld")
    res.render("addauther", {
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
autherrouter.get('/single/:id', function(req, res) {
    const id = req.params.id
    console.log(id)
    autherdata.findOne({ _id: id }).then((auther) => {
        console.log("details" + auther)
        res.render("autherimg", {
            title: 'librarybook',
            nav: [{ link: '/index', name: 'HOME' },
                { link: '/books', name: 'BOOKS' },
                { link: '/authers', name: 'AUTHERS' },
                { link: '/books/addbook', name: 'ADD BOOK' },
                { link: '/authers/addauther', name: 'ADD AUTHER' },
                { link: '/profile', name: 'profile' },

            ],
            auther: auther

        })
    })
})
autherrouter.get('/add', function(req, res) {
    var auth = {
        authername: req.query.authername,
        category: req.query.category

    }

    console.log(auth)
    var auther1 = autherdata(auth).save()
    res.redirect("/index");

})
module.exports = autherrouter;