/**
 * Created by kevin1 on 5/2/16.
 */
//var bson = require(‘bson’),
var mongoose = require('mongoose');
var autoIncrement = require('../../dao/autoIncrement');

// async function  testAutoIncrement (obj){
//     console.log("Test Start");
//     var id = await obj.getUserId();
//     console.log("Test END" + id);
// }
// testAutoIncrement(autoIncrement);

function start(obj, callback) {
    console.log("OBJ:"+ obj);
    callback(obj);
}

start(autoIncrement, async(obj) => {
    autoIncrement.init(function(err,values) {

    });
    // console.log("Test Start");

    // for(var v of [1,2,3]) {
    //     console.log("each Start" + v);
    //     var id = await obj.getUserId();
    //     console.log("each END" +id);
    // };
    // console.log("Test END");
});