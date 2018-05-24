var db = require('./database'); //reference of database.js
 
var Task={
 
getAllTrips:function(callback){
    return db.query("Select * from kalareissu",callback);
},

getTripById:function(id,callback){
    return db.query("select * from kalareissu where tili_idtili=?",[id],callback);
},

getNewTrip:function(id,callback){
    return db.query("select * from kalareissu where idkalareissu=?",[id],callback);
},

addTrip:function(kalareissu,callback){
    return db.query("Insert into kalareissu (pvm,paikka,Saa,tuuli_nopeus,tuuli_suunta,lampotila_ilma,lampotila_vesi,tili_idtili) values (?,?,?,?,?,?,?,?)",[
        kalareissu.pvm,
        kalareissu.paikka,
        kalareissu.saa,
        kalareissu.tuuli_nopeus,
        kalareissu.tuuli_suunta,
        kalareissu.lampotila_ilma,
        kalareissu.lampotila_vesi,
        kalareissu.tili_idtili
        ],callback);
},

deleteTrip:function(id,callback){
    return db.query("delete from kalareissu where idkalareissu=?",[id],callback);
},

updateTrip:function(id,kalareissu,callback){
    return db.query("update kalareissu set pvm=?, paikka=?, saa=?, tuuli_nopeus=?, tuuli_suunta=?, lampotila_ilma=?, lampotila_vesi=? where Id=?",[
        kalareissu.pvm,
        kalareissu.paikka,
        kalareissu.saa,
        kalareissu.tuuli_nopeus,
        kalareissu.tuuli_suunta,
        kalareissu.lampotila_ilma,
        kalareissu.lampotila_vesi,
        id],callback);
}
};
 module.exports=Task;