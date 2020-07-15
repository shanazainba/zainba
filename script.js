(function (window) {
var names = ["shana", "James", "Johny", "aysha", "hiza", "farzin", "joe", "diya", "maya", "Joseph"];
for (var i in names) {
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();
  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);
