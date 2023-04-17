// 3	Write a function that takes in an array of numbers and returns a new array with all the numbers sorted in ascending order.


let arr = [5,8,3,3,2,1,5];

let arr2 = [];

function ascending(arr){
   
    for(let i = 0; i<arr.length; i++){
      for(let j= i+1; j<arr.length; j++){
        if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

        }
      }
    }
    return arr;

}


console.log(ascending(arr));