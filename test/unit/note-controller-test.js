function testNoteControllerInstantiation(){
    var controller2 = new NoteController();
    assert.isTrue(controller2 instanceof NoteController);
}

function testNoteControllerHTML(){
  var list2 = new NoteList();
  var notecontroller = new NoteController(list2);
  notecontroller.newNote("I need to buy food");
  //notecontroller.printHtml();
  var expectedHtml = "<ul><li><div>I need to buy food</div></li></ul>";
  view2 = new NoteListView(list2);
  view2.printHtml();
  assert.isTrue( expectedHtml === view2.printHtml());
}

testNoteControllerInstantiation();
testNoteControllerHTML();
