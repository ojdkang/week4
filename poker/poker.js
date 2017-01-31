// DO NOT CHANGE THE CODE BETWEEN HERE AND LINE 30

// function to shuffle (randomize the order of) an array
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns something representing a deck of cards... try it in the console, you'll see
// e.g. window.getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END DO NOT CHANGE CODE


$(function() {

  $(".deal").on("click", function(event) {
    event.preventDefault()
    // var getRandomInt = function(min, max) {
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // }

    var getuniquedeck = []
    Array.prototype.push.apply(getuniquedeck, getDeck().shuffle())

    var rand1=getuniquedeck[0]
    var rand2=getuniquedeck[1]
    var rand3=getuniquedeck[2]
    var rand4=getuniquedeck[3]
    var rand5=getuniquedeck[4]

    var link1 = "http://golearntocode.com/images/cards/"+ rand1 + ".png";
    var link2 = "http://golearntocode.com/images/cards/"+ rand2 + ".png";
    var link3 = "http://golearntocode.com/images/cards/"+ rand3 + ".png";
    var link4 = "http://golearntocode.com/images/cards/"+ rand4 + ".png";
    var link5 = "http://golearntocode.com/images/cards/"+ rand5 + ".png";

    // var rand1=getRandomInt(0,51);
    // var rand2=getRandomInt(0,51);
    // var rand3=getRandomInt(0,51);
    // var rand4=getRandomInt(0,51);
    // var rand5=getRandomInt(0,51);
    //
    // var link1 = "http://golearntocode.com/images/cards/"+ window.getDeck()[rand1] + ".png";
    // var link2 = "http://golearntocode.com/images/cards/"+ window.getDeck()[rand2] + ".png";
    // var link3 = "http://golearntocode.com/images/cards/"+ window.getDeck()[rand3] + ".png";
    // var link4 = "http://golearntocode.com/images/cards/"+ window.getDeck()[rand4] + ".png";
    // var link5 = "http://golearntocode.com/images/cards/"+ window.getDeck()[rand5] + ".png";


    $("#c1").attr("src", link1)
    $("#c2").attr("src", link2)
    $("#c3").attr("src", link3)
    $("#c4").attr("src", link4)
    $("#c5").attr("src", link5)
  })

})
