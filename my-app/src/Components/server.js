const express = require('express')
const app = express()
// var cors = require('cors')
const port = 3001

// app.use(cors())


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
    const userdetails = {
        name: "vijay kumar",
        email: "vijay@example.com",
        password: "Delhi"
    };
    console.log('Received request to login');
    res.json(userdetails);
})

app.post('/Register',(req, res)=>{
    console.log('Received request to register',req.body);
    const { name, email, password } = req.body;
    const userdetails = {
       name: name,
       email: email,
       password: password
    };
    console.log('User details:', userdetails);
    res.json({ message: 'User registered successfully', userdetails: userdetails });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})