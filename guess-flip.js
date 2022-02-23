import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.js";
// Call the coinFlip function and put the return into STDOUT
const args = require('minimist')(process.argv.slice(2)) 

args['call']

const call = args.call
if(call === 'heads' | call === 'tails'){
    console.log(flipACoin(call))
} else {
    console.error();
}
totalFlips = coinFlips(flips)
console.log(totalFlips)
console.log(countFlips(totalFlips))