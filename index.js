const { LVAL_TYPES } = require('@babel/types');
var fs = require('fs')
var Letterlist = fs.readFileSync('wordlist.txt', 'utf-8').split('\n');

var Counter = 0;

const sortString = (Letter) => {
    return Letter.split('').sort().join("")
}

function AnagramSearch(Word) {
    if(!Letterlist || !isNaN(Letterlist)){
        throw new Error('ArgumentNotValid')
    }
    var anagram = {};
    var SortedWord;
    Word.forEach(function(Letter){
        SortedWord = sortString(Letter);
        if(anagram.hasOwnProperty(SortedWord)){
            anagram[SortedWord].unshift(Letter);
        }
        else{
            anagram[SortedWord] = [Letter];
            Counter++
        }
    });
        return anagram;
}

(function runner(){
    console.time('Time: ')
    AnagramSearch(Letterlist)
    console.log('Anagrams Found: ' + Counter)
    console.timeEnd('Time: ')
})();

module.exports = AnagramSearch;