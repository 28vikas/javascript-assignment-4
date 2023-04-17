// 2	Write a function that takes in a string and returns a new string with all the vowels removed.

let str = "vikaS"

function rvowel(data){

    let newString = "";
    for(let i = 0; i<data.length; i++){

        if(str[i]==="a"|| str[i]=== "e" || str[i]=== "i" ||str[i]=== "o" || str[i]=== "u" || str[i]=== "A" || str[i]=== "E" ||str[i]=== "I" || str[i]=== "U" || str[i]=== "O"){
            continue;
        }else{
            newString = newString + data[i]
        }
    }

    return newString;
}


console.log(rvowel(str))