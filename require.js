// var area = require('./area');
var rect = require('./area');
function solveRect(l,b){
    console.log("Starting the rectangular problem");
    rect(l,b,function(error,rectangle){
        if(error){
            console.log(error);
        }else{
            console.log("The area of the rectangle is "+rectangle.area());
            console.log("The perimeter of the rectabgle is "+rectangle.perimeter());
        }
    });
}
solveRect(5,6);