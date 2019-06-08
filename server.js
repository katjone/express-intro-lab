// server.js
// SERVER-SIDE JAVASCRIPT
//exports the express() function from the express module
const express = require('express');
//creates an express application called 'app'
const app = express();

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
//app.use takes in a request and mounts the middleware specified in the function body (in this case, CORS)
app.use((req, res, next) => {
  // this basically allows us to answer and respond to calls from anywhere
  res.header("Access-Control-Allow-Origin", "*");
  //this specifies which HTTP headers can be used during a request. 
  res.header("Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept");
  //next() passes the result of this function down to the next thing
  next();
});


app.use(express.static('public'));


const taquerias = [
  { name: "La Taqueria" },
  { name: "El Farolito" },
  { name: "Taqueria Cancun" }
];

const albums = [
  {
    title: 'Cupid Deluxe',
    artist: 'Blood Orange'
  },
  {
    title: 'M3LL155X - EP',
    artist: 'FKA twigs'
  },
  {
    title: 'Fake History',
    artist: 'letlive.'
  }
];

//when our express app recieves a get request, it will respond with 'Hello World'
app.get('/', (req, res) => {
  console.log(req)
  console.log(res)
  console.log(__dirname)
  res.sendFile('views/index.html' , { root : __dirname});});

app.get('/api/albums', (req, res) => res.json(albums));
app.get('/api/taquerias', (req, res) => res.json(taquerias));


//listens at a specific port for connections ;)
app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));
