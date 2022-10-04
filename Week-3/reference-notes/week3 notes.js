var a = {
    fname : "bob",
    lname : ["builder","charles"],
    print : function(){
            this.lname.forEach(function(x){
                console.log(this.fname + " knows " +  x);
            });
    }
}

//Solution 1 :  var that = this;  ( Default Binding )


var a = {
    fname : "bob",
    lname : ["builder","charles"],
    print : function(){
            var that = this;
            this.lname.forEach(function(x){
                console.log(that.fname + " knows " +  x);
            });
    }
}


//Solution 2 : bind this    ( Explicit Binding )

var a = {
    fname : "bob",
    lname : ["builder","charles"],
    print : function(){
            this.lname.forEach(function(x){
                console.log(this.fname + " knows " +  x);
            },(this));
    }
}


//Solution 3 : Arrow Function

var a = {
    fname : "bob",
    lname : ["builder","charles"],
    print : function(){
            this.lname.forEach((x) =>{
                console.log(this.fname + " knows " +  x);
            });
    }
}