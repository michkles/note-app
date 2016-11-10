function testNoteListViewInstantiation() {
    var singleNote = new Note("Hello World");
    var singleNoteView = new SingleNoteView(singleNote);
    assert.isTrue( singleNoteView.returnNote() === singleNote );
}

function testSingleNoteReturningHTML() {
  var singleNote = new Note("Goodbye World");
  var singleNoteView = new SingleNoteView(singleNote);
  assert.isTrue(singleNoteView.printSingleHtml() === "<div>Goodbye World</div>");
}


testNoteListViewInstantiation();
testSingleNoteReturningHTML();
