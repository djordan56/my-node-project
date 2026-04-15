import fs from 'fs';
import cowsay from 'cowsay';

console.log('choo choo!');

// cowsay output
const cowOutput = cowsay.say({ text: 'mooooo' });
console.log(cowOutput);

// write words to file
const words = ['unicorn', 'cupcake', 'rainbow', 'kitten'];
const fileContent = words.join('\n');

fs.writeFile('word.txt', fileContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("file written!");
});