var assert = require('chai').assert;
var penjumlahan = require('../app.js');


describe('penjumlahan', function(){
	var hasil, value1, value2

	beforeEach(function(){
		value1 = 3
		value2 = 5
		hasil = penjumlahan(value1,value2)
	})

	it('penjumlahan should return type number', function(){
		assert.typeOf(hasil, 'number');
	});
});