function testNoteListViewInstantiation() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    assert.isTrue( noteListView.noteLists() === noteList );
}

testNoteListViewInstantiation();
