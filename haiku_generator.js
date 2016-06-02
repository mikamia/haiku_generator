var haiku = require('./haiku');

var cmudictFile = haiku.readCmudictFile('./cmudict.txt');

var struct1 = [5,7,5];
var struct2 = [2,2,1,3,4,2,3];
var struct3 = [1,1,1,2,3,2,1,1,4,1];
var h = haiku.createHaiku(struct1, cmudictFile);
console.log(h);
var h = haiku.createHaiku(struct2, cmudictFile);
console.log(h);
var h = haiku.createHaiku(struct3, cmudictFile);
console.log(h);


