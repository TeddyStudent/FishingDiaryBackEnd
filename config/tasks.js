var db = require('./database'); //reference of database.js
 
var Task={

// updated due new db model 5.6.2018
// this method is only for testing purposes     
getAllTrips:function(callback){
    return db.query("Select idreissu,pvm,paikka,saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili from reissu",callback);
},

// updated due new db model 5.6.2018
// should return all trips from a certain user
getTripById:function(id,callback){
    return db.query("select idreissu,pvm,paikka,saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili from reissu where tili_idtili=?",[id],callback);
},

// updated due new db model 5.6.2018
// should return newly created trip
getNewTrip:function(id,callback){
    return db.query("select idreissu,pvm,paikka,saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili from reissu where idreissu=?",[id],callback);
},

// updated due new db model 5.6.2018
addTrip:function(reissu,callback){
    return db.query("Insert into reissu (pvm,paikka,Saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili) values (?,?,?,?,?,?,?,?)",[
        reissu.pvm,
        reissu.paikka,
        reissu.saa,
        reissu.t_nopeus,
        reissu.t_suunta,
        reissu.l_ilma,
        reissu.l_vesi,
        reissu.tili_idtili
        ],callback);
},

// updated due new db model 5.6.2018
deleteTrip:function(id,callback){
    return db.query("delete from reissu where idreissu=?",[id],callback);
},

// updated due new db model 5.6.2018
updateTrip:function(id,reissu,callback){
    return db.query("update reissu set pvm=?, paikka=?, saa=?, t_nopeus=?, t_suunta=?, l_ilma=?, l_vesi=? where idreissu=?",[
        reissu.pvm,
        reissu.paikka,
        reissu.saa,
        reissu.t_nopeus,
        reissu.t_suunta,
        reissu.l_ilma,
        reissu.l_vesi,
        id],callback);
}
};
 module.exports=Task;