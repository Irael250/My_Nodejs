 const EventEmiter = require('events');

 const ulr= 'http://mylogger.io/log';

 class Logger extends EventEmiter{

     log(message){

        console.log(message);
    
        this.emit('messageLogged',{
            id:1, url: 'http://'
        });
    
    }
    
 }
    module.exports = Logger;
    



