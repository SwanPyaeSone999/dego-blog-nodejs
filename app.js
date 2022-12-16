const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const blogRoutes  = require('./routes/blogRoutes')

const app = express();

//connect to mongodb 
const dbURI = 'mongodb+srv://SwanPyaeSone:mongoSwan@cluster0.uvpn7tj.mongodb.net/node-test?retryWrites=true&w=majority'
mongoose.set('strictQuery',false)
mongoose.connect(dbURI)
.then(res => console.log('connect to db'))
.catch(e => console.log(e))

app.set('view engine','ejs');

app.listen(3000);

app.use(express.static('public'));
app.use(express.urlencoded({  extended : true }))
app.use(morgan('dev'))


app.get('/',(req,res) => {
    res.redirect('/blogs');
})

//blog-routes

app.get('/about', (req,res) => {
    res.render('about', { title : 'About Us' })
})

app.use('/blogs',blogRoutes);

//404
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});

