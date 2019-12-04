// implement your API here
const express = require('express'); // import the express package

const server = express(); // creates the server

// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
  res.send('Hello from Express');
});

//Returns an array of all the user objects contained in the database.
server.get('/api/users', (req, res) => {
    res.send('Hello from Express');
  });

 //Creates a user using the information sent inside the request body.
  server.post('/api/users', (req, res) => {
    res.send('Hello from Express');
  });

//Returns the user object with the specified id.
  server.get('/api/users/:id', (req, res) => {
    res.send('Hello from Express');
  });

//Removes the user with the specified id and returns the deleted user.
  server.delete('/api/users/:id', (req, res) => {
    res.send('Hello from Express');
  });

//Updates the user with the specified id using data from the request body. 
//Returns the modified document, NOT the original.
  server.put('/api/users/:id', (req, res) => {
    res.send('Hello from Express');
  });



// watch for connections on port 5000
server.listen(5000, () =>
  console.log('Server running on http://localhost:5000')
);