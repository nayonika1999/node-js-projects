console.log("Starting notes.js");
const fs = require('fs');
var fetchNote = function(){
    try {
        var noteString = fs.readFileSync("notes-data.json");
        return JSON.parse(noteString);
    }//try-catch block to check if the file to be read exists or not
    catch (e) {
        return [];
    }

};
var saveNote = function(notes){
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));//writing data to a JSON file
};
var addnote = function (title, body){
    var notes = fetchNote();
    var note = {
        title,
        body//using ES6 notation
    };//individual note

  
    //Adding unique notes
    function uni(note) {
        return note.title === title;
    }
    var duplicateNote = notes.filter(uni);//filter () return elements which satisfy a callback(). it can take upto 3 args
    if (duplicateNote.length === 0) {
        notes.push(note);//adding a note to the empty array
        saveNote(notes);
        console.log("Note added successfully");
        console.log("Title: " + title);
        console.log("Body: " + body);
    } 
    else
    {
        console.log("Note title already exists.Try again:(");
    }
      
};
var getAll = function(){
    console.log('Listing lists');
    var notes = fetchNote();
    console.log(notes);
};
var getNote = function(title){

var notes = fetchNote();
function check(note){
    return (note.title === title)        
};
var readNote = notes.filter(check);//filter() returns an array always
if(readNote[0] !== undefined)
{
    console.log("Title:",readNote[0].title);    
    console.log("Body:", readNote[0].body);    
}
else
{
    console.log("Note not found");
}
};
var removeNote = function(title){
  var notes = fetchNote();
  function rem(note){
    return note.title != title;
  };
  var remnote = notes.filter(rem);  
  saveNote(remnote);
  if(notes.length != remnote.length)
    console.log("Note removed\n"); 
  else
    console.log("Note not found\n");
};
module.exports = {
    addnote,
    getAll,
    getNote,
    removeNote
};//export the ()s to use them in another file