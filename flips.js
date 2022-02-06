// Import the coinFlip function from your coin.mjs file
import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.js";
// Call the coinFlip function and put the return into STDOUT
const args = require('minimist')(process.argv.slice(2)) 

args['flips']

const flips = args.flips || 1
totalFlips = coinFlips(flips)
console.log(totalFlips)
console.log(countFlips(totalFlips))