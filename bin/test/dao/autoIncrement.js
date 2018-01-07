/**
 * Created by kevin1 on 6/28/16.
 */
'use strict';

var	assert = require('assert');
var   autoIncrement = require('../../dao/autoIncrement');

describe('AutoIncrement', function() {

    //before(function(done) {
    //
    //});

    beforeEach(function(){
    });
    describe('generalId', function() {

        it('generalId', function(done) {

            autoIncrement.init(function(err, obj) {
                assert.ifError(err);
                console.log(obj);
                done();
            });
        });
    });
    after(function() {
    });
});