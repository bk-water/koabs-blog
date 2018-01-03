/**
 * Created by kevin1 on 5/2/16.
 */
//var bson = require(‘bson’),
var mongoose = require('mongoose');
var autoIncrement = require('../../dao/autoIncrement');

async function  testAutoIncrement (autoIncrement){
    console.log("Test Start");
    var id = await autoIncrement.getUserId();
    console.log("Test END" + id);
}
testAutoIncrement(autoIncrement);