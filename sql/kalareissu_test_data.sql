# This file is used to create test data to the fishing diary database
# modifed by TeddyStudent


insert into tili (etunimi,sukunimi,kayttajatunnus,salasana) values ('Teddy', 'Student', 'TeddyStudent', 'teddypwd');
insert into tili (etunimi,sukunimi,kayttajatunnus,salasana) values ('User1', 'Surname1', 'user1id', 'user1pwd');
insert into tili (etunimi,sukunimi,kayttajatunnus,salasana) values ('User2', 'Surname2', 'user2id', 'user2pwd');

insert into reissu (pvm,paikka,saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili) values (curdate(), 'Längelmävesi', 'selkeä', 4, 'Etelä', 22, 18, 1);
insert into reissu (pvm,paikka,saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili) values (curdate(), 'Pyhäjärvi', 'selkeä', 4, 'Etelä', 22, 18, 1);
insert into reissu (pvm,paikka,saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili) values (curdate(), 'Näsijärvi', 'selkeä', 4, 'Etelä', 22, 18, 1);
insert into reissu (pvm,paikka,saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili) values (curdate(), 'Taivasssalo', 'selkeä', 4, 'Etelä', 22, 18, 1);
insert into reissu (pvm,paikka,saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili) values (curdate(), 'Kustavi', 'selkeä', 4, 'Etelä', 22, 18, 1);
insert into reissu (pvm,paikka,saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili) values (curdate(), 'Längelmävesi', 'selkeä', 4, 'Etelä', 22, 18, 1);
insert into reissu (pvm,paikka,saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili) values (curdate(), 'Längelmävesi', 'selkeä', 4, 'Etelä', 22, 18, 1);
insert into reissu (pvm,paikka,saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili) values (curdate(), 'Längelmävesi', 'selkeä', 4, 'Etelä', 22, 18, 1);
insert into reissu (pvm,paikka,saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili) values (curdate(), 'Längelmävesi', 'selkeä', 4, 'Etelä', 22, 18, 2);
insert into reissu (pvm,paikka,saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili) values (curdate(), 'Längelmävesi', 'selkeä', 4, 'Etelä', 22, 18, 2);
insert into reissu (pvm,paikka,saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili) values (curdate(), 'Längelmävesi', 'selkeä', 4, 'Etelä', 22, 18, 3);
insert into reissu (pvm,paikka,saa,t_nopeus,t_suunta,l_ilma,l_vesi,tili_idtili) values (curdate(), 'Roine', 'selkeä', 4, 'Etelä', 22, 18, 3);


insert into kalalajit (nimi) values ('Ahven');
insert into kalalajit (nimi) values ('Hauki');
insert into kalalajit (nimi) values ('Kuha');
insert into kalalajit (nimi) values ('Lohi');
insert into kalalajit (nimi) values ('Taimen');
insert into kalalajit (nimi) values ('Allikkosalakka');
insert into kalalajit (nimi) values ('Ankerias');
insert into kalalajit (nimi) values ('Elaska');
insert into kalalajit (nimi) values ('Harjus');
insert into kalalajit (nimi) values ('Harmaanieriä');
insert into kalalajit (nimi) values ('hietatokko');
insert into kalalajit (nimi) values ('hopearuutana');
insert into kalalajit (nimi) values ('härkäsimppu');
insert into kalalajit (nimi) values ('imukala');
insert into kalalajit (nimi) values ('isosimppu');
insert into kalalajit (nimi) values ('isotuulenkala');
insert into kalalajit (nimi) values ('kampela');
insert into kalalajit (nimi) values ('karppi');
insert into kalalajit (nimi) values ('kiiski');
insert into kalalajit (nimi) values ('kilohaili');
insert into kalalajit (nimi) values ('kirjoeväsimppu');
insert into kalalajit (nimi) values ('kirjolohi');
insert into kalalajit (nimi) values ('kivennuoliainen');
insert into kalalajit (nimi) values ('kivinilkka');
insert into kalalajit (nimi) values ('kivisimppu');
insert into kalalajit (nimi) values ('kolmipiikki');
insert into kalalajit (nimi) values ('kuore');
insert into kalalajit (nimi) values ('kymmenpiikki');
insert into kalalajit (nimi) values ('lahna');
insert into kalalajit (nimi) values ('liejutokko');
insert into kalalajit (nimi) values ('made');
insert into kalalajit (nimi) values ('miekkasärki');
insert into kalalajit (nimi) values ('muikku');
insert into kalalajit (nimi) values ('mustatokko');
insert into kalalajit (nimi) values ('mustatäplätokko');
insert into kalalajit (nimi) values ('mutu');
insert into kalalajit (nimi) values ('nieriä');
insert into kalalajit (nimi) values ('nokkakala');
insert into kalalajit (nimi) values ('pasuri');
insert into kalalajit (nimi) values ('piikkikampela');
insert into kalalajit (nimi) values ('piikkimonni');
insert into kalalajit (nimi) values ('piikkisimppu');
insert into kalalajit (nimi) values ('pikkutuulenkala');
insert into kalalajit (nimi) values ('puronieriä');
insert into kalalajit (nimi) values ('rasvakala');
insert into kalalajit (nimi) values ('rantanuoliainen');
insert into kalalajit (nimi) values ('rantaneula');
insert into kalalajit (nimi) values ('ruutana');
insert into kalalajit (nimi) values ('salakka');
insert into kalalajit (nimi) values ('seipi');
insert into kalalajit (nimi) values ('seitsenruototokko');
insert into kalalajit (nimi) values ('siika');
insert into kalalajit (nimi) values ('silakka');
insert into kalalajit (nimi) values ('siloneula');
insert into kalalajit (nimi) values ('sorva');
insert into kalalajit (nimi) values ('sulkava');
insert into kalalajit (nimi) values ('suutari');
insert into kalalajit (nimi) values ('särki');
insert into kalalajit (nimi) values ('särmäneula');
insert into kalalajit (nimi) values ('säyne');
insert into kalalajit (nimi) values ('teisti');
insert into kalalajit (nimi) values ('toutain');
insert into kalalajit (nimi) values ('turska');
insert into kalalajit (nimi) values ('törö');
insert into kalalajit (nimi) values ('turpa');
insert into kalalajit (nimi) values ('valkoevätörö');
insert into kalalajit (nimi) values ('vaskikala');
insert into kalalajit (nimi) values ('viisipiikki');
insert into kalalajit (nimi) values ('vimpa');

