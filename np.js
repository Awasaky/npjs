// Ушишинима хуйня
var np = {};

np.type = function( exp2Type ) {

	function detectName( obj2Detect ) {
		var result = Object.prototype.toString.call( obj2Detect );
		return result.slice( 8, result.length - 1 );
	};
	var obj2Str = detectName( exp2Type ).toLowerCase();

	if ( obj2Str === 'null' ||
		obj2Str === 'string' ||
		obj2Str === 'array' ||
		obj2Str === 'function' ||
		obj2Str === 'object' ||
		obj2Str === 'undefined' ) {
		return obj2Str;
	} else if ( obj2Str === 'number' ) {
		if ( isNaN ( exp2Type ) ) {
			return 'NaN';
		} else if ( exp2Type === Infinity || exp2Type === -Infinity ) {
			return 'Infinity'
		};
		return obj2Str;
	} else if ( exp2Type === true || exp2Type === false ) {
		return 'boolean';
	};

	// undetected object type so return his name
	return detectName( exp2Type );
};