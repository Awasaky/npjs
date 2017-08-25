"use strict"
;(function(exports) {

///////////////////////////////////////////////////////////////////////////////
// np.type is a function, that return a string with lowercase type of expression gived to it.
// this expression is show behavior of expression, not a real Javascript type.
///////////////////////////////////////////////////////////////////////////////
exports.type = function( exp2Type ) {

	function detectName( obj2Detect ) {
		var result = Object.prototype.toString.call( obj2Detect );
		return result.slice( 8, - 1 );
	};
	var obj2Str = detectName( exp2Type ).toLowerCase();

	// first block detect types that can't do many problems
	if ( obj2Str === 'null' || // tested
		obj2Str === 'string' || // tested
		obj2Str === 'array' || // tested
		obj2Str === 'function' || // tested
		obj2Str === 'object' || // tested
		obj2Str === 'undefined' || // tested
		obj2Str === 'regexp' || //
		obj2Str === 'symbol' || // tested
		obj2Str === 'date' ) { // tested
		return obj2Str;
	} else if ( obj2Str === 'number' ) { // behavior of numbers is more complex, so better check it more
		Number.isNaN = Number.isNaN || function( exp2Type ) {
  			return typeof exp2Type === 'number' && isNaN( exp2Type );
		};
		if ( Number.isNaN( exp2Type ) ) {
			return 'NaN'; // tested
		} else if ( exp2Type === Infinity || exp2Type === -Infinity ) {
			return 'Infinity'; // tested
		};
		return obj2Str;
	} else if ( exp2Type === true || exp2Type === false ) {
		return 'boolean'; // tested
	};

	// undetected object type so return his name
	return typeof( exp2Type );

};

///////////////////////////////////////////////////////////////////////////////
// np.typeNum is a function, that return a string with lowercase type of Number gived to it.
// any another type of expression return "NaN" string.
///////////////////////////////////////////////////////////////////////////////
exports.typeNum = function ( exp2Type ) {
	
	var whoIsIt = np.type( exp2Type );
	if ( whoIsIt === 'number' ) {
		if ( exp2Type === Math.floor( exp2Type ) ) {
			return 'integer';
		};
		return 'float';
	};
	return 'NaN';

};

///////////////////////////////////////////////////////////////////////////////
// np.comp is function that makes obiuos compare 2 expressions
///////////////////////////////////////////////////////////////////////////////
exports.comp  = function( exp2Comp1, exp2Comp2 ) {
	//let's check both types

	var exp2Type1 = np.type( exp2Comp1 ),
		exp2Type2 = np.type( exp2Comp2 );

	if ( exp2Type1 === exp2Type2 ) {
		
		if ( exp2Type1 === 'NaN' || // Obviously if both === NaN this need to be return true;
		 	exp2Type1 === 'undefined' ||
		 	exp2Type1 === 'null') { 
			return true;
		};
		
		if ( exp2Type1 === 'array' ) {
			return np.compArr( exp2Comp1, exp2Comp2 );
		};

		if ( exp2Comp1 === exp2Comp2 ) {
			return true; // Infinity, strings, function, object, regexp, symbol, date
		};

		return false;
	};

	return false;

};

exports.compArr  = function( arr2Comp1, arr2Comp2 ) {

	if ( arr2Comp1.length === 0 && arr2Comp2.length === 0 ) {
	
		return true;
	
	};

	if ( arr2Comp1.length === arr2Comp2.length ) {
		
		for (var i = 0; i < arr2Comp1.length; i++) {

			if ( !np.comp( arr2Comp1[i], arr2Comp2[i] ) ) {
				return false;
			};
		
		};
		
		return true;
	
	};

	return false;

};

exports.conc = function() {

	var result = '';

	for ( var i = 0; i < arguments.length; i++ ) {
		if ( np.type( arguments[i] ) === 'number' ) {
			result = result + np.num2str( arguments[i] );
		};
		if ( np.type( arguments[i] ) === 'string' ) {
			result = result + arguments[i];
		};
	};

	return result;

};

exports.num2str = function ( number2Conv ) {
	
	if ( np.type( number2Conv ) === 'number' ) {
	
		return '' + number2Conv;
	
	} else {
	
		return '';
	};

};

///////////////////////////////////////////////////////////////////////////////
// Make copy of array
///////////////////////////////////////////////////////////////////////////////
exports.copyArr = function ( arr2Copy ) {

	var arrResult = [];

	var checkIsNotArray = ( np.type( arr2Copy ) !== 'array' );
	var checkIsEmpty = ( arr2Copy.length === arrResult.length ) ;

	if ( checkIsArray || checkIsEmpty ) {
		return arrResult;
	};

	for (var i = 0; i < arr2Copy.length; i++) {

		var checkIsArray = ( np.type( arr2Copy[i] ) === 'array' );

		if ( checkIsArray ) {
			arrResult.push( np.copyArr( arr2Copy[i] ) );
			continue;
		};

		arrResult.push( arr2Copy[i] );
		
	};

	return arrResult;

};

///////////////////////////////////////////////////////////////////////////////
// Uncompleted
///////////////////////////////////////////////////////////////////////////////
exports.summArr = function ( arr2Summ1, arr2Summ2 ) {
	
	var arrResult = [];

};

})(this.np = {});