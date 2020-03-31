const palindromes = function( word ) {
    let palindrome = [];
    let word2 = removePunctuation( word );
    for (i=word2.length-1; i>=0; i--) {   
         palindrome += word2.slice(i, i + 1);
    }
    return (word2.toLowerCase() === palindrome.toLowerCase()) ? true : false;
}
const removePunctuation = function( word ) {
    let word2 = [];
    for (i=0; i<=word.length - 1; i++) {
        if (word.slice(i, i+1) != "." && word.slice(i, i+1) != "!" && word.slice(i, i+1) != "?" && word.slice(i, i+1) != " " && word.slice(i, i+1) != "," ){
        word2 += word.slice(i, i+1);
        }
    }
    return word2;

}

module.exports = palindromes