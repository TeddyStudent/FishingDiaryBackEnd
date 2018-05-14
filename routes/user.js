const Joi = require('joi');
var express = require('express')
  , router = express.Router();

//test user data
const tilit = [
	{ idtili: 1, etunimi: 'Harrison', sukunimi: 'Ford' , email: 'haford@domain.com', kayttajatunnus: 'haford', salasana: 'holygrail' },
	{ idtili: 2, etunimi: 'Sean', sukunimi: 'Connery' , email: 'seconnery@domain.com', kayttajatunnus: 'seconnery', salasana: 'lastcrusade' },
	{ idtili: 3, etunimi: 'River', sukunimi: 'Phoenix' , email: 'riphoenix@domain.com', kayttajatunnus: 'riphoenix', salasana: 'standbyme' },
];


//GET user, return all users, this is not needed in final application
router.get('/',(req,res) => {
    res.send(tilit);
});

//GET user with id, return user data
router.get('/:userid',(req,res) => {
    //res.send('GET/user not yet implemented.');

    //find the requested object
    //test version
    const tili = tilit.find(c => c.idtili === parseInt(req.params.userId));
    if (!tili) res.status(404).send('Object was not found!');
    res.send(tili);
});

//POST user, return user data
router.post('/',(req,res) => {
    res.send('POST/user not yet implemented.');

    //validate data, return 400 if error
    //const { error } = validoiReissu(req.body);
    //if (error) return res.status(400).send(error.details[0].message);

});

//PUT user, return user data
router.put('/:userid',(req,res) => {
    res.send('PUT/user not yet implemented.');
});

//DELETE user, return user data
router.delete('/:userid',(req,res) => {
    res.send('DELETE/user not yet implemented.');
});


//to avoid multiplying validation code lets use this function for reissu object
function validateUser(user){
    //use Joi to define validation rules for the name parameter
    const schema = {
        name: Joi.string().min(1).max(40).required()
    };
    return Joi.validate(user, schema);
};


module.exports = router;