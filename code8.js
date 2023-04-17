// 8	Write a function that checks if a string is empty or not.


let str = "";

function empty(str){
    for(let i = 0; i<str.length; i++){
        if(str[i] !== ""){
            return "not empty";
        }
    }
    return "empty"
  
}

console.log(empty(str));