## Deklarativ vs Imperativ

```sqrt(x) := y : >= 0, y * y = x```

Die Wurzel aus x wird definiert als eine Zahl y, für die gilt, dass y größer oder gleich null ist und y * y gleich x ergibt. Mathematisch ist das vollkommen richtig. Allerdings für Computerfunktionen wenig hilfreich, weil ich nicht angegeben habe, wie ich zum Ergebnis komme.

Wie komme ich zur Wurzel? :
### Das Newtonsche Iterationsverfahren

sqrt(16)
Teiler: 1, 2, 4, 8, 16

 1. Wurzel raten: sqrt(16) === 1
 2. Prüfen:       1 * 1 = 1            => nein
 3. Gegenstück:   16 / 1 = 16
 4. Mittelwert:   (1 + 16) / 2         => 8,5
 5. Prüfen:       8,5 * 8,5 = 72,25    => nein
 6. Gegenstück:   16 / 8,5 = 1,88...
 7. Mittelwert    (8,5 + 1,88) / 2     => 5,19
 8. Prüfen:       5,19 * 5,19          => nein
 9. Gegenstück:   16 / 5,19 = 3,0828...
10. Mittelwert:   (5,19 + 3,0828) / 2  => 4,1364

... Man macht das so lange, bis das Ergebnis "gut genug" ist. 

## Linear Recursion and Iteration
[factorial function](https://www.cuemath.com/numbers/factorial/):
n! = n * (n - 1) * (n - 2) ... 3 * 2 * 1
= n * (n-1)!
=> Die Fakultät einer ganzen Zahl ist die Funktion, die die Zahl mit jeder natürlichen Zahl darunter multipliziert.
=> n! entspricht "n factorial" und bedeutet:
n! = 1 * 2 * 3 * ... * n = 

Um die Fakultät einer Zahl zu finden, multipliziere diese Zahl mit der Fakultät der vorherigen Zahl. Beispiel: Um die Zahl von Fakultät 6 also 6! zu ermittelt multipliziert man 6 mit 120 (also der Fakultät von 5) = 720. 
=> n! = n * (n - 1)!
