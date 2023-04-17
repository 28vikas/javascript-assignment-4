// 15	Write a function that checks if a given number is a multiple of 3.

function  multiple(num){
    if(num%3 ==0 ){
        return "the number " +num+ " is multiple of 3"
    }else{
        return "the number " +num+ " is not multiple of 3"
    }

}

console.log(multiple(33));