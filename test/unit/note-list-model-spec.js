function testNoteListModel(){
  var testNoteList = new NoteList("My favourite language is JavaScript");
  if(testNoteList.returnNotes() != "My favourite language is JavaScript"){
    throw new Error ("Note is not there");
  } else {
    console.log("Success : " + testNoteList.returnNotes)
  }

}
