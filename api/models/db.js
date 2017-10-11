const mongoose = require('mongoose');
const config = require('../../config');

mongoose.Promise = global.Promise;

mongoose
.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`,
{useMongoClient: true})
.catch(e => {
  console.log(e);
  throw e;
});

mongoose
.connection
.on('connected', function () {
  console.log(`Mongoose dafault connection open mongodb://${config.db.host}:$
  {config.db.port}/${config.db.name}`);
});

// if the connection throws an error
mongoose
.connection
.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// if the connection is disconnected
mongoose
.connection
.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// if the Node process ends, close the Mongoose  connection
process.on('SIGINT', function () {
  mongoose
    .connection
    .close(function () {
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
});

require('./blog');