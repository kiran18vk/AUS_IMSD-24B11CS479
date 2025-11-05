function performArithmetic()
{
let a,b;
a=parseInt(prompt("enter the 1st num"))
b=parseInt(prompt("enter the 2nd num"))
let sum,diff,prod,div;
sum=a+b;
diff=a-b;
prod=a*b;
div=a/b

console.log("sum="+sum)
console.log("diff="+diff)
console.log("prod="+prod)
console.log("div="+div)
}

function product()
{
    let a,b;
a=parseInt(prompt("enter the 1st num"))
b=parseInt(prompt("enter the 2nd num"))

let p =a*b
console.log("product="+p)

}

function divide()
{
    let a,b;
a=parseInt(prompt("enter the 1st num"))
b=parseInt(prompt("enter the 2nd num"))

let d =a/b
console.log("division="+d)

}

function add()
{
    let a,b;
a=parseInt(prompt("enter the 1st num"))
b=parseInt(prompt("enter the 2nd num"))

let c =a+b
console.log("addition="+c)

}

function subtract()
{
    let a,b;
a=parseInt(prompt("enter the 1st num"))
b=parseInt(prompt("enter the 2nd num"))

let d =a-b
console.log("subtraction="+d)
}
 function findSI(){
    let P,T,R;
    P=parseInt(prompt("enter the Principal amount"))
    T=parseInt(prompt("enter the Time in months"))
    R=parseFloat(prompt("enter the Rate of Interest"))
    let SI = (P*T*R)/100
    console.log("RATE = "+R)
    console.log("Time = "+T)
    console.log("Principal = "+P)
    console.log("Simple Interest = "+SI)
}