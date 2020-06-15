// let message; 
// message = 'abc';
// let endsWith = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');


// ========================
let log = function(message) {
    console.log(message);
}

let doLog = (message) => {
    console.log(message);
}

// one line arrow function
// let doLog = (message) => console.log(message);

// ========================================
//  Use custom type in TypeScript
// ========================================

// the first letter of every word in he name of the interface should be capitalized
// Pascal naming convention
// interface Point {
//     x: number,
//     y: number
// }

let drawPoint = (point: Point) => {
    // ...
}

let getDistance = (pointA: Point, pointB: Point) => {
    // ...
}

// drawPoint({
//     x: 1,
//     y: 2
// })

//\\=================\\

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Method 1
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// class Point {
//     x: number;
//     y: number;

//     drow() {
//         console.log('X: ' + this.x + ', Y: ' + this_);
//     }

//     getDistance(anoter: Point) {
//         // ...
//     }
// }

// let point = new Point();
// point.x = 1;
// point.y = 2;
// point.drow();

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Method 2
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// TypeScript have three Access Modifiers
// public
// private
// protected

// class Point {
//     private x: number;
//     y: number;

//     constructor(x?: number, y?: number) {
//         this.x = x;
//         this.y = y;
//     }

//     drow() {
//         console.log('X: ' + this.x + ', Y: ' + this.y);
//     }

//     getDistance(anoter: Point) {
//         // ...
//     }
// }

// let point = new Point(1, 2);
// point.x we can not use because the x field is private eg. private: x: number

// // if point object is empty we have compilation error in below and we can change the constructor parametrs like this
// constructor(x?: number, y?: number) {
//     this.x = x;
//     this.y = y;
// }

// let point = new Point();

// point.drow();

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Method 3
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// class Point {
//     constructor(public _x?: number, private _y?: number) {
        
//     }

//     drow() {
//         console.log('X: ' + this._x + ', Y: ' + this._y);
//     }

//     getX() {
//         return this._x;
//     }

//     get x() {
//         return this._x;
//     }

//     setX(value) {
//         if(value < 0) 
//             throw new Error('Value can not be less than 0.');
//     }
    
//     set x(value) {
//         if(value < 0) 
//             throw new Error('Value can not be less than 0.');
//     }

// }

// let point = new Point(1, 2);
// let x = point.getX();
// point.setX(10);

// let x = point.x;
// point.x = 10;

// point.drow();

// ===================\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ===== Modules =====
// ===================\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import { Point } from './point';

let point = new Point(1, 2);
point.drow();