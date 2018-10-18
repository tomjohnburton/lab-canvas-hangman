
class HangmanCanvas {
  constructor(secretWord){
    this.secretWord = secretWord;
    this.canvas = document.getElementById('hangman')
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.width = 60
  }

createBoard () {
  this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);


};

drawLines () {

  for (var l = 0 ; l < this.secretWord.length ; l++){
    this.ctx.beginPath();
    this.ctx.moveTo(600 + l*this.width, 700);
    this.ctx.lineTo(600+ (l+1)*this.width-10, 700);

    this.ctx.stroke();
  }



};

writeCorrectLetter (index) {
  var str = this.secretWord;
  var indices = [];
    for(var i=0; i<str.length;i++) {
    if (str[i] === index) indices.push(i);
}
console.log(indices)

for (var ind = 0; ind < indices.length; ind ++){
  console.log(ind)
  this.ctx.font = '40px sans-serif'
  console.log(indices[ind])
  this.ctx.fillText(this.secretWord[indices[ind]],610 + indices[ind]*this.width, 680)
}




};

writeWrongLetter (letter, errorsLeft) {
  let g = 0
  for (var i = 0 ; i < hangman.letters.length; i++){
    if (!letter.includes(hangman.guessedLetter[i])){
      this.ctx.font = '40px sans-serif'
      this.ctx.fillText(hangman.letters[i], 650+ g*60, 400)
      g++

  }

  }

};

drawHangman (shape) {

  


};

gameOver () {

};

winner () {

};
  }

var hangManDraw = [function(){
  hangmanCanvas.ctx.beginPath();
  hangmanCanvas.ctx.moveTo(100,700);
  hangmanCanvas.ctx.lineTo (200,700)
  hangmanCanvas.ctx.stroke()
},function(){
  hangmanCanvas.ctx.beginPath();
  hangmanCanvas.ctx.moveTo(200,700);
  hangmanCanvas.ctx.lineTo (150,650)
  hangmanCanvas.ctx.stroke()
},function(){
    hangmanCanvas.ctx.beginPath();
    hangmanCanvas.ctx.moveTo(150,650);
    hangmanCanvas.ctx.lineTo (100,700)
    hangmanCanvas.ctx.stroke()}
,function(){
  hangmanCanvas.ctx.beginPath();
  hangmanCanvas.ctx.moveTo(150,650);
  hangmanCanvas.ctx.lineTo (150,300)
  hangmanCanvas.ctx.stroke()}]