// 6	Write a function that takes in a number and returns the Fibonacci sequence up to that number


function fibonacci(num){
    let a = 0;
    let b = 1;
    let bag = a+ " "+b+ " ";
    for(let i = 2; i<num; i++){
        let c = a+b;
        bag = bag+c+ " ";
        a = b;
        b = c;
    }
    return bag;
}

console.log(fibonacci(10))