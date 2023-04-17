// Q4 4	Write a function that takes in an array of strings and returns a new array with all the strings sorted in alphabetical order.

let arr = ['mango', 'apple', "cat", "dog"];


function sortalphabetical(arr){
    for(let i = 0; i<arr.length-1; i++){
        for(let j = 0; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]= temp;
            }
        }
    }return arr;
}




console.log(sortalphabetical(arr));