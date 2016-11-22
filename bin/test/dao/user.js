/**
 * Created by kevin1 on 6/28/16.
 */
'use strict';

var	assert = require('assert');
var   User = require('../../dao/user');

describe('User', function() {

    //before(function(done) {
    //
    //});

    beforeEach(function(){

    });

    describe('create', function() {

        it('create user', function(done) {
            var obj = {
                _id: null,
                name: '张珊LI',
                nikename: '张珊LIN',
                email: 'ZHANG@qq.com',
                passwd: 'abc123',
                locked: true,
                sex: '女',
                role: 3,
                createDate: new Date(), // 创建时间
                score: 0,// 积分
            }
            User.create(obj, function(err, obj) {
                assert.ifError(err);
                console.log(obj);
                done();
            });
        });
    });

    after(function() {

    });
});