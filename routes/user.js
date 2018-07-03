const Joi = require('joi');
var express = require('express')
  , router = express.Router();
var Task=require('../config/Tasks');



//End user login, return user data
router.post('/login',(req,res) => {

    const ktun = req.body.kayttajatunnus;
    const ssana = req.body.salasana;

    Task.getUserByUsername(ktun, function(err,rows){
        if(err) {
            res.send(err);
        }
        else {
            //user was found, if username or pwd does not match return error (401?) else return user data
            if (ktun != rows[0].kayttajatunnus || ssana != rows[0].salasana) {
                res.status(401).send(err);
            }
            else {
                res.status(200).send(rows);
            } 
        }    
    });

});



//GET user, return all users, this is not needed in final application
router.get('/',(req,res) => {
    // use database
    Task.getAllUsers(function(err,rows){
		if(err) {
			res.send(err);
		}
		else {
            res.send(rows);
		}
	});
});

//GET user with id, return user data
router.get('/:userId',(req,res) => {
    //use database
    Task.getNewUser(req.params.userId, function(err,rows){
        if(err) {
            res.send(err);
        }
        else {
            if(rows.length==0){
                res.status(404).send(err);
            } else {
                res.send(rows);
            }
        }
    });
});

//POST user, return user data
router.post('/',(req,res) => {

    //validate data, return 400 if error
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    //use task services
    Task.addUser(req.body, function(err,rows){
    if(err) {
        res.send(err);
    }
    else {
        //lets return the actual object data
        Task.getNewUser(rows.insertId, function(err,rows){
            if(err) {
                res.send(err);
            }
            else {
                // set http status to: 201 Created
                res.status(201).send(rows);
            }
        });
    }
    });

});

//PUT user, return user data
router.put('/:userId',(req,res) => {

    //validate data, return 400 if error
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    Task.updateUser(req.params.userId, req.body, function(err,rows){
    if(err) {
        res.send(err);
    }
    else {
        
        // lets return the actual object data
        Task.getNewUser(req.params.userId, function(err,rows){
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

//DELETE user, return user data
router.delete('/:userId',(req,res) => {
    Task.deleteUser(req.params.userId, function(err,rows){
    if(err) {
        res.send(err);
    }
    else {
        res.send(rows);
    }
});

});

//to avoid multiplying validation code lets use this function for user object
//See information from github.com/hapijs/joi
function validateUser(user){
    
    const schema = {
        etunimi: Joi.string().min(1).max(45).required(),
        sukunimi: Joi.string().min(1).max(45).required(),
        kayttajatunnus: Joi.string().min(1).max(255).required(),
        salasana: Joi.string().min(1).max(45).required()
    };
    return Joi.validate(user, schema);
};


module.exports = router;