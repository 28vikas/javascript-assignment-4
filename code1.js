// 	1	Write a function that takes in a number and returns a new array with all the prime numbers up to that number.




function prime(num){
    let arr =[]
    for(let i = 1; i<=num; i++){
        let factor = 0;
        for(let j= 1; j<=i; j++){
            
            if(i%j == 0){
                factor++;
            }
        }
        if(factor == 2){
            arr.push(i);
        }
      
    }
    return arr;
}

console.log(prime(20));

