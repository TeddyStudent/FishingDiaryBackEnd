const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

//Create a test data for reissut
const reissut = [
    { id: 1, name: 'Reissu1' },
    { id: 2, name: 'Reissu2' },
    { id: 3, name: 'Reissu3' },
];


//Lets listen GET requests on root 'localhost:<port>' and return a message
app.get('/',(req,res) => {
    res.send('Hello World!!');
});

//Lets listen GET requests on 'localhost:<port>/api/reissut' and return reissut objects
app.get('/api/reissut',(req,res) => {
    res.send(reissut);
});

//Lets listen GET requests on 'localhost:<port>/api/reissut/<id of reissu object>' and return the requested object
app.get('/api/reissut/:reissuId',(req,res) => {
    //find the requested object
    const reissu = reissut.find(c => c.id === parseInt(req.params.reissuId));
    if (!reissu) res.status(404).send('Object was not found!');
    res.send(reissu);
});

//Lets listen POST requests on 'localhost:<port>/api/reissut' and create the new reissu object
//reissu object should be in the request body
app.post('/api/reissut',(req,res) => {

    //lets use joi to validate body data
    const schema = {
        name: Joi.string().min(1).max(40).required()
    };
    const result = Joi.validate(req.body, schema);
    
    //if validation fails return the error
    if (result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    
    const reissu = {
        id: reissut.length + 1,
        name: req.body.name
    };
    reissut.push(reissu);
    res.send(reissu);
});


//use the environment variable PORT if available, otherwise assign port to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
