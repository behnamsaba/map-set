//first
const firstSet = new Set([1,1,2,2,3,4]);
console.log(firstSet);
//second

const secondSet = [...new Set("referee")].join("");
console.log(secondSet);

//third

let m = new Map();
console.log(m.set([1,2,3], true));
console.log(m.set([1,2,3], false));


//hasDuplicate

const hasDuplicate = (arr) => {
    const arrSet = new Set(arr);
    arrSet.size !== arr.length ? true : false;
}



//vowelCount

function isVowel(char){
  return "aeiou".includes(char);
}

function vowelCount(str){
  const vowelMap = new Map();
  for(let char of str){
    let lowerCaseChar = char.toLowerCase()
    if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
            vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        }else{
        vowelMap.set(lowerCaseChar, 1);
        }
    }
  }
  return vowelMap;
}