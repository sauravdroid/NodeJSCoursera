var mongoose = require('mongoose'),
    assert = require('assert');
var Dishes = require('./dishes-1');
var url = "mongodb://localhost:27017/conFusion";
mongoose.connect(url);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection-error'));
db.once('open',function(){
    console.log("Successfully connected to the server");
    var newDish = Dishes({
        name: "Sizzlers",
        description:"Pretty Bad"
    });
    newDish.save(function(error){
        if(error) throw error;
        console.log("Dish Created");
        Dishes.find({},function(err,dishes){
            if(err) throw err;
            console.log(dishes);
            db.collection('dishes').drop(function(){
                db.close();
            });
        });
    });
});