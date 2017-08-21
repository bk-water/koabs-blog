/**
 * Created by kevin1 on 5/2/16.
 * es6 语法测试
 */
"use strict";

/**
 * Generator
 * 生成器
 * @returns {string}
 */
//function* helloWorldGenerator() {
//    yield 'hello';
//    yield 'world';
//    return 'ending';
//}
//
//var hw = helloWorldGenerator();
//console.log(hw.next());
//console.log(hw.next());
//console.log(hw.next());
//console.log(hw.next());


//var promise = new Promise(function(resolve, reject) {
//    // ... some code
//
//    if (/* 异步操作成功 */){
//        resolve(value);
//    } else {
//        reject(error);
//    }
//});

///**
// * Node.js Promise
// */

//var getJSON = function (url) {
//    var promise = new Promise(function(resolve, reject){
//        setTimeout(function(){
//            console.log("getJSON URLDATA" + url);
//            reject("URLDATA");
//        },1000)
//        console.log("getJSON return 1");
//    })
//    return promise;
//}
//
//getJSON("daf").then(function(json){
//    console.log(json)
//}).catch(function(err){
//    console.log(err +"err")
//}).done();

function getFoo () {
    return new Promise(function (resolve, reject){
        reject('food');
    });
}

var g = function* () {
    try {
        var foo = yield getFoo();
        console.log(foo);
    } catch (e) {
        console.log(e +"ds");
    }
};

function run (generator) {
    var it = generator();

    function go(result) {
        if (result.done) return result.value;

        return result.value.then(function (value) {
            return go(it.next(value));
        }, function (error) {
            return go(it.throw(error));
        });
    }

    go(it.next());
}

run(g);

//var sleep = function (time) {
//    return new Promise(function (resolve, reject) {
//        setTimeout(function () {
//            resolve();
//        }, time);
//    })
//};
//
//var start = async function(){
//    // 在这里使用起来就像同步代码那样直观
//    console.log('start');
//    await sleep(3000);
//    console.log('end');
//};
//
//start();

