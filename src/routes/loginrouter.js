const express = require('express')
const loginRouter = express.Router() //creating router
const Libdata = require('../models/register')
loginRouter.get('/', function(req, res) {
    // res.send("helloworld")
    res.render("login", {
        title: 'librarylogin',
        log: [{ link: '/index', name: 'submit' },
            { link: '/login/registration', name: 'registration' },

        ]
    })
})

loginRouter.get('/registration', function(req, res) {
    // res.send("helloworld")
    res.render("registration", {
        title: 'librarylogin',

    })
})
loginRouter.get('/add', function(req, res) {
    var dd = {
        name: req.query.name,
        email: req.query.email,
        phone: req.query.phone,
        address: req.query.address,
        password: req.query.password,
        cpassword: req.query.cpassword
    }

    console.log(dd)
    var lib = Libdata(dd).save()
    res.redirect("/index");
})
module.exports = loginRouter