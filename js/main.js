console.log('pokemon game has finished loading...');

const cards = [
    {
      name: "Bulbasaur",
      damage: 60
    }, {
      name: "Caterpie",
      damage: 40
    }, {
      name: "Charmander",
      damage: 60
    }, {
      name: "Clefairy",
      damage: 50
    }, {
      name: "Jigglypuff",
      damage: 60
    }, {
      name: "Mankey",
      damage: 30
    }, {
      name: "Meowth",
      damage: 60
    }, {
      name: "Nidoran - female",
      damage: 60
    }, {
      name: "Nidoran - male",
      damage: 50
    }, {
      name: "Oddish",
      damage: 40
    }, {
      name: "Pidgey",
      damage: 50
    }, {
      name: "Pikachu",
      damage: 50
    }, {
      name: "Poliwag",
      damage: 50
    }, {
      name: "Psyduck",
      damage: 60
    }, {
      name: "Rattata",
      damage: 30
    }, {
      name: "Squirtle",
      damage: 60
    }, {
      name: "Vulpix",
      damage: 50
    }, {
      name: "Weedle", 
      damage: 40
    }
  ];

const game = {
    deck: [],
    cardsDealt: [],
}

const p1 = {
    name: 'Eggbert',
    hand: [],
    score: 0,
    roundsWon: 0,
    cardHistory: [],
    cssRow: '.main',
    // playCard (numCard) {
    //     checkDmg()
    // }
}
const p2 = {
    name: 'AI - Random',
    hand: [],
    score: 0,
    roundsWon: 0,
    cardHistory: [],
    cssRow: '.second',
}


const setDeck = () => {
    for (let i = 0; i < 10; i++) {
        let ranNum = Math.round(Math.random() * (cards.length - 1));
        game.deck.push(cards[ranNum]);
        game.cardsDealt.push(cards[ranNum]);
        $('#announcer').text(`The Deck is shuffled! You may draw cards now...`);
        cards.splice(ranNum, 1);
    }
    deal(p1);
    deal(p2);
    console.log(`Let the Games Begin!!!!`);
}

const deal = (player) => {
    for (let i = 0; i < 3; i++){
        
        let ranNum = Math.round(Math.random() * (game.deck.length -1));
        let theCard = game.deck[ranNum];
          const theCardsInHand = $('<img>');  // setting a new img element
          theCardsInHand.attr('src', 'images/card-back.jpg'); // applying the image to it
          theCardsInHand.appendTo(player.cssRow); // applying where the image will go
        player.hand.push(theCard);
        player.cardHistory.push(theCard);
        console.log(`${player.name} drew a ${theCard.name}`);
        game.deck.splice(ranNum, 1);
        //console.log(deck);

    }
    
}

const checkDmg = (player1, player2) => {
    for (let i = 0; i < 3; i++) {
        //let ranNum = Math.round(Math.random() * (player2.hand.length - 1);
        let dmg1 = player1.hand[i].damage;
        let dmg2 = player2.hand[i].damage;
        const $spanP1 = $('<span/>').text(`${player1.name} played a ${player1.hand[i].name} and did ${dmg1} damage! `)//console.log(`${player1.name} played a ${player1.hand[i].name} and did ${dmg1} damage!`);
        const $spanP2 = $('<span/>').text(`${player2.name} played a ${player2.hand[i].name} and did ${dmg1} damage! `)//console.log(`${player2.name} played a ${player2.hand[i].name} and did ${dmg2} damage!`);
        $('.announcer').append($spanP1);
        $('.announcer').append($spanP2);
        
        if (dmg1 > dmg2) {
            console.log(`${player1.name} got a point!`);
            player1.score++
            //return p1Score;
        } else if (dmg1 < dmg2) {
            console.log(`${player2.name} got a point!`)
            player2.score++
            //return p2Score;
        } else {
            console.log(`its a tie!!`)
            //return tie;
        }
    }
    console.log(`${player1.name.toUpperCase()} score: ${player1.score}, ${player2.name.toUpperCase()} score:${player2.score}`);
    if (player1.score > player2.score) {
        const $divAnnounce = $('<div/>').text(`${player1.name} has won!`);
        $('.wrapper').append($divAnnounce);
        player1.roundsWon++;
        $('.scoreBoard').text(`${player1.name.toUpperCase()} ROUNDS WON:${player1.roundsWon} ||| ${player2.name.toUpperCase()} ROUNDS WON:${player2.roundsWon}`);
        player1.score = 0;
        player2.score = 0;
    } else if (player1.score<player2.score) {
        const $divAnnounce = $('<div/>').text(`${player2.name} has won!`);
        player2.roundsWon++;
        $('.scoreBoard').text(`${player1.name.toUpperCase()} ROUNDS WON:${player1.roundsWon} ||| ${player2.name.toUpperCase()} ROUNDS WON:${player2.roundsWon}`);
        player1.score = 0;
        player2.score = 0;
    } else {
        const $divAnnounce = $('<div/>').text(`It's a tie!!!`);
        $('.scoreBoard').text(`${player1.name.toUpperCase()} ROUNDS WON:${player1.roundsWon} ||| ${player2.name.toUpperCase()} ROUNDS WON:${player2.roundsWon}`);
        player1.score = 0;
        player2.score = 0;
    }
}

const gameReset = () => {
    p1.hand = [];
    p2.hand = [];
    game.deck = [];
    console.log(`${p1.name} has ${p1.hand.length} cards`);
    console.log(`${p2.name} has ${p2.hand.length} cards`);
    while (game.cardsDealt.length > 0) {
        let i = 0;
        cards.push(game.cardsDealt[i]);
        console.log(`${game.cardsDealt[i].name} was shuffled back in the deck.`)
        game.cardsDealt.splice(game.cardsDealt[i], 1);
        i++;
        
    }
    console.log("number of cards not reshuffled: " + game.cardsDealt.length);
    console.log(`number of cards left in deck ${game.deck.length}`);
    console.log(`RESHUFFLINGGG!!`);
    setDeck();
}

setDeck();
checkDmg(p1, p2);