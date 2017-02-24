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

// Listen for the "uninstall" event so we know when it's done. 
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

svc.install();