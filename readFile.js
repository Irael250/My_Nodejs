import fs from "fs";
import { readFile } from 'fs/promises';

// fs.readFile('./text.txt', 'utf8' , (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });


// doing it using simple way  readFileSync()

// const data = fs.readFileSync('./text.txt', 'utf8');
// console.log(data);
// using promises .then() and .catch()

readFile('./text.txt', 'utf8')
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
