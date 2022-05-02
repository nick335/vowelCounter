const btnEl=document.querySelector('.btn-el')
const inputEl=document.querySelector('.input-el')


//count Vowel.....
btnEl.addEventListener('click', function(params) {
let output='';
let wordString=inputEl.value;
let vowelCount = vowelCheck(wordString)
output = `The text contains ${vowelCount} vowels`
alert(output);
// ALTERNATE METHOD
// let vowelString=""
// let letter_e="e"
// let letter_E="E"
// let letter_A="A"
// let letter_a="a"
// let letter_I="I"
// let letter_i="i"
// let letter_o="o"
// let letter_O="O"
// let letter_U="U"
// let letter_u="u"
// vowelCheck(wordString, letter_A, letter_E,letter_I,letter_O,letter_U,letter_a, letter_e, letter_i, letter_o, letter_u)
})

function vowelCheck(word) {
 let count=0
 for (let i = 0; i < word.length; i++) {
 if('aeiou'.includes(word[i].toLowerCase())){
  count++
 }
 }
 return count
}
//ALTERNATE METHOD
// function vowelCheck(word, letter_A, letter_E,letter_I,letter_O,letter_U,letter_a, letter_e, letter_i, letter_o, letter_u){
//  let count = 0
//  for (let i = 0; i < word.length; i++) {
//  if (word.charAt(i) === letter_A || word.charAt(i) === letter_E || word.charAt(i) === letter_I || word.charAt(i) === letter_O || word.charAt(i) === letter_U || word.charAt(i) === letter_a || word.charAt(i) === letter_e || word.charAt(i) === letter_i || word.charAt(i) === letter_o || word.charAt(i) === letter_u ){
//   count++
//  }
//  }
//  console.log(count)
// }