// 7	Write a function that checks if a number is positive or negative.


let num = 5;

function sign(num){
    if(num>0){
        return "positive"
    }else if(num<0){
        return "negative"
         
    }else{
        return "zero";
    }
}
console.log(sign(num))