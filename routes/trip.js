const Joi = require('joi');
var express = require('express')
  , router = express.Router();
  var Task=require('../config/Tasks');


//Lets listen GET requests on 'localhost:<port>/api/trip' and return kalareissut objects
//Not needed in final application
router.get('/',(req,res) => {
    //res.send(kalareissut);

    //test new TASK concept
    Task.getAllTrips(function(err,rows){
		if(err) {
			res.send(err);
		}
		else {
			res.send(rows);
		}
	});

});


//returns trips by userid
//userid should derived from authorization data, needs updating later on
router.get('/:userId',(req,res) => {

    //use database
    Task.getTripById(req.params.userId, function(err,rows){
		if(err) {
			res.send(err);
		}
		else {
			res.send(rows);
		}
	});
});

//Lets listen POST requests on 'localhost:<port>/api/trips' and create the new reissu object
//reissu object should be in the request body
router.post('/',(req,res) => {

    //validate data, return 400 if error
    const { error } = validateTrip(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    //use database
    Task.addTrip(req.body, function(err,rows){
		if(err) {
			res.send(err);
		}
		else {
            // lets return the actual object data
            Task.getNewTrip(rows.insertId, function(err,rows){
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


//Lets listen PUT requests on 'localhost:<port>/api/trip/<id of reissu object>' to modify an reissu object
router.put('/:tripId',(req,res) => {

    //validate data, return 400 if error
    const { error } = validateTrip(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //use database
    Task.updateTrip(req.params.tripId, req.body, function(err,rows){
		if(err) {
			res.send(err);
		}
		else {
            
            // lets return the actual object data
            Task.getNewTrip(req.params.tripId, function(err,rows){
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


//Lets listen DELETE requests on 'localhost:<port>/api/trips/<id of reissu object>' to delete a reissu object
router.delete('/:tripId',(req,res) => {
   
    Task.deleteTrip(req.params.tripId, function(err,rows){
		if(err) {
			res.send(err);
		}
		else {
			res.send(rows);
		}
	});

});


//to avoid multiplying validation code lets use this function for reissu object
function validateTrip(reissu){
    //use Joi to define validation rules for the name parameter
    const schema = {
        //name: Joi.string().min(1).max(40).required()
        pvm: Joi.string().required(),
        paikka: Joi.string().min(1).max(45).required(),
        saa: Joi.string().min(1).max(45),
        t_nopeus: Joi.number().integer().max(100),
        t_suunta: Joi.string().min(1).max(45),
        l_ilma: Joi.number().integer().max(100),
        l_vesi: Joi.number().integer().max(100),
        tili_idtili: Joi.number().integer().min(1).max(1000).required()

    };
    return Joi.validate(reissu, schema);
};

module.exports = router;