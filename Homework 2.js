//1. Write a function which receives an array and a number as arguments and returns a new //array from the elements of the given array which are larger than the given number. 

function greatThanNum(arr,num){
    let resultArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > num){
            resultArr.push(arr[i]);
        }
        else
            continue;
    }
    if(resultArr.length !== 0){
        return resultArr;
    }
    else
        return "Such values do not exist";
}

//2. Write a function, which receives two numbers as arguments and finds all numbers //between them such that each digit of the number is even. The numbers obtained should be //printed in a comma-separated sequence on a single line.

function evensBetweenNums(num1,num2){
    let digits = [];
    let result = [];
    for(let i = num1; i <= num2; i++){
        digits = toChar(i);
        let digLen = digits.length;
        for(let j = 0; j < digLen; j++){
            if(isEven(digits[j]) && isEven(digits[j+1])){
                result.push(i);
                break;
            }
            else
                console.log("Such numbers does not exist")
                break;
        }
    }
    console.log(result);
}
function toChar(number){
    let str = number.toString();
    let res = [];
    let len = str.length; 
        for (let i = 0; i < len; i++) { 
                res.push(+str.charAt(i)); 
            } 
              
            return res ; 
}
function isEven(digit){
    if(digit % 2 === 0){
        return true;
    }
    else
        return false;
}


//3. Given an array of numbers which is almost sorted in ascending order.Find the index //where sorting order is violated.

function findIndex(arr){
    let len = arr.length;
    let index;
    for(let i = 0; i < len; i++){
        index = 0;
        if(arr[i] > arr[i+1]){
            index = i;
            break;
        }
    else
        index = -1;
    }
    return index;
}

//4. Given an array of integers, find the pair of adjacent elements that has the largest //product and return that product.

function largestProduct(arr){
    let products = [];
    let product = 1;
    let len = arr.length;
    for(let i = 0; i < len; i++){
        if(i !== len - 1){
            product = arr[i] * arr[i+1];
            products.push(product);
        }
        else
            break;
    }
    let max = Math.max(...products);
    return max;
}

//5. Given an array of integers. All numbers are unique. Find the count of missing numbers //between minimum and maximum elements to make integers sequence.

function missingNums(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let count = 0;
    let minMaxArr = [];
    for(let i = min; i <= max; i++){
        minMaxArr.push(i);
    }
    let len = minMaxArr.length;
    console.log(minMaxArr);
    for(let j = 0; j < len; j++){
        if(arr.includes(minMaxArr[j])){
            continue;
        }
        else
            count++;
    }
   
    return count;
}

//6.Given an array consisting from the arrays of numbers (like a two-dimensional array). //Find sum of each row and print them as an array

function sumOfSubArrays(arr){
    let len = arr.length;
    console.log(len);
    let sumArr = [];
    let sum;
    for(let i = 0; i < len; i++){
        let subLen = arr[i].length;
        console.log(subLen);
        sum = 0;
        for(let j = 0; j < subLen; j++){
            sum += arr[i][j];
            console.log(sum)
        }
        sumArr.push(sum);
    console.log(sumArr);
    }
}

//7.Given an array of integers. Write a function that return new array from first array, //where removed even numbers, and odd numbers was multiplied with new array length

function oddNumsArr(arr){
    let len = arr.length;
    let oddsArr = [];
    let result = [];
    for(let i = 0; i < len; i++){
        if(arr[i] % 2 !== 0){
            oddsArr.push(arr[i]);
        }
        else
            continue;    
    }
    let oddLen = oddsArr.length;
    for(let j = 0; j < oddLen; j++){
        result.push(oddsArr[j] * oddLen);
    }
    return result;
}