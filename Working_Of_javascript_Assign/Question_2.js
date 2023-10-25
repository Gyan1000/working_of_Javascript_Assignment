//Because in Memory creation Phase sayHello initialized with undefined 
//we are calling before declaration then in code execution phase sayHello has undefined value so we get
//Type Error multiplyNumbers is not a finction

multiplyNumbers(7,6);

var multiplyNumbers=function(a,b){
   
    return a*b;
}

