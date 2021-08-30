const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/encapsulate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
	console.log("MongoDB connected successfully");
}).catch((err) => {
	console.log(`MongoDB connection error: ${err}`);
});

module.exports = mongoose.connection;
