// // // function sayHello(name){

// // //     console.log("hello " +name);
// // // }
// // // sayHello("Ellyse");
// // // var message='Hello';
// // // console.log(globalThis.message);
// // var logger = require('./logger');

// // logger.log('hello');


// const EventEmiter = require('events');


// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('messageLogged',(arg)=>{

//     console.log("liserner called",arg);
// });

// logger.log('message')

const http = require('http');

const server = http.createServer( (req, res)=>{

    if (req.url ==='/'){
        res.write('Hello world');
        res.end();
    }

});

server.listen(3000);


console.log('Listening on port 3000....');










