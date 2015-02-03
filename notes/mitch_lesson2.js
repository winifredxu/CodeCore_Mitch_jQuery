// Anonymous function  (similar to Ruby's block)

var map = function (array, transform) {
    var result = [];
    
    for (var i=0; i < array.length; i ++) {
        result[i] = transform(array[i]);
    };
    return result;
};

map ([1,2,3], function(x) { return (x*x);})

// JS 'underscore.js' gem -- contains _.map() and other _.functions
//  gem 'underscore'   in Gemfiles, then run #bundle


/* Q: how do we wait 1 second in Ruby before doing something in Ruby? in Ruby, sleep(1). But JS does not have it because needs to be responsive. 

- setInterval, setTimeout -- example: delay "Hello World" with setTimeout

*/
document.write("Waiting...");
setTimeout(function() { document.write("Hello world");}, 2000);
//Waiting gets overwritten, then 5 sec later Hello world

/* Example:  counter with setInterval
*/
var count =0;
setInterval (function() { while (count<10) {console.log(count); count += 1;};}, 1000);


// Example: waiting with dots, make your page script write "Waiting" and then add a "." every second. 
var count =0;
document.write("Waiting");
setInterval ( function() { document.write("."); }, 1000);

//Example: Ending an interval with 'clearInterval'

var myInterval = setInterval( function() { console.log('.');}, 1000 );
clearInterval(myInterval);

/* Example: Blast-off
Build a blast-off countdown using 'setInterval'.  *5 4 3 2 1 
*/
var count =5;
var myInterval = setInterval ( function() { 
	if (count == 0) {
		console.log("Blast off!");
		clearInterval(myInterval);
	} else {
		console.log(count);
		count -=1;
	};
}, 1000 );

/* Advanced Objects 
 - delete  --- remove a property, not used very frequently in JS and Ruby
delete is an operator but not a function */

var car = { name: 'betty', model: 'ford'};
car;
delete car.name;
car;
typeof car;   // typeof is also another operator, not a function

// loop over properties 
var car = { name: 'bett', model: 'ford', speed: 'super fast'};
for (var k in car) {
	console.log(k, car[k]);
};

var countProperties = function(myObj) {
	var counter = 0;
	for (var k in myObj) {
		counter +=1;
	};
	return(counter);
};
console.log ( countProperties(car) );
console.log ( countProperties(document) );

//Exercise: 'console' is an object, figure out what properties it has.

typeof console; //shows 'object'
for (var k in console) {
	console.log(k, console[k]);
}

/* "Methods" Adding functions to Objects
Example:  Add 'drive' function to "car" object that says "Vrooom", calling "drive"

- this is what we've seen when calling console.log!

*/
car.drive = function() { console.log("Vroom!"); };
car.drive;
car.drive();
var driveCar = car.drive;
driveCar();

car = { 
	name: 'Betty', 
	drive: function() {
		console.log('Vroom');
	};
};

/* Exercise: Stop car
Add a stop function to your car that logs "screetch!" to the console.
*/

car.stop = function() { 
	console.log("screetch!");
}

/* 'this' keyword inside functions:
Example: Make 'drive' method output the value of speed. (eg. "Vrooom! The car is driving fast.")  */

var drive =  function() {
			console.log("Vroom! The car is driving " + this.speed + ".");
		};
car.drive = drive;
car.drive();

var car1 = { name: 'carol', speed 'normal'};
var car2 = { name: 'John', speed 'slow'};

/* Exercise: better stop
Change "stop" to have the following output: 
"Screetch!" if speed is "fast"
"Rrch" if speed is "medium"
"sh" if speed is "slow"
"Yikes, I don't know how fast I'm going!!" if speed is anything else.
*/
var driveFunc = function() {
	var speed = this.speed;
	if (speed == "fast") {
			console.log("Screetch!!");
		} else if (speed == "medium") {
			console.log("Rrch");
		} else if (speed == "slow") {
			console.log("sh");
		} else {
			console.log("Yikes, I don't know how fast I'm going!!");
		};
};

car1.drive = driveFunc;
car2.drive = driveFunc;

car1.drive();
car2.drive();


// Advanced JS concepts: 
//- scope of variables with and without "var", Example:
var three = 3;
var fnOne = function() { var one =1; };
var fnTwo = function() { two =2; };
var fnThree = function() { three = 4; };

console.log (one);   <-- undefined
console.log (two);   <-- undefined
console.log (three);   <-- 3

// but if the 4 var lines are loaded, then "two" and "three" are now defined as "2" and "4".   NOTE the missing "var" causes the scope of the "two" and "three" to extend outside of the function. 


//- Closures - Example: makeCounter function

var makeCounter = function() {
	var count = 0;
	return function () {
		console.log(count);
		count += 1;
	};
};

var counter1 = makeCounter();
var counter2 = makeCounter();

//counter1 and counter2 got different copies of the counter function, each still retains a "count" variable while it should have died. 

//- Creating objects with "new", historical fake class
var Model = function() {
	this.value = "5";
};

=> {
	value: 5
}

myModel = new Model();