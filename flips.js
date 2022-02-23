// Import the coinFlip function from your coin.mjs file
import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.js";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// Call the coinFlip function and put the return into STDOUT
const args = require('minimist')(process.argv.slice(2)) 

args['number']

const flips = args.number || 1
const totalFlips = coinFlips(flips)
console.log(totalFlips)
console.log(countFlips(totalFlips))