var city1 = {
    food : "Uggani Bajji",
    famousFor : "Konda Reddy Fort" 
};

var city2 = {
    food : "Vada Pav",
    famousFor : "Bollywood"
};


var printCity = function(city,state){
    console.log(city +  "," + state + " is famous for " + this.food + " and " + this.famousFor);
} 


// Call 
// Immediate invocation 
// First Argugement provides context 
// Second, Third , etc., argurments are used for providing inputs (comma seperated positional arguments) during execution
// Invokes immediately 

this.printCity.call(city1,"Kurnool","Andhra Pradesh");
this.printCity.call(city2,"Mumbai","Maharashtra");

// Apply 
// Immediate invocation 
// First Argugement provides context 
// Second, Third , etc., argurments are used for providing inputs (as an array) during execution
// Invokes immediately 

this.printCity.apply(city1,["Kurnool","Andhra Pradesh"]);
this.printCity.apply(city2,["Mumbai","Maharashtra"]);



// Bind 
// Returns a function that can be invoked later 
// First Argugement provides context 
// Second, Third , etc., argurments are used for providing inputs (comma seperated positional arguments) during execution
// Invokes immediately 


var fncity1 = this.printCity.bind(city1,"Kurnool","Andhra Pradesh");
var fncity2 = this.printCity.bind(city2,"Mumbai","Maharashtra");

console.log(fncity1());

console.log(fncity2());