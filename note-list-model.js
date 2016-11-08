(function(exports) {
  function NoteList(){
    this.notes = [];
  };

  Notelist.prototype.addNote = function(note){
    this.notes.push(note);
  }

  NoteList.prototype.returnNotes = function(){
    return this.notes;
  };

  exports.NoteList = NoteList;
  exports.returnNotes = this.returnNotes;
})(this);
