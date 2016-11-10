function testNoteControllerInstantiation(){
    var controller = new NoteController();
    assert.isTrue(controller instanceof NoteController);
}

function testNoteControllerHTML(){
  var list = new NoteList();
  var controller = new NoteController(list);
  controller.newNote("I need to buy beer");
  controller.printHtml();
  var expectedHtml = "<ul><li><div>I need to buy beer</div></li></ul>";
  view = new NoteListView(list);
  view.printHtml();
  assert.isTrue( expectedHtml === view.printHtml());
}

testNoteControllerInstantiation();
testNoteControllerHTML();
