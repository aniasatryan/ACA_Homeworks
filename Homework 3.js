//1. Write a recursive function to determine whether all digits of the number are odd or //not.

function isOdd(number){
    let digits = [];
    let digit;
    let remainder;
    let str = number.toString();
    let i = str.length;
    do{
        digit = number % 10;
        remainder = number / 10 | 0;
        number = remainder;
        if(digit % 2 !== 0){
            digits.push(true);
        }
        else
            digits.push(false);
        i--;      
    }
    while(i > 0);
    let len = digits.length;
    let result;
    for(let j = 0; j < len; j++){
        if(digits[j] === false){
            result = false;
            return result;
        }
        else
            continue;
    }
    result = true;
    return result;
}

//2. Given an array of numbers. Write a recursive function to find its minimal positive //element. (if such element does not exist, return -1)․

function minPositive(arr){
    let len = arr.length;
    let filtered = arr.filter(function(value, index, arr){
    return value > 0;
    });
    let min;
    if(filtered.length !== 0){
        min = Math.min(...filtered);
    }
    if(filtered.length === 1){
        min = filtered;
    }
    else
        return -1;
    return min;
}

//3. Write a recursive function which receives  a number as arguments and returns the //fibonacci sequence as array.

function fibo(n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var arr = fibo(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
}

//4. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).

function flatArray(arr, d = 1) {
   return d > 0 ? arr.reduce((arr2, val) => arr2.concat(Array.isArray(val) ? flatArray(val, d - 1) : val), [])
                : arr.slice();
}

flatArray([1,[3,4,[1,2]],10],Infinity)
(6) [1, 3, 4, 1, 2, 10]

//5. Given a number. Write a function that calculates its sum of the digits and if that sum //has more than 1 digit find the sum of digits of that number. Repeat that process if //needed and return the result.

function sumOfDigits(number){
    let digit;
    let remainder;
    let sum = 0;
    let i = number.toString().length;
    do{
        digit = number % 10;
        remainder = number / 10 | 0;
        number = remainder;
        sum += digit;
        i--;      
    }
    while(i > 0);

   if(sum > 9){
        return sumOfDigits(sum);   
   }
    else
        return sum;
   
}