$(document).ready(function(){
  var balance = 20
  while (balance > 0){
    var bet = prompt('You have $'+ balance + '. Please place a bet between $5 and $10.')
    if (bet >= 5 && bet <= 10){
      var number = Math.floor(Math.random()* 9 + 1)
      console.log(number)
      var guess = prompt('Please guess a number between 1 and 10, inclusive:') * 1
      if (number == guess){
        balance += (bet * 2)
        alert('Winner Winner! You guessed the right number')
      }else if ((guess + 1 === number) || (guess - 1 === number)){
        alert('So close! You get to keep your bet but, the correct answer was ' + number)
      }else{
        alert('LOSER! The correct answer was ' + number)
        balance -= bet
      };
    }else{
      alert('You bet an invalid wager! Try again!')
    };
  };
  alert('Game over! You lost all your money!')
});