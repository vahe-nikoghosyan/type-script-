export class Point {
    constructor(public x?: number, private y?: number) {
        
    }

    drow() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}