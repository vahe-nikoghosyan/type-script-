// var number = 1;
// let count = 2;

// =====================================
// Different var and lat in TypeScript
// =====================================

function doSomething(){
    // for (var i = 0; i < 5; i++) {
    //     console.log(i);
    // }

    // console.log('Finally: ' + i);  // Finally: 5 

    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    // console.log('Finally: ' + i); // Cannot find name 'i'
}

// doSomething()


//\\=========================//\\
// let count = 5;
// count = 'a'; // Type '"a"' is not assignable to type 'number'


//\\ ======== Types ======//\\
let a: number;
let b: string;
let c: boolean;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red, Green, Blue }; // Automaticly Red = 0, Green = 1, Blue = 2
let backgroundColor = Color.Red;