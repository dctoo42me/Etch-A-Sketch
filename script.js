//create a grid wrapper variable
let grid = document.querySelector('.grid-wrapper');
let startButton = document.querySelector('.start');
let promptNum;
function askForNum() {
    let num = prompt('How many Squares per row would you like? ');
    if(num > 100) {
        prompt('Limit of 100. Please enter a lower number. ');
    }
    console.log('local n: ', num);
    return num;
}

console.log('global n: ', askForNum);

//create a function that adds rows of squares
function addRowOfSquares(squares) { 
    grid.innerHTML = '';
    console.log('squares: ',squares);
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
            square.addEventListener('mouseover', () => {
            square.classList.add('color');
            console.log('mouse left');
            })
            square.addEventListener('touchstart', () => {
                square.classList.add('color');
                console.log('mouse left');
                })
            square.addEventListener('touchmove', () => {
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
startButton.addEventListener('click', () => {
    console.log('start pressed!');
    let num = askForNum();
    console.log('num: ',num);
    addRowOfSquares(num);
});

// startButton.addEventListener('touchend', () => {
//     console.log('start pressed!');
//     let num = askForNum();
//     console.log('num: ',num);
//     addRowOfSquares(num);
// });