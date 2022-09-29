const express = require('express')
const profilerouter = express.Router() //creating router
var nav = [{ link: '/index', name: 'HOME' },
    { link: '/books', name: 'BOOKS' },
    { link: '/authers', name: 'AUTHERS' },
    { link: '/books/addbook', name: 'ADD BOOK' },
    { link: '/authers/addauther', name: 'ADD AUTHER' },
    { link: '/profile', name: 'profile' },
]
var authers = [{ img: 'auther5.jpg', auther: 'chethan bhagath' },
    { img: 'auther2.jpg', auther: 'lee child' },
    { img: 'auther3.jpg', auther: 'alice oswald' },
    { img: 'auther1.jpg', auther: 'david lodge' },
    { img: 'auther4.jpg', auther: 'ronald blythe' },
    { img: 'auther2.jpg', auther: 'lee child' },


]
var books = [{ image: 'book4.jpg', bookname: 'the two tower', auther: 'jrr' },
    { image: 'book1.jpg', bookname: 'the psycology of money', auther: 'jrr' },
    { image: 'book3.jpg', bookname: 'the two tower', auther: 'morgen housel' },
    { image: 'book3.jpg', bookname: 'your soul is a river', auther: 'nikita gill' },
    { image: 'book4.jpg', bookname: 'the two tower', auther: 'jrr' },
    { image: 'book1.jpg', bookname: 'the two tower', auther: 'jrr' }


]
var pro = [{ contact: '11234', place: 'usa' },
    { contact: '45567', place: 'london' },
    { contact: '199000', place: 'paris' },
    { contact: '24453666', place: 'london' },
    { contact: '133389', place: 'germany' },
    { contact: '1234566', place: 'brazil' }

]
profilerouter.get('/', function(req, res) {
    // res.send("helloworld")
    res.render("profile", {
        title: 'librarybook',
        nav: [{ link: '/index', name: 'HOME' },
            { link: '/books', name: 'BOOKS' },
            { link: '/authers', name: 'AUTHERS' },
            { link: '/books/addbook', name: 'ADD BOOK' },
            { link: '/authers/addauther', name: 'ADD AUTHER' },
            { link: '/profile', name: 'profile' },
        ],
        authers: [{ img: 'auther5.jpg', auther: 'chethan bhagath' },
            { img: 'auther2.jpg', auther: 'lee child' },
            { img: 'auther3.jpg', auther: 'alice oswald' },
            { img: 'auther1.jpg', auther: 'david lodge' },
            { img: 'auther4.jpg', auther: 'ronald blythe' },
            { img: 'auther2.jpg', auther: 'lee child' },


        ],
        books: [{ image: 'book4.jpg', bookname: 'the two tower', auther: 'jrr' },
            { image: 'book1.jpg', bookname: 'the psycology of money', auther: 'jrr' },
            { image: 'book3.jpg', bookname: 'the two tower', auther: 'morgen housel' },
            { image: 'book3.jpg', bookname: 'your soul is a river', auther: 'nikita gill' },
            { image: 'book4.jpg', bookname: 'the two tower', auther: 'jrr' },
            { image: 'book1.jpg', bookname: 'the two tower', auther: 'jrr' }


        ],
        nav: [{ link: '/', name: 'HOME' },
            { link: '/books', name: 'BOOKS' },
            { link: '/authers', name: 'AUTHERS' },
            { link: '/books/addbook', name: 'ADD BOOK' },
            { link: '/authers/addauther', name: 'ADD AUTHER' },
            { link: '/profile', name: 'profile' },

        ],


    })
})
profilerouter.get('/single/:id', function(req, res) {
    const id = req.params.id
    console.log(id)
    res.render("profileview", {
        title: 'librarybook',
        nav: [{ link: '/', name: 'HOME' },
            { link: '/books', name: 'BOOKS' },
            { link: '/authers', name: 'AUTHERS' },
            { link: '/books/addbook', name: 'ADD BOOK' },
            { link: '/authers/addauther', name: 'ADD AUTHER' },
            { link: '/profile', name: 'profile' },

        ],
        books: books[id],
        auther: authers[id],
        profile: pro[id]


    })
})

module.exports = profilerouter