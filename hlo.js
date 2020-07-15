(function (window) {
var helloSpeaker = {};
var say = "Hello";
helloSpeaker.speak = function (name) {
  console.log(say + " " + name);
}
window.helloSpeaker = helloSpeaker;
})(window);
