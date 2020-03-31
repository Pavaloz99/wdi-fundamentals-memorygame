let cards = ['king','queen', 'king', 'queen'];
cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("user flipped " + cardTwo);

if(cardsInPlay.length === 2){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} 
	else{
		alert("Sorry, try again.");
	} 
}