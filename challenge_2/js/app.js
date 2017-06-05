
console.log('challenge #2 -- app.js loaded!');
var app = angular.module("appTwo", []);

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("WdiController", WdiController);
 
 function WelcomeController(){
   this.full_name = "Cameron",
   this.age = 25,
   this.city = "Riverside",
   this.state = "Ca",
   this.shout = (full_name) => full_name.toUpperCase() + "!";
}
  
function WdiController() {
  this.class_name = "WDI3";
  this.enrolled_students = 12;
  this.start_date = "3/13/2017";
  this.end_date = "6/02/2017";
  this.daysRemaining = () => {
    let endDate = new Date(2017,06,02);
    let today = new Date();
    var oneDay = (24*60*60*1000);
    var diffDays = Math.round(Math.abs((today.getTime() - endDate.getTime())/(oneDay)));
    return diffDays;
  }
}