const mongoose = require('mongoose');
const findOrCreatePlugin = require('../../index');

const schema = new mongoose.Schema({
	name: { type: String },
	age: { type: Number }
});

schema.plugin(findOrCreatePlugin);

module.exports = mongoose.model('Test', schema, 'test');
