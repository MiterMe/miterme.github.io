var notation_title = 'Song Bie'
var abcString = `
X:2
T:${notation_title}
K:C
L:1/4
M:4/4
V:T1 clef=treble
V:B1 clef=bass
V:T1
    ge1/2g1/2c'2  | ac'g2           | g c1/2d1/2 e d1/2c1/2               | d4 |
    ge1/2g1/2c'>b | ac'g2           | g d1/2e1/2 f>b,                     | c4  |
    a c' c'2       | b a1/2b1/2  c'2 | a1/2b1/2 c'1/2a1/2 a1/2g1/2 e1/2c1/2 | d4 |
    ge1/2g1/2c'>b | ac'g2           | g d1/2e1/2 f>b,                     | c4  |]
V:B1
    C,2G,2  | F,2A,2  | G,2D2  | G,DB,D |
    C,2G,2  | F,2A,2  | G,2D2  | C,G,E,G,|
    F,2A,2  | G,2D2   | G,2D2  | G,DB,D |
    C,2G,2  | F,2A,2  | G,2D2  | C,4|]
`

// "C"GE1/2G1/2c2  | "F"AcG2           | "G"G C1/2D1/2 E D1/2C1/2               | "Dm"D4 |
// "C"GE1/2G1/2c>B | "F"AcG2           | "G"G D1/2E1/2 F>B,                     | "C"C4  |
// "F"A c c2       | "G"B A1/2B1/2  c2 | "F"A1/2B1/2 c1/2A1/2 A1/2G1/2 E1/2C1/2 | "Am"D4 |
// "C"GE1/2G1/2c>B | "F"AcG2           | "G"G D1/2E1/2 F>B,                     | "C"C4  |]

// C,G,E,G,        | F,A,CA,           | G,DB,D                                 | D,A,F,A,|
// C,G,E,G,        | F,A,CA,           | G,DB,D                                 | C,G,E,G,|
// F,A,CA,         | G,DB,D            | F,A,CA,                                | D,A,F,A,|
// C,G,E,G,        | F,A,CA,           | G,DB,D                                 | C,G,E,G,|]