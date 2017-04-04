var data = require('./data.json');  
//check routes.js to see 
var obj={};
module.exports ={
get:function(req,res,next){
	for(var key in Data){
		if(obj[key]===undefined){
			obj[key]=Data[key]
		}
	}
	res.json(obj)
}

}