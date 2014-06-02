/**
 * Created by gxc on 14-6-2.
 */

var should = require('should');
var assert = require('assert');


describe('Test Framework', function() {
    it('shoud hava mocha installed and running.', function(){
        assert.equal(true, true);
    })
    it('shoud have the should library installed and running for fluent testing', function(){
        true.should.eql(true);
    })

})

describe ('Asynchronous testing', function() {

    var result = false;

    beforeEach (function (done) {

        setTimeout (function () {
             result = true;
             //complete the async beforeEach
             done ();
        }, 2000);
    });



it ('should NOT be so hard so this makes it easier.', function (done) {
    result.should.eql(true);
    done();
   })
})