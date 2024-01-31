

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
  let stringArr = arr.join('')
  let lowerCase = stringArr.toLowerCase()
  let lowerArr = lowerCase.split('')
  if(!lowerArr.includes(searchTerm)){
    return undefined
  }
  else{
  for(let i = 0; i < lowerArr.length; i++){
    if(lowerArr[i] === searchTerm){
      answer.push(i)
    }
  }  
  }
  return answer
}

module.exports = { linearSearch, globalLinearSearch };
