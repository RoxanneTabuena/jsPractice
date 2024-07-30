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

5.  Add a .generateField() method to your Field class. This doesn’t need to be tied to a particular instance, 
    so make it a static method of the class itself.
    This method should at least take arguments for the size of the field, and it should return a randomized two-dimensional 
    array representing the field with a hat and one or more holes. In our solution, we added a second percentage argument 
    used to determine what percent of the field should be covered in holes.
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

    game(){
        let gameOver = false;
        let move;
        console.log(`You are but a * in a field of ░.\nThis game is a quest to find your ^.`)    
        console.log(`type u for up. \ntype d for down \ntype r for right \ntype l for left\n`)
        while(gameOver === false){
            console.log(this.print())
            move = prompt(`Enter a move:`)
            let validateMove = this.validateMove(move);
            while (validateMove !== 'Move accepted'){
                console.log(validateMove)
                console.log(this.print())
                move = prompt(`Enter a move:`)
                validateMove = this.validateMove(move)
            }
            console.log(validateMove)
            this.updatePosition(move);
            const spot = this.findSpot();
            if(spot === '░'){
                this.updateField()
            }else if (spot === 'O'){
                console.log(`You have fallen into a O. Game Over =(`)
                gameOver = true
            }else if (spot === '^'){
                console.log(`You have found your ^! Congratulations!`)
                gameOver = true
            }
        }
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

    testPuzzle(){
        let cellPath = {L: true, LT: true, 
                        T: true, RT: true,
                        R: true, RB: true,
                        B: true, BL: true}
        let field = [...this._field]
        let position = {...this._position}
        function geomatrix(fieldArray){
            let matrix = {}
            let row = fieldArray.length - 1 
            while(row>=0){
                let col = fieldArray.length -1
                while(col>=0){
                    matrix[`${row}_${col}`] = fieldArray[row][col]
                    col -= 1
                }
                row -= 1
            }
            return matrix
        }
        return geomatrix(this._field)
    }

    static generateField(size, holeRatio){
        if(typeof size === 'number' && typeof holeRatio === 'number'){
            if(0 > holeRatio || holeRatio > 100){
                console.log(`Holes must be an integer between 0 and 100 representing the percentage of holes you desire in your field.`)
                console.log(`Please note the one plot will always be reserved for the players starting position, and one hole will always be reserved for the players hat`)
            } else {
                let itemsRemaining = size * size 
                let holesRemaining = Math.ceil(itemsRemaining / 100 * holeRatio)
                if(holesRemaining >= itemsRemaining - 2){
                    holesRemaining = itemsRemaining - 2
                }
                let fieldArray = ['*', '^']
                while(holesRemaining>0){
                    fieldArray.push('O')
                    holesRemaining -= 1
                }
                itemsRemaining -= fieldArray.length
                while(itemsRemaining > 0){
                    fieldArray.push('░')
                    itemsRemaining -= 1
                }
                let index = fieldArray.length
                while(index > 0){
                    let randIndex = Math.floor(Math.random() * index);
                    index -= 1
                    const tempI = fieldArray[index]
                    const tempRI = fieldArray[randIndex]
                    fieldArray[index] = tempRI
                    fieldArray[randIndex] = tempI
                }
                let field = []
                while(fieldArray.length){
                    let chunk = [...fieldArray.splice(0, size)]
                    field.push(chunk)
                }
                return field
            }
        } else {
            console.log('plese enter integer amounts for size and holes to generate a field')
        }
    }
}


let myField = new Field(Field.generateField(3, 5));
myField.game()
