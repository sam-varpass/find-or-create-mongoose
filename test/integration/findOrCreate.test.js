const testModel = require('../support/test.model');

describe('#findOrCreate', () => {
	let ted, steve;

	beforeEach(async () => {
		await testModel.remove({});
		[ted, steve] = await testModel.create([
			{ name: 'Ted', age: 23 },
			{ name: 'Steve', age: 27 }
		]);
	});

	it('should create a new person', async () => {
		const [res] = await testModel.findOrCreate(
			{ name: 'Joe' },
			{ name: 'Joe', age: 30 }
		);

		[ted._id.toString(), steve._id.toString()].includes(res._id.toString()).should.equal(false);
		res.name.should.equal('Joe');
		res.age.should.equal(30);
	});

	it('should find Steve', async () => {
		const [res] = await testModel.findOrCreate(
			{ name: 'Steve' },
			{ name: 'Steve', age: 40 }
		);

		res._id.toString().should.equal(steve._id.toString());
		res.age.should.equal(27);
	});
});
