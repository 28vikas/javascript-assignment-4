// 5	Write a function that takes in an array of objects and returns a new array with all the objects sorted by a specific property.


let arr = [
    {fname: "vikas", age: 25},

    {fname: "rahul", age: 25,},

]





function sortobj(arr, prop){
let arr1 =[];
let arr2 = [];

    for(let i = 0; i<arr.length; i++){
        for(let key in arr[i]){
            if(key == prop){
                arr1.push(arr[i]);
                break;
            }
            else{
                arr2.push(arr[i])
                break;
            }
        }
    }
    for(let j = 0; j<arr2.length; j++){
        arr1.push(arr2[j]);
    }
    return arr1;
}



console.log(sortobj(arr, "fname"));