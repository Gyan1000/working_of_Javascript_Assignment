//let and const scope are block and  it keep in Temporal Dead Zone so we can't access until we initialized it;
//we try to access before initialization (b,c) that's why we get ReferenceError.

 function hello()
 {
    console.log(a);
    let a=20;
 }

 hello();