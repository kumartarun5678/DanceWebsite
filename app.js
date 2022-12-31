const express = require("express");
const path = require("path");
const app = express();

const mongoose = require('mongoose');
const bodyparser = require('body-parser');
mongoose.connect('mongodb://localhost/contactDance');
const port = 8000;

//define mongoose schema
const contactSchema =new mongoose.Schema({
     name: String, 
     phone: String, 
     email: String, 
     address: String, 
     desc: String 
    });
const contact = mongoose.model('contact', contactSchema );
// kitty.save().then(() => console.log('meow'));
// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {

    const params = {}
    res.status(200).render('home.pug', params);
})
// app.get('/', (req, res) => {

//     const params = {}
//     res.status(200).render('home.pug', params);
// })
app.get('/contact', (req, res) => {

    const params = {}
    res.status(200).render('contact.pug', params);
})
app.post('/contact', (req, res) => {

    var myData = new contact(req.body);
    myData.save().then(()=>{
        res.send("This data is save have been in data base.")
    }).catch(()=>{
        res.status(400).send("This item was not saved to the data base")
    })
    // res.status(200).render('contact.pug', params);
})




// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
