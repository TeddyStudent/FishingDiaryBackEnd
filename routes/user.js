const Joi = require('joi');
var express = require('express')
  , router = express.Router();

//test user data
const tilit = [
	{ idtili: 1, etunimi: 'Harrison', sukunimi: 'Ford' , email: 'haford@domain.com', salasana: 'holygrail' },
	{ idtili: 2, etunimi: 'Sean', sukunimi: 'Connery' , email: 'seconnery@domain.com', salasana: 'lastcrusade' },
	{ idtili: 3, etunimi: 'River', sukunimi: 'Phoenix' , email: 'riphoenix@domain.com', salasana: 'standbyme' },
];


//GET user, return all users, this is not needed in final application
router.get('/',(req,res) => {
    res.send(tilit);
});

//GET user with id, return user data
router.get('/:userId',(req,res) => {
    //res.send('GET/user not yet implemented.');

    //find the requested object
    //test version
    const tili = tilit.find(c => c.idtili === parseInt(req.params.userId));
    if (!tili) res.status(404).send('Object was not found!');
    res.send(tili);
});

//POST user, return user data
router.post('/',(req,res) => {
    //res.send('POST/user not yet implemented.');

    //validate data, return 400 if error
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    //create the new object
    const tili = {
        idtili: tilit.length + 1,
        etunimi: req.body.etunimi,
        sukunimi: req.body.sukunimi,
        email: req.body.email,
        salasana: req.body.salasana
    };
    tilit.push(tili);

    //Return the object
    res.send(tili);

});

//PUT user, return user data
router.put('/:userId',(req,res) => {
    //res.send('PUT/user not yet implemented.');

    //find the object, return 404 if error
    const tili = tilit.find(c => c.idtili === parseInt(req.params.userId));
    if (!tili) return res.status(404).send('Object was not found!');

    //validate data, return 400 if error
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //modify the object
    tili.etunimi = req.body.etunimi,
    tili.sukunimi = req.body.sukunimi,
    tili.email = req.body.email,
    tili.salasana = req.body.salasana
    
    //return modified object
    res.send(tili);
});

//DELETE user, return user data
router.delete('/:userId',(req,res) => {
    //res.send('DELETE/user not yet implemented.');

    //find the object, return 404 if error
    const tili = tilit.find(c => c.idtili === parseInt(req.params.userId));
    if (!tili) return res.status(404).send('Object was not found!');

    //delete the object
    const index = tilit.indexOf(tili);
    tilit.splice(index,1);

    //return the same reissu
    res.send(tili);

});


//to avoid multiplying validation code lets use this function for reissu object
//See information from github.com/hapijs/joi
function validateUser(user){
    //use Joi to define validation rules for the name parameter
    const schema = {
        etunimi: Joi.string().min(1).max(45).required(),
        sukunimi: Joi.string().min(1).max(45).required(),
        email: Joi.string().email(),
        salasana: Joi.string().min(1).max(45).required()
    };
    return Joi.validate(user, schema);
};


module.exports = router;