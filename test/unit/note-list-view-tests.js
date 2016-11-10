function testNoteListViewInstantiation() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    assert.isTrue( noteListView.noteLists() === noteList );
}

function testNoteListViewReturningHtml() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue( noteListView.printHtml() === "<ul></ul>");
  noteList.newNote('beer: Heineken');
  assert.isTrue( noteListView.printHtml() === "<ul><li><div>beer: Heineken</div></li></ul>");
  noteList.newNote('editor: Vim');
  assert.isTrue( noteListView.printHtml() === "<ul><li><div>beer: Heineken</div></li><li><div>editor: Vim</div></li></ul>");
}

function testNoteListViewLessThanTwenty() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteList.newNote('I need to buy 999999 bottles of rum');
  var print = noteListView.printHtml();
  var tags = "<ul><li><div></div></li></ul>"
  assert.isTrue( (print.length) <= (20 + tags.length));
}

testNoteListViewInstantiation();
testNoteListViewReturningHtml();
testNoteListViewLessThanTwenty();
