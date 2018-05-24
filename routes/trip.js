const Joi = require('joi');
var express = require('express')
  , router = express.Router();
  var Task=require('../config/Tasks');

//test data
const kalareissut = [
    { idkalareissu: 1, pvm: '2018-05-14', paikka: 'Saimaa', saa: 'selkeä', tuuli_nopeus: 5, tuuli_suunta: 'itä', lampotila_ilma: 18, lampotila_vesi: 16, tili_idtili: 1 },
    { idkalareissu: 2, pvm: '2018-05-13', paikka: 'Pyhäjärvi', saa: 'puolipilvinen', tuuli_nopeus: 2, tuuli_suunta: 'etelä', lampotila_ilma: 18, lampotila_vesi: 16, tili_idtili: 1 },
    { idkalareissu: 3, pvm: '2018-05-14', paikka: 'Pielinen', saa: 'sadekuuroja', tuuli_nopeus: 7, tuuli_suunta: 'länsi', lampotila_ilma: 18, lampotila_vesi: 16, tili_idtili: 1 },
];


//Lets listen GET requests on 'localhost:<port>/api/trips' and return kalareissut objects
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


//Lets listen GET requests on 'localhost:<port>/api/trips/<id of reissu object>' and return the requested object
router.get('/:tripId',(req,res) => {
    // find the requested object
    // const kalareissu = kalareissut.find(c => c.idkalareissu === parseInt(req.params.tripId));
    // if (!kalareissu) res.status(404).send('Object was not found!');
    // res.send(kalareissu);

    //test new TASK concept
    Task.getTripById(req.params.tripId, function(err,rows){
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
    
    //create the new object
    /* 
    const kalareissu = {
        idkalareissu: kalareissut.length + 1,
        pvm: req.body.pvm,
        paikka: req.body.paikka,
        saa: req.body.saa,
        tuuli_nopeus: req.body.tuuli_nopeus,
        tuuli_suunta: req.body.tuuli_suunta,
        lampotila_ilma: req.body.lampotila_ilma,
        lampotila_vesi: req.body.lampotila_vesi,
        tili_idtili: req.body.tili_idtili
    };
    kalareissut.push(kalareissu);

    //Return the object
    res.send(kalareissu);
    */

    //test new TASK concept
    Task.addTrip(req.body, function(err,rows){
		if(err) {
			res.send(err);
		}
		else {
            // set http status to 201 Created
            //res.status(201).send(rows);

            // lets return the actual object data
            Task.getNewTrip(rows.insertId, function(err,rows){
                if(err) {
                    res.send(err);
                }
                else {
                    res.status(201).send(rows);
                }
            });
		}
	});

});


//Lets listen PUT requests on 'localhost:<port>/api/trips/<id of reissu object>' to modify an reissu object
router.put('/:tripId',(req,res) => {

    //find the object, return 404 if error
    const kalareissu = kalareissut.find(c => c.idkalareissu === parseInt(req.params.tripId));
    if (!kalareissu) return res.status(404).send('Object was not found!');

    //validate data, return 400 if error
    const { error } = validateTrip(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //modify the object
    //reissu.name = req.body.name;
    kalareissu.pvm = req.body.pvm;
    kalareissu.paikka = req.body.paikka;
    kalareissu.saa = req.body.saa;
    kalareissu.tuuli_nopeus = req.body.tuuli_nopeus;
    kalareissu.tuuli_suunta = req.body.tuuli_suunta;
    kalareissu.lampotila_ilma = req.body.lampotila_ilma;
    kalareissu.lampotila_vesi = req.body.lampotila_vesi;
    
    //return modified object
    res.send(kalareissu);
});


//Lets listen DELETE requests on 'localhost:<port>/api/trips/<id of reissu object>' to delete a reissu object
router.delete('/:tripId',(req,res) => {

    //find the object, return 404 if error
    const kalareissu = kalareissut.find(c => c.idkalareissu === parseInt(req.params.tripId));
    if (!kalareissu) return res.status(404).send('Object was not found!');

    //delete the object
    const index = kalareissut.indexOf(kalareissu);
    kalareissut.splice(index,1);

    //return the same reissu
    res.send(kalareissu);
    
});



//to avoid multiplying validation code lets use this function for reissu object
function validateTrip(reissu){
    //use Joi to define validation rules for the name parameter
    const schema = {
        //name: Joi.string().min(1).max(40).required()
        pvm: Joi.string().required(),
        paikka: Joi.string().min(1).max(45).required(),
        saa: Joi.string().min(1).max(45),
        tuuli_nopeus: Joi.number().integer().max(100),
        tuuli_suunta: Joi.string().min(1).max(45),
        lampotila_ilma: Joi.number().integer().max(100),
        lampotila_vesi: Joi.number().integer().max(100),
        tili_idtili: Joi.number().integer().min(1).max(1000).required()

    };
    return Joi.validate(reissu, schema);
};

module.exports = router;