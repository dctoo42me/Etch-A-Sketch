//create a grid wrapper variable
let grid = document.querySelector('.grid-wrapper');
let gridNum = askNum();

function askNum() {
    let num = prompt('How many Squares per row would you like? ');
    if(num > 100) {
        prompt('Limit of 100. Please enter a lower number. ');
    }
    return num;
}


//create a function that adds rows of squares
function addRowOfSquares(squares) { 
    let numOfSquares = squares;
    let numOfRows = squares;
    let j = 0;
    while(j < numOfRows) { 
        let row = document.createElement('div');
        row.classList.add('row');
        for(i=0; i<numOfSquares; i++) {
            console.log('create square: ', i);
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
            console.log('add square to row: ', i);
            square.addEventListener('mouseleave', () => {
            square.classList.add('color');
            console.log('mouse left');
            })
        }
        grid.appendChild(row);
        console.log('add row to grid', i);
        console.log('row number: ',numOfRows);
        numOfRows--;
    }
}
addRowOfSquares(gridNum);
