function testNoteListInstantiation(){
  var noteList = new NoteList();
  var note = new Note("This is a Note!");
  noteList.addNote(note);
  assert.isTrue(noteList.returnNoteText(0) === note.returnText());
}

testNoteListInstantiation();
