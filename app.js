const express = require('express')
const booksRouter = require('./src/routes/booksrouter')
const autherrouter = require('./src/routes/authersRouter')
const loginRouter = require('./src/routes/loginrouter')
const indexrouter = require('./src/routes/indexRouter')
const homerouter = require('./src/routes/homeRouter')
const profilerouter = require('./src/routes/profilerouter')
const { listen } = require('express/lib/application')
const app = express()
app.set('view engine', 'ejs') //setting the view engine-ejs file-html css
app.engine('ejs', require('ejs').__express);
app.set('views', './src/views') //setting path
app.use(express.static('./public')) //for static files like images
app.use('/books', booksRouter)
app.use('/authers', autherrouter)
app.use('/login', loginRouter)
app.use('/index', indexrouter)
app.use('/index', homerouter)
app.use('/profile', profilerouter)
app.get('/', function(req, res) {
    // res.send("hello")
    // res.sendFile(__dirname + "/src/views/index.html")
    res.render("login", {
        title: 'libraryindex',

    })

})



app.listen(2000, () => console.log('function is started on port 2000'))