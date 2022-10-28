/**
 * @param {String | Number []} text
 */
function combinator(text) {
    var result = '';
    text.map(function (text, index) {
        result += (index ? ' ' : '') + text;
    });
    return result;
}
var text1 = [1, 'data', '3', 'result'];
var text2 = ['Bejo', 'has', 4, 'sport', 'car'];
console.log(combinator(text1));
console.log(combinator(text2));
