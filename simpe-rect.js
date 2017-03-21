var rect = require('./rect');
var square = require('./square');
function solveRect(a,b){
    if( a < 0 || b < 0){
        console.log("Cannot find area or perimeter for length or breadth lesser than 0");
    }else{
        console.log("The perimeter of the rectangle is "+rect.perimeter(a,b));
        console.log("The area of the rectangle is "+rect.area(a,b));
    }
}
solveRect(5,3);
solveRect(5,-33);
solveRect(2,3);
square.perimeter();
square.area();