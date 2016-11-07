function testNoteModel(){
  var testNote= new Note("My favourite language is JavaScript");
  if (testNote.returnText() != "My favourite language is JavaScript") {
    throw new Error ("Text is not there");
  } else {
    console.log("Success : " + testNote.returnText());
  }
}

testNoteModel();
