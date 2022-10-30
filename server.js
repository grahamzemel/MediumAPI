const express = require('express')
app = express()
port = process.env.PORT || 3000
mongoose = require('mongoose')
const uri = 'mongodb://localhost/MediumDB';
Article = require('./api/models/mediumModel') //created model loading here
// mongoose instance connection url connection
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
routes(app); //register the route
app.get('*', (req, res)=>{
res.status(404).send({url: req.originalUrl + ' not found'})
})
app.listen(port);
console.log('Medium API server started on: ' + port);