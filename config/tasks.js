var db = require('./database'); //reference of database.js
 
var Task={

// *****************************************
// FUNCTIONS NEEDED FOR ../API/TRIP SERVICES
// *****************************************  

// updated due new db model 5.6.2018
// this method is only for testing purposes     
getAllTrips:function(callback){
    return db.query("Select idreissu,pvm,paikka,saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili from reissu",callback);
},

// updated due new db model 5.6.2018
// should return all trips from a certain user
getTripById:function(id,callback){
    return db.query("select idreissu,pvm,paikka,saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili from reissu where tili_idtili=? order by pvm desc",[id],callback);
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
},


// *****************************************
// FUNCTIONS NEEDED FOR ../API/USER SERVICES
// ***************************************** 

// updated due new db model 5.6.2018
// this method is only for testing purposes     
getAllUsers:function(callback){
    return db.query("Select idtili,etunimi,sukunimi,kayttajatunnus,salasana from tili",callback);
},

// addUser - needed for registering
addUser:function(user,callback){
    return db.query("Insert into tili (etunimi,sukunimi,kayttajatunnus,salasana) values (?,?,?,?)",[
        user.etunimi,
        user.sukunimi,
        user.kayttajatunnus,
        user.salasana
        ],callback);
},

// getNewUser - needed for registering, return the newly created object
getNewUser:function(id,callback){
    return db.query("select idtili,etunimi,sukunimi,kayttajatunnus,salasana from tili where idtili=?",[id],callback);
},

// getUserByUsername - needed for authentication, return object (password, idtili and etunimi enough?)
// **** NOT YET IMPLEMENTED ********
getUserByUsername:function(id,callback){
    return db.query("select idtili,etunimi,sukunimi,kayttajatunnus,salasana from tili where kayttajatunnus=?",[id],callback);
},

// updateUser - needed if account mgmt is implemented, etunimi,sukunimi,kayttajatunnus,salasana can be modified, return object
updateUser:function(id,user,callback){
    return db.query("update tili set etunimi=?, sukunimi=?, kayttajatunnus=?, salasana=? where idtili=?",[
        user.etunimi,
        user.sukunimi,
        user.kayttajatunnus,
        user.salasana,
        id],callback);
},

// deleteUser
deleteUser:function(id,callback){
    return db.query("delete from tili where idtili=?",[id],callback);
},

// ******************************************
// FUNCTIONS NEEDED FOR ../API/CATCH SERVICES
// ******************************************

// return all catches from a certain user
getCatchByUserId:function(id,callback){
    return db.query("select idkalat,laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili from kalat where reissu_tili_idtili=? order by saantiaika asc",[id],callback);
},

// return all catches from a certain trip
getCatchByTripId:function(id,callback){
    return db.query("select idkalat,laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili from kalat where reissu_idreissu=? order by saantiaika asc",[id],callback);
},

// add new catch
addCatch:function(kala,callback){
    return db.query("Insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values (?,?,?,?,?,?,?,?,?)",[
        kala.laji,
        kala.paino,
        kala.pituus,
        kala.pyyntitapa,
        kala.viehe,
        kala.viehe_vari,
        kala.saantiaika,
        kala.reissu_idreissu,
        kala.reissu_tili_idtili
        ],callback);
},

// should return newly created catch
getNewCatch:function(id,callback){
    return db.query("select idkalat,laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili from kalat where idkalat=?",[id],callback);
},

// update Catch
updateCatch:function(id,kala,callback){
    return db.query("update kalat set laji=?, paino=?, pituus=?, pyyntitapa=?, viehe=?, viehe_vari=?, saantiaika=? where idkalat=?",[
        kala.laji,
        kala.paino,
        kala.pituus,
        kala.pyyntitapa,
        kala.viehe,
        kala.viehe_vari,
        kala.saantiaika,
        id],callback);
},

// delete catch
deleteCatch:function(id,callback){
    return db.query("delete from kalat where idkalat=?",[id],callback);
},


// ******************************************
// FUNCTIONS NEEDED FOR ../API/STAT SERVICES
// ******************************************

// return statistics: count catch (CC) by species, from all trips (FAT)
getStatCCBySpeciesFAT:function(id,callback){
    return db.query("SELECT laji as Kalalaji, COUNT(idkalat) as Kalamäärä FROM kalat where kalat.reissu_tili_idtili=? GROUP BY laji order by COUNT(idkalat) desc",[id],callback);
},

// return statistics: count catch (CC) by places, from all trips (FAT)
getStatCCByPlacesFAT:function(id,callback){
    return db.query("SELECT reissu.paikka as Paikka, count(kalat.idkalat) as Kalamäärä FROM kalat, reissu where kalat.reissu_idreissu=reissu.idreissu and reissu.tili_idtili=? group by reissu.paikka order by paikka asc",[id],callback);
},

// return statistics: count catch (CC) by places and species, from all trips (FAT)
getStatCCByPlacesAndSpeciesFAT:function(id,callback){
    return db.query("select a.paikka as Paikka,a.laji as Laji,count(a.idreissu) as Kalamäärä from (select tili_idtili, idreissu, laji, paikka from reissu, kalat where reissu.idreissu=kalat.reissu_idreissu and tili_idtili=?) a group by idreissu,laji order by paikka asc",[id],callback);
}

};
 module.exports=Task;