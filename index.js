// implement your API here
const express = require('express'); // import the express package

//import database
const db = require('./data/db.js');

const server = express(); // creates the server

//Using some middleware to parse request body if its JSON
server.use(express.json());

// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
  
    res.send('Welcome to My Home Page');
    
  });


//Returns an array of all the user objects contained in the database.
server.get('/api/users', (req, res) => {
    
    db.find()
      .then(response => {
        res.json(response)
      })
      .catch(err => {
        res.status(500).json({message: "An error occured..."})
      })
  
  });


 //Returns the user object with the specified id.
 server.get('/api/users/:id', (req, res) => {
  
    db.findById(req.params.id)
      .then(response => {
        res.json(response)
      })
      .catch(err => {
        res.status(404).json({message: "User Not Found..."})
      })

});


 //Creates a user using the information sent inside the request body.
  server.post('/api/users', (req, res) => {
    
    const newUser = req.body

    
    // res.send(newUser)

    db.insert(newUser)
      .then(response => {
        res.status(201).json(response)
      })
      .catch(err => {
        res.status(500).json({message: "User Not Created..."})
      })

  });



//Removes the user with the specified id and returns the deleted user.
  server.delete('/api/users/:id', (req, res) => {
    
    const id = req.params.id
    
    db.remove(id)
      .then(response => {
        res.status(201).json(response)
      })
      .catch(err => {
        res.status(500).json({message: "User Not Deleted..."})
      })
  });


//Updates the user with the specified id using data from the request body. 
//Returns the modified document, NOT the original.
  server.put('/api/users/:id', (req, res) => {
    
    const { name, bio } = req.body

    const id = req.params.id

    db.update(id, req.body)
    .then(response => {

      if (!name || !bio ){
        return res.status(400).json({"error": "The user information could not be modified"})

      }else{

        res.status(201).json(response)

      }  
    })
    .catch(err => {

      res.status(500).send(err) 
  });
});

const port = 5000;

const host = "127.0.0.1";

// watch for connections on port 5000
server.listen(port, host, () =>
  console.log('Server running on http://localhost:5000')
);