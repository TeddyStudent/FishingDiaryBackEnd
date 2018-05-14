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

//GET user, return all catches
// this is not needed in final application
router.get('/',(req,res) => {
    res.send(saaliskalat);
});


//update the validateCatch when POST&PUT operations are handled
/*
function validateCatch(catch){
    //use Joi to define validation rules for the name parameter
    const schema = {
        name: Joi.string().min(1).max(40).required()
    };
    return Joi.validate(catch, schema);
};
*/


module.exports = router;