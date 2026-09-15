import {writeFile} from 'fs/promises';

for(let i = 0; i < 1000000; i++){
    writeFile('big.txt', `This is line ${i}\n`, {flag: 'a'})
}