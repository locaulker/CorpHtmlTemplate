var $ = require('jquery');

var Person = require('./modules/Person');


alert("ABC 321 == Testing 123");

var john = new Person("John Doye", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();


$("h1").remove();
