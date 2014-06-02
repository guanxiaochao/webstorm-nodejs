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
