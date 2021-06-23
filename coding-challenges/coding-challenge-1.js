const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1. create player1 player2 arrayz
const [players1, players2] = game.players;

//2. create 1 variable goalkeeper, then array of remaining players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// Neuer
// Array(10) [ "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski" ]

//3. creat array of all players
const allPlayers = [...players1, ...players2]
console.log(allPlayers);
// Array(22) [ "Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", … ]

//4. create new array, player1 and add other players
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

//5. nested destructuring
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2); // 1.33 3.25 6.5

//6. 
const printGoals = function () {

}
