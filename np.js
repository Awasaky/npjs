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
	if ( obj2Str === 'null' || // null is empty object
		obj2Str === 'string' || // string is text in '' or ""
		obj2Str === 'array' || // any data collected with [] and have a lenght
		obj2Str === 'function' || // any function, that can be used
		obj2Str === 'object' || // any associative data collection
		obj2Str === 'undefined' || // undefined is empty simple type
		obj2Str === 'regexp' || // regexp is string to usage in search 
		obj2Str === 'symbol' || // special type to extend old objects with new functionality
		obj2Str === 'date' ) { // special type, what return any date
		return obj2Str;

	} else if ( obj2Str === 'number' ) { // behavior of numbers is more complex, so better check it more
		Number.isNaN = Number.isNaN || function( exp2Type ) { // special function to test number to NaN existence
  			return typeof exp2Type === 'number' && isNaN( exp2Type );
		};

		if ( Number.isNaN( exp2Type ) ) {
			return 'NaN'; // NaN mean Not a Number - but this type of data have another behavior than numbers
		} else if ( exp2Type === Infinity || exp2Type === -Infinity ) {
			return 'Infinity'; // Infinity is type of data means more tha any number, but also have unique behavior
		};
		return obj2Str; // if check to NaN and Infinity Passed - return Number, that means any another number - float or integer

	} else if ( exp2Type === true || exp2Type === false ) {
		return 'boolean'; // testing expression with both boolean meanings
	};

	// undetected object type so return his name
	return typeof( exp2Type ); // if all checks passed, but type is still undetected, return standart JS typeof result

};

///////////////////////////////////////////////////////////////////////////////
// np.typeNum is a function, that return a string with lowercase type of Number gived to it.
// any another type of expression return "NaN" string.
///////////////////////////////////////////////////////////////////////////////
exports.typeNum = function ( exp2Type ) {
	
	var whoIsIt = np.type( exp2Type );
	if ( whoIsIt === 'number' ) {
		if ( exp2Type === Math.floor( exp2Type ) ) {
			return 'integer'; // if nummber after Math.floor be same, return string 'integer'
		};
		return 'float'; // any other number return string 'float'.
	};
	return 'NaN'; // if checking data can't be detected as float or integer, returned string is 'NaN' (means Not a Number)

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
		 	exp2Type1 === 'undefined' || // same as undefined
		 	exp2Type1 === 'null') {  // same as null
			return true;
		};
		
		if ( exp2Type1 === 'array' ) {
			return np.compArr( exp2Comp1, exp2Comp2 ); // try to compare arrays, even if they not linked
		};

		if ( exp2Type1 === 'regexp' ) { // comparing regexp as strings
			return exp2Comp1.toString() === exp2Comp2.toString();
		};

		if ( exp2Comp1 === exp2Comp2 ) { // comparing by link, that means both objects have same origin
			return true; // function, object, symbol, date; also work with Infinity, string,
		};

		return false;
	};

	return false; // if behavior of both operands not same - always return false

};

///////////////////////////////////////////////////////////////////////////////
// np.compArr is function that makes obiuos compare 2 Arrays,
// return false if any of both is not Arrays
// return true if both arrays is empty
// return true if all elements of arrays are strictly similar
// return false if not
///////////////////////////////////////////////////////////////////////////////
exports.compArr = function( arr2Comp1, arr2Comp2 ) {

	if (np.type( arr2Comp1 ) !== 'array' || np.type( arr2Comp2 ) !== 'array' ) {

		return false;

	};

	if ( arr2Comp1.length === 0 && arr2Comp2.length === 0 ) {
	
		return true;
	
	};

	if ( np.comp( arr2Comp1.length, arr2Comp2.length ) ) {
		
		for (var i = 0; i < arr2Comp1.length; i++) {

			if ( !np.comp( arr2Comp1[i], arr2Comp2[i] ) ) {
				return false;
			};
		
		};
		
		return true;
	
	};

	return false;

};

///////////////////////////////////////////////////////////////////////////////
// np.conc - Concate all string arguments to single string
///////////////////////////////////////////////////////////////////////////////
exports.conc = function() {

	var result = '';

	for ( var i = 0; i < arguments.length; i++ ) {
		if ( np.type( arguments[i] ) === 'string' ) {
			result = result + arguments[i];
		};
	};

	return result; // anyway it returns string, but if all arguments is not strings, it returns empty string.

};

///////////////////////////////////////////////////////////////////////////////
// np.str2num - Convert string to obvious string like "12" to 12
// else - return 0
///////////////////////////////////////////////////////////////////////////////
exports.str2Num = function( str ) {

	var result = 0;

	if ( np.type(str) !== 'string' ) {
		return 0;
	};

	result = +str;

	if ( np.type( result ) !== 'number' ) {
		return 0;
	};

	return result;

};

///////////////////////////////////////////////////////////////////////////////
// np.num2Str - Convert number to obvious string like 12 to '12'
// else - return ''
///////////////////////////////////////////////////////////////////////////////
exports.num2Str = function ( number2Conv ) {
	
	if ( np.type( number2Conv ) === 'number' ) {
	
		return '' + number2Conv;
	
	};

	return '';

};

///////////////////////////////////////////////////////////////////////////////
// np.copyArr - return copy of array
///////////////////////////////////////////////////////////////////////////////
exports.copyArr = function ( arr2Copy ) {

	var arrResult = [];

	var checkIsNotArray = ( np.type( arr2Copy ) !== 'array' );
	var checkIsEmpty = ( arr2Copy.length === arrResult.length );

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

	var checkNotArray1 = ( np.type( arr2Summ1 ) !== 'array' ),
		checkNotArray2 = ( np.type( arr2Summ2 ) !== 'array' ),
		checkEmpty1 = ( arr2Summ1.length === arrResult.length ),
		checkEmpty2 = ( arr2Summ2.length === arrResult.length );
	var failCheck =  checkNotArray1 && checkNotArray2 ||
		checkEmpty1 && checkEmpty2 ||
		checkNotArray1 && checkEmpty2 ||
		checkNotArray2 && checkEmpty1;

	if ( failCheck ) {
		return arrResult;
	};

	if ( checkNotArray1 && !checkEmpty2 ) {
		return np.copyArr( arr2Summ2 );
	};

	if ( checkNotArray2 && !checkEmpty1 ) {
		return np.copyArr( arr2Summ1 );
	};

	console.log('end function');
	return arrResult;

};

})(this.np = {});