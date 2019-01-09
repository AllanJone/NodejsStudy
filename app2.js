//normal function statement
function sayHi(){
    console.log('Hi');
};

sayHi();

//function expression
var sayBye = function(){
    console.log('Bye');
};

sayBye();


function callFunction(fun){
    fun();
}

var functionCall = function () {
    console.log('Function Call');
};

callFunction(functionCall);

