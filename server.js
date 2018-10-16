const express = require('express');
const app = express();

//access to static folder by the server
app.use(express.static('static'));

//Data from url /fruits
app.get('/fruits',(req, res) =>{
  let fruits = [
    {
      fr:'pomme',
      en:'apple',
      it:'mela'
    },
    {
      fr:'citron',
      en:'lemon',
      it:'limone'
    },
    {
      fr:'tomate',
      en:'tomato',
      it:'pomodoro'
    }
  ];
  res.json(fruits)
});

//Test server is running
app.listen(4000,() => {
  console.log('Serveur écoutant le port 4000\n CTRL + C pour stopper le serveur');
});
