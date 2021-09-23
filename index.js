var fs = require('fs')
var Letterlist = fs.readFileSync('wordlist.txt', 'utf-8').split('\n');

var Counter = 0;

const sortString = (Letter) => {
    return Letter.toLowerCase.split('').sort().join("")
}

function AnagramSearch(Word) {
    if(!Letterlist || !isNaN(Letterlist)){
        throw new Error('ArgumentNotValid')
    }
    var anagram = {};
    var SortedWord;
    Word.forEach(function(Letter){
        SortedWord = sortString(Letter);
        
        
    });
    

}

module.exports = AnagramSearch;