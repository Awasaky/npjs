describe("np.type null", function() {

	it("Checking exactly null", function() {
		assert.equal(np.type( null ), 'null');
	});

	it("Checking variable someThing = null", function() {
		var someThing = null;
		assert.equal(np.type( someThing ), 'null');
	});

});

describe("np.type number and relatives", function() {

	it("Checking -Infinity, expected Infinity", function() {
		assert.equal(np.type( -Infinity ), 'Infinity');
	});

	it("Checking '1/0', expected Infinity", function() {
		assert.equal(np.type( 1/0 ), 'Infinity');
	});

	it("Checking number = 120, expected number", function() {
		assert.equal(np.type( 120 ), 'number');
	});

	it("Checking number = 120 - -'121', expected number", function() {
		assert.equal(np.type( 120 - -'121' ), 'number');
	});

	it("Checking number = 120 / 3, expected number", function() {
		assert.equal(np.type( 120 / 3 ), 'number');
	});

	it("Checking num = new Number(100), expected number", function() {
		var num = new Number(100);
		assert.equal(np.type( num ), 'number');
	});

	it("Checking num = NaN, expected NaN", function() {
		var num = NaN;
		assert.equal(np.type( num ), 'NaN');
	});

});

describe("np.type string", function() {

	it("Checking string 'undefined'", function() {
		assert.equal(np.type( 'undefined' ), 'string');
	});

	it("Checking string '[111]'", function() {
		assert.equal(np.type( '[111]' ), 'string');
	});

	it("Checking str = new String('String')", function() {
		var str = new String('String');
		assert.equal(np.type( str ), 'string');
	});

});

describe("np.type date", function() {

	it("Checking new Date()", function() {
		assert.equal(np.type( new Date() ), 'date');
	});

});

describe("np.type array", function() {

	it("Checking empty array []", function() {
		assert.equal(np.type( [] ), 'array');
	});

	it("Checking array [1,3,'2']", function() {
		assert.equal(np.type( [1,3,'2'] ), 'array');
	});

});

describe("np.type object", function() {


	it("Checking new Object()", function() {
		assert.equal(np.type( new Object() ), 'object');
	});

	it("Checking object window", function() {
		assert.equal(np.type( window ), 'object');
	});

	it("Checking empty object {}", function() {
		assert.equal(np.type( {} ), 'object');
	});

	it("Checking object Math", function() {
		assert.equal(np.type( Math ), 'object');
	});

});

describe("np.type symbol", function() {

	it("Checking key = Symbol(\"description\")", function() {
		var key = Symbol("description");
		assert.equal(np.type( key ), 'symbol');
	});

});

describe("np.type function", function() {

	it("Checking empty function() {}", function() {
		assert.equal(np.type( function(){} ), 'function');
	});

	it("Checking function doSomething", function() {
		function doSomething(){
			return 10;
		};
		assert.equal(np.type( doSomething ), 'function');
	});

});

describe("np.type boolean", function() {

	it("Checking boolean = true", function() {
		assert.equal(np.type( true ), 'boolean');
	});

	it("Checking boolean = 1 > 0", function() {
		assert.equal(np.type( 1 > 0 ), 'boolean');
	});

	it("Checking Number.isFinite(\"0\")", function() {
		assert.equal(np.type( Number.isFinite("0") ), 'boolean');
	});

});

describe("np.type regexp", function() {

	it("Checking /ЛЮ/", function() {
		assert.equal(np.type(/ЛЮ/), 'regexp');
	});

	it("Checking /JAVA(SCRIPT)/i", function() {
		assert.equal(np.type(/JAVA(SCRIPT)/i), 'regexp');
	});

});

describe("np.type undefined", function() {

	it("Checking empty call", function() {
		assert.equal(np.type(), 'undefined');
	});

	it("Checking undefined variable zzTop", function() {
		var zzTop;
		assert.equal(np.type( zzTop ), 'undefined');
	});

	it("Checking variable direStraits cleared with undefined", function() {
		var direStraits = 1;
		direStraits = undefined;
		assert.equal(np.type( direStraits ), 'undefined');
	});

});

