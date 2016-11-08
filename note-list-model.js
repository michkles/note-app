(function(exports) {
  function NoteList(note){
    this.notes = [note];
  };

  NoteList.prototype.returnNotes = function(){
    return this.notes;
  };

  exports.NoteList = NoteList;
  exports.returnNotes = this.returnNotes;
})(this);
