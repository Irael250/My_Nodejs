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

// readFile('./text.txt', 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));








// const readFile = async () => {
//   try {
//     const data = await fs.readFile('./text.txt', 'utf8');
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// readFile();

// write file................................................


const WriteFile = async () => {
  
  try {
    
   await fs.writeFile('./text.txt', 'Hello'); 
  } catch (error) {

    console.log(error);
  }
}