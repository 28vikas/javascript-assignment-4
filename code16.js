// 15	Write a function that checks if a given number is a multiple of 3.

function  multiple(num){
    if(num%5 ==0 ){
        return "the number " +num+ " is multiple of 5"
    }else{
        return "the number " +num+ " is not multiple of 5"
    }

}

console.log(multiple(15));