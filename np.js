// Надо завернуть либу, чтобы в неё нельзя было лазить
var np = {};

np.type = function( exp2Type ) {

	function detectName( obj2Detect ) {
		var result = Object.prototype.toString.call( obj2Detect );
		return result.slice( 8, - 1 );
	};
	var obj2Str = detectName( exp2Type ).toLowerCase();

	// first block detect types that can't do many problems
	if ( obj2Str === 'null' ||
		obj2Str === 'string' ||
		obj2Str === 'array' ||
		obj2Str === 'function' ||
		obj2Str === 'object' ||
		obj2Str === 'undefined' ||
		obj2Str === 'regexp' ||
		obj2Str === 'symbol' ||
		obj2Str === 'date' ) {
		return obj2Str;
	} else if ( obj2Str === 'number' ) { // behavior of numbers is more complex, so better check it more
		Number.isNaN = Number.isNaN || function(exp2Type) {
  			return typeof exp2Type === 'number' && isNaN(exp2Type);
		};
		if ( Number.isNaN( exp2Type ) ) {
			return 'NaN';
		} else if ( exp2Type === Infinity || exp2Type === -Infinity ) {
			return 'Infinity'
		};
		return obj2Str;
	} else if ( exp2Type === true || exp2Type === false ) {
		return 'boolean';
	};

	// undetected object type so return his name
	return typeof( exp2Type );
};