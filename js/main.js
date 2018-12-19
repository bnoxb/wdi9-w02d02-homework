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
const deck = [];
const p1 = [];
const p2 = [];
const setDeck = () => {
    for (let i = 0; i < 10; i++) {
        let ranNum = Math.round(Math.random() * (cards.length - 1));
        deck.push(cards[ranNum]);
        cards.splice(ranNum, 1);
    }
}
const deal = (player) => {
    for (let i = 0; i < 3; i++){
        let ranNum = Math.round(Math.random() * (deck.length -1));
        player.push(deck[ranNum]);
        console.log(`${player} drew a ${deck[ranNum].name}`);
        deck.splice(ranNum, 1);
        console.log(deck);
    }
}
const checkDmg = (player1, player2) => {
    
}
setDeck();
deal(p1);
deal(p2);