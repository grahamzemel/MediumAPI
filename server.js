const express = require('express')
require('dotenv').config();
app = express()
port = process.env.PORT || 3000
mongoose = require('mongoose')
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.43pzu.mongodb.net/MediumAPI?retryWrites=true&w=majority`;
Article = require('./api/models/mediumModel') //model loading

// mongoose connection
mongoose.connect(uri, {
 useNewUrlParser: true,
 useUnifiedTopology: true
 }).then(res=>{
  console.log("DB Connected!")
 }).catch(err => {
  console.log(Error, err.message);
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
const routes = require('./api/routes/mediumRoutes'); //importing route
routes(app); //register
app.get('*', (req, res)=>{
res.status(404).send({url: req.originalUrl + ' not found'})
})
app.listen(port);
console.log('Medium API server started on: ' + port);