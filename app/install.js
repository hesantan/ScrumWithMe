var Service = require('node-windows').Service;
var config = require('./config');

// Create a new service object
var svc = new Service({
  name:'ScrumWithMe',
  description: 'No hassle Planning Poker application for Node.JS.',
  script: require('path').join(__dirname,'app.js')
});

// Set the account information
svc.user.domain = config.Services.user.domain;
svc.user.account = config.Services.user.account;
svc.user.password = config.Services.user.password;

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

// Just in case this file is run twice.
svc.on('alreadyinstalled',function(){
  console.log('This service is already installed.');
});



// Listen for the "start" event and let us know when the
// process has actually started working.
svc.on('start',function(){
  console.log(svc.name+' started!\nVisit http://127.0.0.1:4000 to see it in action.');
});

svc.install();