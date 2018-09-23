require('mocha');
const should = require('should');

process.env.MONGODB = 'mongodb://localhost:27017/findorcreate-tests';

should.use((_, Assertion) => {
	Assertion.add('equalId', function equalIdFn(objectId) {
		this.params = { operator: `to equal ID ${objectId.toString()}` };
		this.obj.toString().should.equal(objectId.toString());
	});
});

should.use((_, Assertion) => {
	Assertion.add('objectId', function objectIdFn(objectId) {
		this.params = { operator: `to have _id equal to ${objectId.toString()}` };
		this.obj.should.have.property('_id');
		this.obj._id.toString().should.equal(objectId.toString());
	});
});
