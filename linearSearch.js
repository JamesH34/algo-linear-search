

//searchTerm is what I'm searching for
//arr is an array that i need to search through


function linearSearch(searchTerm, arr) {
 if(arr.includes(searchTerm)){
  return arr.indexOf(searchTerm)
 }
 return undefined
  }


function globalLinearSearch(searchTerm, arr) {
  let answer = [] 
  let lowerCaseArr = arr.join('').toLowerCase().split('')
  if(!lowerCaseArr.includes(searchTerm)){
    return undefined
  }
  else{
  for(let i = 0; i < lowerCaseArr.length; i++){
    if(lowerCaseArr[i] === searchTerm){
      answer.push(i)
    }
  }  
  }
  return answer
}

module.exports = { linearSearch, globalLinearSearch };
