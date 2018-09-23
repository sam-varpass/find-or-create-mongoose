const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB);

before(done => {
	console.log('Database connecting...');
	mongoose.connection.on('connected', async () => {
		console.log('Database connected');
		done();
	});
});

after(async () => {
	await mongoose.connection.close();
	console.log('Connection closed');
});
