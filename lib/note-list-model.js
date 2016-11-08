(function(exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.addNote = function (note){
    this.notes.push(note);
  };

  NoteList.prototype.returnNoteText = function () {
    var i = 0, length = this.notes.length;
    for(i; i < length; i++ ) {
      return this.notes[i].returnText();
    }
  };

  NoteList.prototype.returnNoteList = function () {
    return this.notes.toString();
  };

  NoteList.prototype.createNote = function (string) {
    note = new Note(string);
    this.addNote(note);
  };

  exports.NoteList = NoteList;
  exports.addNote = this.addNote;
})(this);
