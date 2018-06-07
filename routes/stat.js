var express = require('express')
  , router = express.Router();
var Task=require('../config/Tasks');



//GET CCBySpeciesFAT user with id, return statistical data
router.get('/CCBySpeciesFAT/:userId',(req,res) => {
    //use database
    Task.getStatCCBySpeciesFAT(req.params.userId, function(err,rows){
        if(err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    });
});


//GET CCByPlacesFAT user with id, return statistical data
router.get('/CCByPlacesFAT/:userId',(req,res) => {
    //use database
    Task.getStatCCByPlacesFAT(req.params.userId, function(err,rows){
        if(err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    });
});


//GET CCByPlacesAndSpeciesFAT user with id, return statistical data
router.get('/CCByPlacesAndSpeciesFAT/:userId',(req,res) => {
    //use database
    Task.getStatCCByPlacesAndSpeciesFAT(req.params.userId, function(err,rows){
        if(err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    });
});


module.exports = router;