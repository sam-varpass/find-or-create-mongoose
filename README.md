# Mongoose findOrCreate plugin <atomic> [STATUS SHIELD]

A findOrCreate plugin that's [atomic](https://en.wikipedia.org/wiki/Atomicity_(database_systems)). A necessary characteristic for use in scaled, distributed systems. Achieved by reducing the `findOrCreate` determination to a single mongo operation.


## How To Use

```
// people.model.js

const findOrCreate = require('find-or-create-mongoose');

const schema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number }
});

schema.plugin(findOrCreate);

module.exports = mongoose.model('People', schema, 'people');
```

```
// people.controller.js

const findOrCreateJohn = async () => {
	const findBy = { name: 'John' };
	const onCreate = { name: 'John', age: 29 };

	const result = await model.findOrCreate(findBy, onCreate);

/*
* result === {
*	writeResult: 'create' / 'find',
*	document: { THE_MONGO_RECORD }
* }
**/

}
```