insert into vieheet (nimi,valmistaja,tyyppi,vari) values ('Hornet','Salmo','Vaappu','Punakelta');
insert into vieheet (nimi,valmistaja,tyyppi,vari) values ('Hornet','Salmo','Vaappu','Papukaija');
insert into vieheet (nimi,valmistaja,tyyppi,vari) values ('Hornet','Salmo','Vaappu','Muikku');
insert into vieheet (nimi,valmistaja,tyyppi,vari) values ('Rapala','Countdown','Vaappu','Muikku');
insert into vieheet (nimi,valmistaja,tyyppi,vari) values ('Rapala','Shad Rap','Vaappu','Muikku');
insert into vieheet (nimi,valmistaja,tyyppi,vari) values ('Nils Master','Invincible','Vaappu','Muikku');
insert into vieheet (nimi,valmistaja,tyyppi,vari) values ('Nils Master','Spearhead','Vaappu','Muikku');

insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values ('Ahven',600,35,'heitto','Salmo hornet','tiger',curtime(), 1, 1);
insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values ('Ahven',450,28,'heitto','hornet','punakelta',curtime(), 1, 1);
insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values ('Ahven',280,20,'uistelu','Rapala','tiger',curtime(), 1, 1);
insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values ('Hauki',2600,55,'heitto','Jigi','tiger',curtime(), 1, 1);
insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values ('Ahven',450,28,'heitto','Salmo hornet','punakelta',curtime(), 1, 1);
insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values ('Ahven',280,20,'uistelu','Salmo hornet','tiger',curtime(), 1, 1);
insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values ('Kuha',1000,43,'heitto','Salmo hornet','tiger',curtime(), 1, 1);
insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values ('Kuha',1450,48,'heitto','Salmo hornet','punakelta',curtime(), 1, 1);
insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values ('Ahven',280,20,'uistelu','Salmo hornet','tiger',curtime(), 1, 1);
insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values ('Ahven',280,20,'vertikaali','jigi','kelta',curtime(), 2, 1);
insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values ('Ahven',280,20,'uistelu','Rapala CD','salakka',curtime(), 2, 1);
insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values ('Ahven',280,20,'vertikaali','jigi','kelta',curtime(), 2, 1);
insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values ('Ahven',280,20,'uistelu','Rapala CD','salakka',curtime(), 2, 1);
insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values ('Ahven',280,20,'vertikaali','jigi','kelta',curtime(), 2, 1);
insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values ('Ahven',280,20,'uistelu','Rapala CD','salakka',curtime(), 2, 1);
insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values ('Ahven',600,35,'heitto','Lotto','punakulta',curtime(), 9, 2);
insert into kalat (laji,paino,pituus,pyyntitapa,viehe,viehe_vari,saantiaika,reissu_idreissu,reissu_tili_idtili) values ('Ahven',600,35,'heitto','Lotto','punakulta',curtime(), 11, 3);

