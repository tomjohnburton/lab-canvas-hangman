
class Hangman  {
  constructor(){
    this.words = ['allooo','babboo','vavoommm'];
    this.secretWord = 'allooo';
    this.letters = ['a','v','r','q'];
    this.guessedLetter = 'a';
    this.errorsLeft = 10;
  }


// Finished 
getWord() {
  var rand = this.words[Math.floor(Math.random() * this.words.length)];
  console.log(rand);
  return rand;


};



checkIfLetter(keyCode) {
  if (keyCode.charCodeAt()>= 97 && keyCode.charCodeAt()<=122 || keyCode.charCodeAt()>= 65 && keyCode.charCodeAt()<=90){
    this.letters.push(keyCode)
    return true;
  }
  return false;

};

checkClickedLetters(key) {
  if (this.letters.includes(key)){
    return false
  }
  return true;


};

addCorrectLetter(i) {

    if (this.secretWord.includes(i)){
      this.guessedLetter += i
    }

  

};

addWrongLetter(letter) {
  if (!this.secretWord.includes(letter)){
    this.errorsLeft --;
    return false
  }

};

checkGameOver() {
  if (this.errorsLeft == 0 ){
    return true
  }
  return false

};

checkWinner() {
  if (remDup(this.secretWord).length === this.guessedLetter.length && this.errorsLeft > 0){
    return true
  }
  return false
  


};

}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};

const remDup= s=> s.split("").sort().reduce((a,b)=>(a[a.length-1]!=b)?(a+b):a,"")
console.log(remDup("Rasikawef dfv dd"))

var hangman = new Hangman();
var hangmanCanvas = new HangmanCanvas('allooo');
var letter = 'alo'
hangman.getWord()
for(var i = 0; i < letter.length; i++){
 if(hangman.checkClickedLetters(letter[i])){
   hangman.addCorrectLetter(letter[i])
 } else {
   hangman.addWrongLetter(letter)
 }
}

hangman.checkGameOver();
hangman.checkWinner();