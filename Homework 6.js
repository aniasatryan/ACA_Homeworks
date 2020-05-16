//1.Given an array. Determine whether it consists only from unique elements or not.

function uniqueEl(arr){
    let len = arr.length;
    let isUnique = true;
    for(let i = 0; i < len; i++){
        for(let j = i + 1; j < len; j++){
            if(arr[i] === arr[j]){
                isUnique = false;
            }
        }
    }
    if(isUnique){
          console.log("Array elements are unique")
    }
    else
        console.log("Array elemets are not unique")
}

//2.Given an array of numbers. Find the sum of numbers’ quadratic which are even.

function sumOfQuadraticEvens(arr){
    let sum = 0;
    let len = arr.length;
    for(let i = 0; i < len; i++){
        let quad = Math.pow(arr[i],2);
        if(quad % 2 === 0){
            sum += quad;
        }
    }
    return sum;
}

//3.Check whether string is palindrome, or not.

//first option

function palindrome(str) {
 let strRe = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(strRe, '');
 let len = str.length;
 for (let i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}

//second option

function palindromeWithRegExp(str) {
  let re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

//4. Given a word and a list of possible anagrams, select the correct sublist.
//given values str = "listen"; arr = ["banana", "google", "inlets","enlists"], function returns: ["inlets"]
//given values str = "pencil"; arr = ["licnep", "circular", "pupil","nilcpe"], function returns: ["licnep", "nilcpe"]

function possibleAnagrams(str,arr){
    let len = arr.length;
    let anagramArr = [];
    for(let i = 0; i < len; i++){
        if(anagrams(str,arr[i])){
            anagramArr.push(arr[i]);
        }
    }
return anagramArr;
}

function anagrams(str1, str2) {  
        let found;  
        str1 = str1.replace(/[^\w]/g, '').toLowerCase()
        str2 = str2.replace(/[^\w]/g, '').toLowerCase()
        if (str1.length !== str2.length) {
            found = false;
            return found
        }
        let arr2 = str2.split("")
        for (let char of str1 ){ 
            if (!arr2.includes(char)) {
                found = false;
                return found;
                break;
            } else {
                arr2.splice(arr2.indexOf(char), 1)
            }
        }
        found = true;
        return found;

    }

