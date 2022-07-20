// Create Deck

const suits = ["heart", "diamond", "spade", "club"];
const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
const deck = []


suits.forEach(suit => {
    values.map(value => deck.push({suit, value}))
})

console.log (deck)

// Shuffle + Deal Deck


function shuffle (deck) {
    
    const playerOne = [];
    const playerTwo = [];

while (deck.length > 0){
    const random1 = Math.floor(Math.random() * deck.length);
    const getItem1 = deck.splice(random1, 1);
    const random2 = Math.floor(Math.random() * deck.length);
    const getItem2 = deck.splice (random2, 1);
    playerOne.push (getItem1);
    playerTwo.push (getItem2);
}
return ( [playerOne.flat (), playerTwo.flat ()])
}
console.log (shuffle (deck));




// Play


// function updateScore() {
// console.log(`
// Player One Score: ${playerOneScore}
// Player Two Score: ${playerTwoScore}
// `)
// }





// console.log (playerOneCards)

// // Determine Winner, Keep Score

// function roundWinner(p1Card, p2Card, p1Score, p2Score) {
//     var p1Index = cardValues.indexOf(p1Card.value);
//     var p2Index = cardValues.indexOf(p2Card.value);
//     if (p1Index > p2Index) {
//         updateScore(p1Score, p2Score);
//         p1Score = p1Score++;
//         p2Score =  p2Score--;
//         return 'Player 1 wins this round.';
//     }
//     if (p2Index > p1Index) {
//         updateScore(p2Score, p1Score);
//         p2Score = p2Score++;
//         p1Score = p1Score--;
//         return 'Player 2 wins this round.';
//     }
//     else {
//         return 'It is a tie. Flip again.'
//     };}
