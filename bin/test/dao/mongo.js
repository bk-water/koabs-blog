/**
 * Created by kevin1 on 5/2/16.
 */
//var bson = require(‘bson’),
var db = require('../../dao/mongo').db;

function testDb(db){
    db.collection('foo').save({test:1},function(err,result){
        console.log(result);
        db.close();
    });
}testDb(db);