describe("np.type", function() {

	it("Checking exactly null, expected string 'null'", function() {
		assert.equal(np.type( null ), 'null');
	});

	it("Checking variable someThing = null, expected string 'null'", function() {
		var someThing = null;
		assert.equal(np.type( someThing ), 'null');
	});

	it("Checking empty array [], expected string 'array'", function() {
		assert.equal(np.type( [] ), 'array');
	});

	it("Checking array [1,3,'2'], expected string 'array'", function() {
		assert.equal(np.type( [1,3,'2'] ), 'array');
	});

	it("Checking empty function() {}, expected string 'function'", function() {
		assert.equal(np.type( function(){} ), 'function');
	});

	it("Checking function doSomething, expected string 'function'", function() {
		function doSomething(){
			return 10;
		};
		assert.equal(np.type( doSomething ), 'function');
	});

	it("Checking empty object {}, expected string 'object'", function() {
		assert.equal(np.type( {} ), 'object');
	});

	it("Checking object Math, expected string 'object'", function() {
		assert.equal(np.type( Math ), 'object');
	});

	it("Checking -Infinity, expected string 'Infinity'", function() {
		assert.equal(np.type( -Infinity ), 'Infinity');
	});

	it("Checking '1/0', expected string 'Infinity'", function() {
		assert.equal(np.type( 1/0 ), 'Infinity');
	});

	it("Checking number = 120, expected string 'number'", function() {
		assert.equal(np.type( 120 ), 'number');
	});

	it("Checking number = 120 - -'121', expected string 'number'", function() {
		assert.equal(np.type( 120 - -'121' ), 'number');
	});

	it("Checking number = 120 / 3, expected string 'number'", function() {
		assert.equal(np.type( 120 / 3 ), 'number');
	});

	it("Checking empty call, expected string 'undefined'", function() {
		assert.equal(np.type(), 'undefined');
	});

	it("Checking undefined variable zzTop, expected string 'undefined'", function() {
		var zzTop;
		assert.equal(np.type( zzTop ), 'undefined');
	});

	it("Checking variable direStraits cleared with undefined, expected string 'undefined'", function() {
		var direStraits = 1;
		direStraits = undefined;
		assert.equal(np.type( direStraits ), 'undefined');
	});

	it("Checking string 'undefined', expected string 'string'", function() {
		assert.equal(np.type( 'undefined' ), 'string');
	});

	it("Checking string '[111]', expected string 'string'", function() {
		assert.equal(np.type( '[111]' ), 'string');
	});

	it("Checking boolean = true, expected string 'boolean'", function() {
		assert.equal(np.type( true ), 'boolean');
	});

	it("Checking boolean = 1 > 0, expected string 'boolean'", function() {
		assert.equal(np.type( 1 > 0 ), 'boolean');
	});

	it("Checking key = Symbol(\"description\"), expected string 'symbol'", function() {
		var key = Symbol("description");
		assert.equal(np.type( key ), 'symbol');
	});

	it("Checking Number.isFinite(\"0\"), expected string 'boolean'", function() {
		assert.equal(np.type( Number.isFinite("0") ), 'boolean');
	});

	it("Checking str = new String('String'), expected string 'string'", function() {
		var str = new String('String');
		assert.equal(np.type( str ), 'string');
	});
	
	it("Checking num = new Number(100), expected string 'number'", function() {
		var num = new Number(100);
		assert.equal(np.type( num ), 'number');
	});

	it("Checking new Date(), expected string 'date'", function() {
		assert.equal(np.type( new Date() ), 'date');
	});

});