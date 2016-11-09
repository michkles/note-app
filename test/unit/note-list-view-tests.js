function testNoteListViewInstantiation() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    assert.isTrue( noteListView.noteLists() === noteList );
}

function testNoteListViewReturningHtml() {
  var noteList = new NoteList();
  noteList.newNote('Favourite beer: Heineken');
  noteList.newNote('Favourite editor: Vim');
  var noteListView = new NoteListView(noteList);
  assert.isTrue( noteListView.printHtml() === "<ul><li><div>Favourite beer: Heineken</div></li><li><div>Favourite editor: Vim</div></li></ul>");
}


testNoteListViewInstantiation();
testNoteListViewReturningHtml();
