// Antwort: Bei kleinen Zahlen ist folgendes Problem. Wir haben definiert, dass wir bei einer Abweichung von 0.001 gut genug sind. Bei sehr kleinen Zahlen wie 0.000016 o.Ä. ist diese Grenze einfach viel zu grob. Um das Ergebnis genauer zu machen müssen wir einfach noch mehr nullen bei isGoodEnough einfügen. Bei großen Zahlen: Weil die Genauigkeit an Nachkommastellen bei steigender Größe von Fließkommazahlen abnimmmt kann es sein, dass bei jedem Iterationsschritt wieder auf die gleiche Zahl gerundet wird, bis irgendwann einfach der Verfügbare Raum für Fließkommazahlen erreicht bzw. überschritten ist. isGoodEnough darf keine Hardcodierte Genauigkeit haben sondern die Genauigkeit muss von der Größe der übergebenen Zahl abhängen.

//function sqrtIterative (guess, x) {
//  return isGoodEnough(guess, x) ? 
//    guess :
//    sqrtIterative(improve(guess, x), x);
//}

function sqrtIterative (guess, x) {
  return isGoodEnough(improve(guess, x), guess) ?
  guess :
  sqrtIterative(improve(guess, x), x);
}

//function isGoodEnough (guess, x) {
//  return abs(square(guess) - x) < 0.001;
//}

function isGoodEnough (guess, previousGuess) {
  return abs((guess - previousGuess) / guess) < 0.001;
}

function square (x) {
  return x * x;
}

function abs (x) {
  return x >= 0 ? x : -x;
}

function improve (guess, x) {
  return average(guess, x / guess);
}

function average (x, y) {
  return (x + y) / 2;
}

function sqrt (x) {
  return sqrtIterative(1, x);
}

console.log(sqrt(0.16));
console.log(sqrt(0.0016));
console.log(sqrt(0.000016));
console.log(sqrt(0.00000016));
console.log(sqrt(20_000_000_000_000));