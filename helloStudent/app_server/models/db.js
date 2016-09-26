var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/Loc8r';
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}
mongoose.connect(dbURI);

//connected
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});
//error
mongoose.connection.on('error', function() {
    console.log('Mongoose connection error ' + dbURI);
});

//disconnected
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

var gracefulShutdown = function(msg, callback){
    mongoose.connection.close(function(){
       console.log('Mongoose disconnected through ' + msg); 
       callback();
    });
}

process.once('SIGUSR2', function(){
   gracefulShutdown('nodemon restart', function(){
      process.kill(process.pid, 'SIGUSR2');
   });
});

process.once('SIGINT', function(){
   gracefulShutdown('app termination', function(){
      process.exit(0);
   });
});

process.once('SIGTERM', function(){
   gracefulShutdown('Heroku app shutdown', function(){
      process.exit(0);
   });
});

require('./locations');