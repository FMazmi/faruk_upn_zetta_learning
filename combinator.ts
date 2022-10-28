/**
 * @param {String | Number []} text
 */
 function combinator(text) {
    let result = '';
    text.map((text, index) => {
        result += (index ? ' ' : '') + text;
    });
    return result;
}
const text1 = [1, 'data', '3', 'result'];
const text2 = ['Bejo', 'has', 4, 'sport', 'car'];
console.log(combinator(text1));
console.log(combinator(text2));