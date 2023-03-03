# ▲ ▶ ▼ ◀ (ADVC)

ADVC is a simple puzzle game where users solve sequences by entering for buttons, ▲ ▶ ▼ ◀. Additional symbols add complexity to the riddles. After solving puzzles, a bit of text can be displayed to give an overarching story.

1. [▲] [▼] [◀] [▶] [R]
2. [▼] [▼] [▲] [▲] [▶]

___

Rätselconfig:
{
  initText: "Lorem Ipsum",
  completionText: "Lorem Ipsum",
  sorting: "3124",
  maxInputs: 10,
  rows: [
    ["UP", "DOWN", "LEFT", "RIGHT", "REPEAT"],
    ["DOWN", "DOWN", "UP", "UP", "RIGHT"]
  ],
  solution: "UPDOWNLEFTRIGHTUPUPDOWN"
}

Possible values:
- UP
- DOWN
- LEFT
- RIGHT
- REPEAT: Sets row iterator back to zero
- BACK: -1 to row iterator, last value has to be entered twice
- FORWARD: +1 to row iterator, next value is skipped

Im Frontend können später noch die Reihenfolgen der Reihen vertauscht werden, um das Spiel zusätzlich zu erschweren:

2. [▼] [▼] [▲] [▲] [▶]
1. [▲] [▼] [◀] [▶] [R]

<!-- Später vielleicht Await = auf reihe warten, werte transformieren z.b. UP zu RIGHT -->

___

Um das Rätsel zu lösen, läuft das Löseprogramm über die Reihen.
Bei jedem arrayzugriff wird der iterator für die Reihe erhöht. D.h. werden bei drei Reihen die Werte wie folgt ausgelesen:

Array1: 0,
Array2: 0,
Array3: 0,
Array1: 1,
Array2: 1,
Array3: 1,
Array1: 2,
Array2: 2
...

Das macht das Löseprogramm so lange, bis die benötigtw Anzahl an Zeichen erreicht wurde.

Löseprogramm state:
rows: [
  {
    iterator: 0
  },
  {
    iterator: 0
  }
]

___

Rätselstate
{
  numberOfInputs: 0,
  state: "UPDOWNUP",
}

___

Views:
- Title
- Game View
- Level select
- About
- Options