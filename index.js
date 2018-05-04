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

    //validate data, return 400 if error
    const { error } = validoiReissu(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    //create the new object
    const reissu = {
        id: reissut.length + 1,
        name: req.body.name
    };
    reissut.push(reissu);

    //Return the object
    res.send(reissu);
});


//Lets listen PUT requests on 'localhost:<port>/api/reissut/<id of reissu object>' to modify an reissu object
app.put('/api/reissut/:reissuId',(req,res) => {

    //find the object, return 404 if error
    const reissu = reissut.find(c => c.id === parseInt(req.params.reissuId));
    if (!reissu) return res.status(404).send('Object was not found!');

    //validate data, return 400 if error
    const { error } = validoiReissu(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //modify the object
    reissu.name = req.body.name;

    //return modified object
    res.send(reissu);
});



//Lets listen DELETE requests on 'localhost:<port>/api/reissut/<id of reissu object>' to delete a reissu object
app.delete('/api/reissut/:reissuId',(req,res) => {

    //find the object, return 404 if error
    const reissu = reissut.find(c => c.id === parseInt(req.params.reissuId));
    if (!reissu) return res.status(404).send('Object was not found!');

    //delete the object
    const index = reissut.indexOf(reissu);
    reissut.splice(index,1);

    //return the same reissu
    res.send(reissu);
    
});


//to avoid multiplying validation code lets use this function for reissu object
function validoiReissu(reissu){
    //use Joi to define validation rules for the name parameter
    const schema = {
        name: Joi.string().min(1).max(40).required()
    };
    return Joi.validate(reissu, schema);
};


//use the environment variable PORT if available, otherwise assign port to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
