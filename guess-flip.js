import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.js";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// Call the coinFlip function and put the return into STDOUT
const args = require('minimist')(process.argv.slice(2)) 


args['call']

const call = args.call
if(call === 'heads' | call === 'tails'){
    console.log(flipACoin(call))
} else {
    console.error("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]")
}
