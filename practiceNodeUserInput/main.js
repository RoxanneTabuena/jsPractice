/* 
This is a premade project from codeacademy called 'Find Your Hat'
The following steps were taken to enhance my knowledge of user input:

1.  Your project is centered on a Field class. This and the following tasks will describe how the class should function at a high level, 
    and it will be up to you to figure out the implementation in code. As you go, test your code by creating instances of the class and calling its methods.

    The Field constructor should take a two-dimensional array representing the “field” itself.
    A field consists of a grid containing “holes” (O) and one “hat” (^). We use a neutral background character (░) 
    to indicate the rest of the field itself. The player will begin in the upper-left of the field, and the player’s path is 
    represented by *.
        *░O
        ░O░
        ░^░

    Your class should take a single argument representing the field:
        const myField = new Field([
        ['*', '░', 'O'],
        ['░', 'O', '░'],
        ['░', '^', '░'],
        ]);

2.  Give your Field class a .print() method that prints the current state of the field. 
    You can choose to format this however you want, but it will be much easier to play
    the game if you print out a string representation of the board instead of the raw array.

3.  Your game should be playable by users. In order to facilitate this, build out the following behavior:

    When a user runs main.js, 
    they should be prompted for input and be able to indicate which direction they’d like to “move”.
    After entering an instruction, the user should see a printed result of their current field map 
    with the tiles they have visited marked with *. They should be prompted for their next move.
    This should continue until the user either:

        Wins by finding their hat.
        Loses by landing on (and falling in) a hole.
        Attempts to move “outside” the field.
        When any of the above occur, let the user know and end the game.
*/
const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(fieldArray){
        this._field = fieldArray
        this._position = this.findPosition()
    }


    print(){
        let fieldString = ''
        this._field.forEach(row => { 
            let rowString = ''
            row.forEach(item =>{
                rowString+= item
            })
            fieldString += rowString + '\n'
        })
        return fieldString.slice(0, -1);
    }

    findPosition(){
        let field = this._field
        let row = field.map(row => {
            return row.includes('*')
        }).findIndex(result => {
            return result === true
        })
        let col = field[row].findIndex(item =>{
            return item === '*'
        })
        return { row: row, col: col}
    }
    
    findSpot(){
        let position = this._position
        const spot = this._field[position.row][position.col]
        return spot
    }

    validateMove(move){
        let newCoords = {...this._position};
        const limit = this._field.length-1
        move === 'u' ? newCoords.row -= 1 :
        move === 'd' ? newCoords.row += 1 :
        move === 'l' ? newCoords.col -= 1 :
        move === 'r' ? newCoords.col += 1 :
        newCoords = false
        return !newCoords ?`invalid move\n type u for up. \ntype d for down \ntype r for right \ntype l for left\n` :
        newCoords.row < 0 || newCoords.row > limit ||
        newCoords.col < 0 || newCoords.col > limit ?
        'You are attempting to move off map, please select a different move' :
        'Move accepted'
    }

    updateField(){
        const position = this._position
        let field = this._field
        field[position.row][position.col] = '*'
        this._field = field
    }

    updatePosition(move){
        move === 'd' ? this._position.row += 1 :
        move === 'u' ? this._position.row -= 1 :
        move === 'r' ? this._position.col += 1 :
        this._position.col -= 1
    }
}

let myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
    ]);

let gameOver = false;
let field = myField.print();
let move;
console.log(`You are but a * in a field of ░.\nThis game is a quest to find your ^.`)    
console.log(`type u for up. \ntype d for down \ntype r for right \ntype l for left\n`)
while(gameOver === false){
    console.log(myField.print())
    move = prompt(`Enter a move:`)
    let validateMove = myField.validateMove(move);
    while (validateMove !== 'Move accepted'){
        console.log(validateMove)
        console.log(myField.print())
        move = prompt(`Enter a move:`)
        validateMove = myField.validateMove(move)
    }
    console.log(validateMove)
    myField.updatePosition(move);
    const spot = myField.findSpot();
    console.log(spot)
    if(spot === '░'){
        myField.updateField()
    }else if (spot === 'O'){
        console.log(`You have fallen into a O. Game Over =(`)
        gameOver = true
    }else if (spot === '^'){
        console.log(`You have found your ^! Congratulations!`)
        gameOver = true
    }
}