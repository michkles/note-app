(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.noteLists = function () {
    return this.noteList;
  };

  


  exports.NoteListView = NoteListView;
})(this);
