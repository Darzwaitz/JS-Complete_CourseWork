///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: β½οΈ GOAL

GOOD LUCK π
*/

const gameEvents = new Map([
    [17, 'β½οΈ GOAL'],
    [36, 'π Substitution'],
    [47, 'β½οΈ GOAL'],
    [61, 'π Substitution'],
    [64, 'πΆ Yellow card'],
    [69, 'π΄ Red card'],
    [70, 'π Substitution'],
    [72, 'π Substitution'],
    [76, 'β½οΈ GOAL'],
    [80, 'β½οΈ GOAL'],
    [92, 'πΆ Yellow card'],
]);

// 1: 
// new Set takes out the duplicate values, and that's wrapped in the new array of the spread operator 
const events = [...new Set(gameEvents.values())];
console.log(events);
// Array(4) [ "β½οΈ GOAL", "π Substitution", "πΆ Yellow card", "π΄ Red card" ]
// β0: "β½οΈ GOAL"
// β1: "π Substitution"
// β2: "πΆ Yellow card"
// β3: "π΄ Red card"
// βlength: 4

// 2:
gameEvents.delete(64);
// console.log(gameEvents);

// 3:
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes"`); // An event happened, on average, every 9.2 minutes"

// 4:
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    const extraTime = '[ EXTRA TIME ]';

    // if (min >= 90) {
    //     console.log(`${extraTime} ${min}: ${event}`);
    // } else {
    //     console.log(`[ ${half} HALF ] ${min}: ${event}`);
    // }
    const output =
        console.log(min >= 90 ? `${extraTime} ${min}: ${event}` : `[ ${half} HALF ] ${min}: ${event}`);
    // [FIRST HALF] 17: β½οΈ GOAL 
    // [FIRST HALF ]36: π Substitution 
    // [SECOND HALF ]47: β½οΈ GOAL 
    // [SECOND HALF ]61: π Substitution 
    // [SECOND HALF ]69: π΄ Red card 
    // [SECOND HALF ]70: π Substitution 
    // [SECOND HALF ]72: π Substitution 
    // [SECOND HALF ]76: β½οΈ GOAL 
    // [SECOND HALF ]80: β½οΈ GOAL 
    // [EXTRA TIME] 92: πΆ Yellow card
}