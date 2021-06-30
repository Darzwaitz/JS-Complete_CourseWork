"use strict";
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

// 1: print all players in score array
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
    // Goal 1: Lewandowski coding-challenge-2.js:45:13
    // Goal 2: Gnarby coding-challenge-2.js:45:13
    // Goal 3: Lewandowski coding-challenge-2.js:45:13
    // Goal 4: Hummels
}

// 2: calculate the average of the odds property
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;

average /= odds.length;

console.log(average); // 3.6933333333333334

// 3: log content of object - Team & odd
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}