(function (window) {
var byeSpeaker = {};
var say = "Good Bye";
byeSpeaker.speak = function (name) {
  console.log(say + " " + name);
}
window.byeSpeaker = byeSpeaker;
})(window);
