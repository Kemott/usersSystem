const functions = require('../functions');

describe('Skrypty są prawidłowo usuwane z tekstu', () => {
    test('Prosty skrypt jest usuwany', () => {
        let text = 'Test <script>console.log("It works!")</script> usuwania skryptów';
        let endText = 'Test usuwania skryptów';
        expect(functions.stripMailTextsFromScripts(text)).toBe(endText);
    });
    test('Skrypt z src jest usuwany', () => {
        let text = 'Test <script src="http://futuristic.com.pl"></script> usuwania skryptów';
        let endText = 'Test usuwania skryptów';
        expect(functions.stripMailTextsFromScripts(text)).toBe(endText);
    });
    test('Skrypt wielolinijkowy jest usuwany', () => {
        let text = 'Test <script>console.log("It works!"); \n' +
        'Nowa linia</script> usuwania skryptów';
        let endText = 'Test usuwania skryptów';
        expect(functions.stripMailTextsFromScripts(text)).toBe(endText);
    });
    test('Wiele skryptów jest usuwanych z tekstu', () => {
        let text = 'Test <script>console.log("It works!"); \n' +
        'Nowa linia</script> usuwania <script src="test.js"></script>skryptów';
        let endText = 'Test usuwania skryptów';
        expect(functions.stripMailTextsFromScripts(text)).toBe(endText);
    });
});