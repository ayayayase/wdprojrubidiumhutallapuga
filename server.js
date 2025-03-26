
// Step 3: Require/Loads the express module
const express = require('express');

// body-parser is used to read data payload from the http request body
const bodyParser = require('body-parser'); 
//  path is used to set default directories for MVC and also for the static files
const path = require('path'); 
// include the defined package
const bcrypt = require('bcrypt');



// Step 4: Creates our express server
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));




//dividedividedivide
const users = [];

app.get('/users', (req, res) => {
    res.json(users);
 });

 app.post('/users', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const user = { name: req.body.name, password: hashedPassword }
      users.push(user)
      res.status(201).send('Account succesfully created!')
    } catch {
      res.status(500).send()
    }
  })
  
  app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)
    if (user == null) {
      return res.status(400).send('Cannot find user')
    }
    try {
      if(await bcrypt.compare(req.body.password, user.password)) {
        res.send('Hooray logged in!')
      } else {
        res.send('Oh no! Login failed. Please recheck password.')
      }
    } catch {
      res.status(500).send()
    }
  })
//dividedividedivide



//Serves static files inside the public folder
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));

//Sets a basic route index.hbs when website initially starts and when home is clicked from the nav bar or whenever a process needs to go back to home 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Step 5: Start HTTP Server on a port number 3000
// This will create a web service for your own project
const port = 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));