///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

// 1: 
// new Set takes out the duplicate values, and that's wrapped in the new array of the spread operator 
const events = [...new Set(gameEvents.values())];
console.log(events);
// Array(4) [ "⚽️ GOAL", "🔁 Substitution", "🔶 Yellow card", "🔴 Red card" ]
// ​0: "⚽️ GOAL"
// ​1: "🔁 Substitution"
// ​2: "🔶 Yellow card"
// ​3: "🔴 Red card"
// ​length: 4

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
    // [FIRST HALF] 17: ⚽️ GOAL 
    // [FIRST HALF ]36: 🔁 Substitution 
    // [SECOND HALF ]47: ⚽️ GOAL 
    // [SECOND HALF ]61: 🔁 Substitution 
    // [SECOND HALF ]69: 🔴 Red card 
    // [SECOND HALF ]70: 🔁 Substitution 
    // [SECOND HALF ]72: 🔁 Substitution 
    // [SECOND HALF ]76: ⚽️ GOAL 
    // [SECOND HALF ]80: ⚽️ GOAL 
    // [EXTRA TIME] 92: 🔶 Yellow card
}