
"use strict";
// import { Result } from "../../model/result";
 var result = require('../../model/result');
/**
 * Created by kevin1 on 5/2/16.
 */
//var bson = require(‘bson’),
// var mongoose = require('mongoose');
// var tag = require('../../dao/tag');

// async function  testTag (obj){
//     console.log("Test Start");
//     var id = await tag.updateByArticle({_id:'A2',tags:'TagQ,TagM'});
//     console.log("Test END" + id.toString());
// }
// testTag(tag);

// function start(obj, callback) {
//     console.log("OBJ:"+ obj);
//     callback(obj);
// }

// start(autoIncrement, async(obj) => {
//     console.log("Test Start");

//     for(var v of [1,2,3]) {
//         console.log("each Start" + v);
//         var id = await obj.getUserId();
//         console.log("each END" +id);
//     };
//     console.log("Test END");
// });

function Test() {
    console.log(result.success("S","W").toString());
}

Test()