//note the differnce between yargs.argv and process.argv
console.log("Starting app.");
const fs = require('fs'); 
const os = require('os'); 
const yargs = require('yargs');

const notes = require('./notes.js');//using the relative path of the file
var argv = yargs.argv;
var command = process.argv[2];
// console.log(process.argv);
// console.log('command: ',command);
// console.log(argv);//using yargs to parse arguments, better than parsing using process
if(command == 'add')
{    
    notes.addnote(argv.title,argv.body); //()s exported from notes.js
}
else if(command == 'list')
{    
    notes.getAll();
}
else if(command == 'read')
{
   notes.getNote(argv.title);
}
else if(command == 'remove')
{
    notes.removeNote(argv.title);
}
else
{
    console.log('Command not recognized');
}



