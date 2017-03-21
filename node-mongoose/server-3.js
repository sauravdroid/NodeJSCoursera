var mongoose = require('mongoose'),
    assert = require('assert');
var Dishes = require('./dishes-3');
var url = "mongodb://localhost:27017/conFusion";
mongoose.connect(url);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection-error'));
db.once('open',function(){
    console.log("Successfully connected to the server");
    Dishes.create({
        name:'Uthapizza',
        description:"Test",
        comments:[{
            rating:3,
            comment:'This is insane',
            author:'Matt Damon'
        }]
    }, function(err,dish){
        if(err) throw err;
        console.log('Dish Created');
        console.log(dish);
        var id = dish._id;
        setTimeout(function(){
            Dishes.findByIdAndUpdate(id,{
                    $set:{
                        comment:"Updated Test"
                    }
                },{
                    new:true
                })
                .exec(function(err,dish){
                    if(err) throw err;
                    console.log("Updated Dish");
                    dish.comments.push({
                        rating:4,
                        comment:'Wow this is amazing',
                        author:'Saurav Biswas'
                    });
                    dish.save(function(err,dish){
                        console.log("Updated Comments");
                        console.log(dish);
                        db.collection('dishes').drop(function(){
                        db.close();
                    });
                    });
                })
        },3000);    
    });
});