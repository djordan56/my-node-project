//import * as fs from 'fs';
import { say } from 'cowsay';
console.log('choo choo!');

const output = cowsay.say({text: 'mooooo'});
console.log(output);

const words = ['unicorn', 'cupcake', 'rainbow', 'kitten'];
const output = words.join('\n');
fs.writeFile('word.txt', output, fileWritten);

function fileWritten(){
    console.log("file written!");
}