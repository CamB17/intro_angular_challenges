
console.log('challenge #2 -- app.js loaded!');

 var app = angular.module("appTwo", []);
//Welcome controller goes here
app.controller("WelcomeController", WelcomeController);
app.controller("WdiController", WdiController);
 
 function WelcomeController(){
   this.full_name = "Cameron";
   this.age = "25";
   this.city = "Riverside";
   this.state = "Ca";
   //this.shout = function (input) {
   	//	var out = input.UpperCase() + "!";
   	//	return out;

// };
}

 function WdiController(){
 	this.class_name = "DenverWdi";
 	this.enrolled_students = "12";
 	this.start_date = "March 13th";
 	this.end_date = "6/02/2017";
 	//Create countown calculator
 	this.daysRemaining = () => {
		let endDate = new Date(2017,06,02);
		let today = new Date();
		var oneDay = (24*60*60*1000);
		var diffDays = Math.round(Math.abs((today.getTime() - endDate.getTime())/(oneDay)));
		return diffDays;
	}
}