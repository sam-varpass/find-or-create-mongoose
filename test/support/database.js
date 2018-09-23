const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB);

after(async () => {
	await mongoose.connection.close();
	console.log('Connection closed');
});
