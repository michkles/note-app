(function(exports) {

    function NoteListView(noteList) {
        this.noteList = noteList;
    }

    NoteListView.prototype.noteLists = function() {
        return this.noteList;
    };

    NoteListView.prototype.printHtml = function() {
        var list = this.noteLists();
        var notearray = list.returnNoteList();
        var text = notearray.map(function(note) {
            return "<li><div>" + lessThanTwenty(note.text) + "</div></li>";
        });
        return "<ul>" + text.join("") + "</ul>"
    };

    function lessThanTwenty(text) {
      if (text.length > 20) {
        return text.substring(0, 20);
      }
      else {
        return text;
      }
    };


    exports.NoteListView = NoteListView;
})(this);
