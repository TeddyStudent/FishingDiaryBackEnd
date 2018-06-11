const Joi = require('joi');
var express = require('express')
  , router = express.Router();
var Task=require('../config/Tasks');


// Get for catches by tripId might be needed.
// route or queryparameter is needed to separate this service
// from where catches are read by userid. 

// returns catches by userid
router.get('/:userId',(req,res) => {

    //use database
    Task.getCatchByUserId(req.params.userId, function(err,rows){
		if(err) {
			res.send(err);
		}
		else {
			res.send(rows);
		}
	});
});

// Lets listen POST requests
router.post('/',(req,res) => {

    //validate data, return 400 if error
    const { error } = validateCatch(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    //use database
    Task.addCatch(req.body, function(err,rows){
        if(err) {
            res.send(err);
        }
        else {
            // lets return the actual object data
            Task.getNewCatch(rows.insertId, function(err,rows){
                if(err) {
                    res.send(err);
                }
                else {
                    // set http status to 201 Created
                    res.status(201).send(rows);
                }
            });
        }
    });
});


//Lets listen PUT requests 
router.put('/:catchId',(req,res) => {

    //validate data, return 400 if error
    const { error } = validateCatch(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //use database
    Task.updateCatch(req.params.catchId, req.body, function(err,rows){
		if(err) {
			res.send(err);
		}
		else {
            
            // lets return the actual object data
            Task.getNewCatch(req.params.catchId, function(err,rows){
                if(err) {
                    res.send(err);
                }
                else {
                    res.send(rows);
                }
            });
		}
	});
});


//Lets listen DELETE requests
router.delete('/:catchId',(req,res) => {

    Task.deleteCatch(req.params.catchId, function(err,rows){
		if(err) {
			res.send(err);
		}
		else {
			res.send(rows);
		}
	});
    
});


//update the validateCatch when POST&PUT operations are handled
function validateCatch(saalis){
    //use Joi to define validation rules for the name parameter
    const schema = {
        //name: Joi.string().min(1).max(40).required()
        idkalat: Joi.number().integer(),
        laji: Joi.string().min(1).max(45),
        paino: Joi.number().integer(),
        pituus: Joi.number().integer(),
        pyyntitapa: Joi.string().min(1).max(45),
        viehe: Joi.string().min(1).max(45),
        viehe_vari: Joi.string().min(1).max(45),
        saantiaika: Joi.string().required(),
        reissu_idreissu: Joi.number().integer().required(),
        reissu_tili_idtili: Joi.number().integer().required()
    };
    return Joi.validate(saalis, schema);
};


module.exports = router;