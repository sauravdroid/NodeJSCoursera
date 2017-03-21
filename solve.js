var argv = require('yargs')
.usage('Usage: node $0 --l=[num] --b=[num] ')
.demand(['l','b'])
.argv;
var rect = require('./rectangle2.js');
function solveRect(l,b){
    console.log("Solving the rectangle problem ");
    rect(l,b,function(err,rectangle){
        if(err){
            console.log(err);
        }else{
            console.log("The area of the rectangle is "+rectangle.area());
            console.log("The perimeter of the rectangle is " +rectangle.perimeter());
        }
    });
}

solveRect(argv.l,argv.b);
