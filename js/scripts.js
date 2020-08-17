$(document).ready(function () {
const suits = ['spades', 'clubs', 'diamonds', 'hearts'];
const values = ['Ace', '2','3','4','5','6','7','8','9','10','jack','queen','king'];
let deck = [];
  suits.forEach(function (elementSuits)  {
    values.forEach(function (elementValues) {
      deck.push(elementValues + ' of ' + elementSuits);
      //$('#deck').append('<li>' + elementValues + ' of ' + elementSuits + '</li>');
    });
  });
  deck.forEach(function (element) {
    $('#deck').append('<li>' + element + '</li>');
  });
  

});