describe("np.typeNum", function() {

	it("Checking 3, expected 'integer'", function() {
		assert.equal(np.typeNum(3), 'integer');
	});

	it("Checking '3', expected 'NaN'", function() {
		assert.equal(np.typeNum('3'), 'NaN');
	});

	it("Checking (0.1 + 0.2) * 10, expected 'float'", function() {
		assert.equal(np.typeNum( (0.1 + 0.2) * 10 ), 'float');
	});

	it("Checking Math.floor( (0.1 + 0.2) * 10 ), expected 'integer'", function() {
		assert.equal(np.typeNum( Math.floor( (0.1 + 0.2) * 10 ) ), 'integer');
	});

});

describe("np.comp", function() {

	it("Checking NaN and NaN, expected true", function() {
		assert.equal( np.comp( NaN , NaN ), true );
	});

	it("Checking [] and [], expected true", function() {
		assert.equal( np.comp( [] , [] ), true );
	});

	it("Checking [] and 1, expected false", function() {
		assert.equal( np.comp( [] , 1 ), false );
	});

	it("Checking undefined and undefined, expected true", function() {
		assert.equal( np.comp( undefined , undefined ), true );
	});
	
	it("Checking null and null, expected true", function() {
		assert.equal( np.comp( null , null ), true );
	});

	it("Checking undefined and null, expected false", function() {
		assert.equal( np.comp( undefined , null ), false );
	});

});

describe("np.compArr", function() {

	it("Checking [] and [], expected true", function() {
		assert.equal( np.compArr( [] , [] ), true );
	});

	it("Checking [1] and [1], expected true", function() {
		assert.equal( np.compArr( [1] , [1] ), true );
	});

	it("Checking [1] and [2], expected false", function() {
		assert.equal( np.compArr( [1] , [2] ), false );
	});

	it("Checking [[1],[3]] and [[[1]],[3]], expected false", function() {
		assert.equal( np.compArr( [[1],[3]], [[[1]],[3]] ), false );
	});

	it("Checking [1,2,3,4,45] and [1,2,3,4,45], expected true", function() {
		assert.equal( np.compArr( [1,2,3,4,45] , [1,2,3,4,45] ), true );
	});

	it("Checking [1,2,3,4,45] and [1,2,3,4,46], expected false", function() {
		assert.equal( np.compArr( [1,2,3,4,45] , [1,2,3,4,46] ), false );
	});

});

describe("np.conc", function() {

	it("Checking empty call, expected ''", function() {
		assert.equal( np.conc(), '' );
	});

	it("Checking '[]' and '[]', expected '[][]'", function() {
		assert.equal( np.conc( '[]' , '[]' ), '[][]' );
	});

	it("Checking 'true' and 'false', expected 'truefalse'", function() {
		assert.equal( np.conc( 'true' , 'false' ), 'truefalse' );
	});

	it("Checking 'true' and 333444, expected 'true333444'", function() {
		assert.equal( np.conc( 'true' , 333444 ), 'true333444' );
	});

});

describe("np.num2str", function() {

	it("Checking empty call, expected ''", function() {
		assert.equal( np.num2str(), '' );
	});

	it("Checking 1200, expected '1200'", function() {
		assert.equal( np.num2str( 1200 ), '1200' );
	});

});

describe("np.copyArr", function() {

	it("Copy [], expected []", function() {
		assert.isTrue( np.compArr( np.copyArr( [] ), [] ) );
	});

	it("Try to copy false, expected []", function() {
		assert.isTrue( np.compArr( np.copyArr( false ), [] ) );
	});

	it("Copy [[1],[3]], expected [[1],[3]]", function() {
		assert.isTrue( np.compArr( np.copyArr( [[1],[3]] ), [[1],[3]] ) );
	});

	it("Copy [1,2,3,4,45], expected [1,2,3,4,45]", function() {
		assert.isTrue( np.compArr( np.copyArr( [1,2,3,4,45] ), [1,2,3,4,45] ) );
	});

	it("Copy [1,2,[3,4],45], expected [1,2,[3,4],45]", function() {
		assert.isTrue( np.compArr( np.copyArr( [1,2,[3,4],45] ), [1,2,[3,4],45] ) );
	});

});