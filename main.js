// var number = 1;
// let count = 2;
// =====================================
// Different var and lat in TypeScript
// =====================================
function doSomething() {
    // for (var i = 0; i < 5; i++) {
    //     console.log(i);
    // }
    // console.log('Finally: ' + i);  // Finally: 5 
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log('Finally: ' + i); // Cannot find name 'i'
}
// doSomething()
//\\=========================//\\
// let count = 5;
// count = 'a'; // Type '"a"' is not assignable to type 'number'
//\\ ======== Types ======//\\
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; // Automaticly Red = 0, Green = 1, Blue = 2
var backgroundColor = Color.Red;
