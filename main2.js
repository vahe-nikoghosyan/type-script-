var message;
message = 'abc';
// let endsWith = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
// ========================
var log = function (message) {
    console.log(message);
};
var doLog = function (message) {
    console.log(message);
};
var drawPoint = function (point) {
    // ...
};
var getDistance = function (pointA, pointB) {
    // ...
};
// drawPoint({
//     x: 1,
//     y: 2
// })
//\\=================\\
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.drow = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (anoter) {
        // ...
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.drow();
