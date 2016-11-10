(function(exports) {
    function SingleNoteView(note){
      this.note = note;
    }

    SingleNoteView.prototype.returnNote = function (){
      return this.note;
    };

    SingleNoteView.prototype.printSingleHtml = function() {
      return "<div>" + this.note.text + "</div>";
    };
    exports.SingleNoteView = SingleNoteView;
    exports.returnNote = this.returnNote;
  })(this);
