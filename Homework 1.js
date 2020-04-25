//1. Write a program to print X star pattern series using loop.

function starPattern(num){
let asterics = '';
    for(let i = 0; i < num; i++){
       for(let j = 0; j < num; j++){
            if(i == j || i == num - j - 1){
                asterics +='*';
            }
            else
                asterics += ' ';
        }
        asterics += '\n';
    }
console.log(asterics);
}

//2. Given an array of numbers. Print frequency of each unique number. (Frequency is the //count of particular element divided by the count of all elements)

function freq(arr){
    
    let numCount ={};
    for(let i = 0; i < arr.length; i++){
        const key = arr[i].toString();
        numCount[key] = numCount[key] + 1 || 1 
    }
    return numCount;
}

//3. Given an array of strings and numbers. Print the number of integers and the number of //strings in the array.

function findStrAndNum(arr){
 let numCount = 0;
 let strCount = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === 'number'){
            numCount ++;
        }
       if (typeof(arr[i]) === 'string')
            strCount++;
    }
    console.log('Numbers: ' + numCount +', Strings: ' + strCount);
}

//4. Write a function that accepts a string(a sentence) as a parameter and finds the longest //word within the string․ If there are several words which are the longest ones, print the 	//last word(words can be separated by space, comma or hyphen).

function findLongestStr(str){
    let strArr = str.split(" ");
    let len = strArr.length
    let subStrArr = [];
    let numArr = [];
    for (let i = 0; i < len; i++){
        subStrArr = strArr[i].toString().split("");
        let count = 0;
        for(let j = 0; j < subStrArr.length; j++){
            count ++;
        }
    numArr.push(count);
    }
    let maxLen = Math.max(...numArr);
    console.log(strArr[numArr.lastIndexOf(maxLen)]) ;   
}

//5. Write a function to find longest substring in a given a string without repeating //characters except space character. If there are several, return the last one. Consider //that all letters are lowercase.



//6. Write a function to compute a new string from the given one by moving the first char //to come after the next two chars, so "abc" yields "bca". Repeat this process for each 	//subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.

function subStrCharMove(str){
    let strArr = str.split('');
    let len = strArr.length;
    let newArr = [];
    let remainderArr = [];
    let secondArr = [];
    let changedSecondArr = [];
    let remainder = len % 3;
    if(remainder !== 0){
        remainderArr = strArr.slice(len - remainder, len);
        secondArr = strArr.slice(0, len - remainder);
        for(let i = 0; i < len; i += 3){
           changedSecondArr = moveArrayItemToNewIndex(secondArr,i,i+2);
        }
        newArr = changedSecondArr.concat(remainderArr);
    }
    else{
        for(let i = 0; i < len; i += 3){
            newArr = moveArrayItemToNewIndex(strArr,i,i+2);
        }
    }
    console.log(newArr.join(''));
}
function moveArrayItemToNewIndex(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; 
}

//7. Write a function, which receives an array as an argument which elements arrays of 	//numbers. Find biggest negative number of each array. Return product of that numbers.If 	//there is not any negative number in an array, ignore that one. Check that items of the 	//given array are arrays.

function productOfNegElements(arr){
   // debugger;
    let len = arr.length;
    let product = 1;
    for(let i = 0; i < len; i++){
        if(Array.isArray(arr[i])){
            if(typeof negMax(arr[i]) !== 'string'){
                product *= negMax(arr[i]);
            }
            else
                continue;
        }
        else
            return 'Invalid Argument'
    }
    return product;
}
function negMax(subArr){
    let subArrLen = subArr.length;
    let negNumArr = [];
    for(let i = 0; i < subArrLen; i++){
        if(subArr[i] < 0){
            negNumArr.push(subArr[i]);
        }
        else
            continue;
    }
    let max;
    if(negNumArr.length > 1){
        max = Math.max(...negNumArr);
    }
    if(negNumArr.length === 1){
        max = negNumArr[0];
    }
    if(negNumArr.length === 0){
        return "No Negativs";
    }
    return max;
}

//8. Write a JavaScript function to get all possible subsets of length 3 of the given //array.Assume that all elements in the array are unique.