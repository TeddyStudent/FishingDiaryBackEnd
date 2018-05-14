const Joi = require('joi');
var express = require('express')
  , router = express.Router();


//Add all the needed routes for catch handling

//test data
const saaliskalat = [
	{ idsaaliskalat: 1, pituus: 14, paino: 230, saantiaika: '15:22:21', kalalajit_idkalalajit: 1, vieheet_idvieheet: 1, kalareissu_idkalareissu: 1, kalareissu_tili_idtili:1 },
	{ idsaaliskalat: 2, pituus: 23, paino: 430, saantiaika: '16:22:21', kalalajit_idkalalajit: 1, vieheet_idvieheet: 1, kalareissu_idkalareissu: 1, kalareissu_tili_idtili:1 },
	{ idsaaliskalat: 3, pituus: 22, paino: 430, saantiaika: '16:32:21', kalalajit_idkalalajit: 1, vieheet_idvieheet: 2, kalareissu_idkalareissu: 1, kalareissu_tili_idtili:1 },
];

//GET catch, return all catches
// this is not needed in final application
router.get('/',(req,res) => {
    res.send(saaliskalat);
});

//Lets listen GET requests
router.get('/:catchId',(req,res) => {
    //find the requested object
    const saaliskala = saaliskalat.find(c => c.idsaaliskala === parseInt(req.params.catchId));
    if (!saaliskala) res.status(404).send('Object was not found!');
    res.send(saaliskala);
});


//Lets listen POST requests
//catch object should be in the request body
router.post('/',(req,res) => {

    //validate data, return 400 if error
    const { error } = validateCatch(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    //create the new object
    const saaliskala = {
        idsaaliskala: saaliskalat.length + 1,
        pituus: req.body.pituus,
        paino: req.body.paino,
        saantiaika: req.body.saantiaika,
        kalalajit_idkalalajit: req.body.kalalajit_idkalalajit,
        vieheet_idvieheet: req.body.vieheet_idvieheet,
        kalareissu_idkalareissu: req.body.kalareissu_idkalareissu,
        kalareissu_tili_idtili: req.body.kalareissu_tili_idtili
    };
    saaliskalat.push(saaliskala);

    //Return the object
    res.send(saaliskala);
});


//Lets listen PUT requests 
router.put('/:catchId',(req,res) => {

    //find the object, return 404 if error
    const saaliskala = saaliskalat.find(c => c.idsaaliskala === parseInt(req.params.catchId));
    if (!saaliskala) return res.status(404).send('Object was not found!');

    //validate data, return 400 if error
    const { error } = validateCatch(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //modify the object
    //reissu.name = req.body.name;
    saaliskala.pituus = req.body.pituus,
    saaliskala.paino = req.body.paino,
    saaliskala.saantiaika = req.body.saantiaika,
    saaliskala.kalalajit_idkalalajit = req.body.kalalajit_idkalalajit,
    saaliskala.vieheet_idvieheet = req.body.vieheet_idvieheet,
    saaliskala.kalareissu_idkalareissu = req.body.kalareissu_idkalareissu,
    saaliskala.kalareissu_tili_idtili = req.body.kalareissu_tili_idtili
    
    //return modified object
    res.send(kalareissu);
});


//Lets listen DELETE requests
router.delete('/:catchId',(req,res) => {

    //find the object, return 404 if error
    const saaliskala = saaliskalat.find(c => c.idsaaliskala === parseInt(req.params.catchId));
    if (!saaliskala) return res.status(404).send('Object was not found!');

    //delete the object
    const index = saaliskalat.indexOf(saaliskala);
    saaliskalat.splice(index,1);

    //return the same reissu
    res.send(saaliskala);
    
});


//update the validateCatch when POST&PUT operations are handled
function validateCatch(saalis){
    //use Joi to define validation rules for the name parameter
    const schema = {
        //name: Joi.string().min(1).max(40).required()
        //idsaaliskalat:
        pituus: Joi.number().integer(),
        paino: Joi.number().integer(),
        saantiaika: Joi.string().required(),
        kalalajit_idkalalajit: Joi.number().integer().required(),
        vieheet_idvieheet: Joi.number().integer().required(),
        kalareissu_idkalareissu: Joi.number().integer().required(),
        kalareissu_tili_idtili: Joi.number().integer().required()
    };
    return Joi.validate(saalis, schema);
};


module.exports = router;