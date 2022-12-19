const container = document.querySelector('.container');

let drawColor = 'black';

colorPickerInput.addEventListener("input",updateFirst, false); 
/* colorPicker.addEventListener("change",watchColorPicker, false); */

function updateFirst(event) {
    setDrawColor(event.target.value);
}

window.mouseDown = false;
document.onmousedown = function() {
    console.log('mouse is pressed')
    window.mouseDown =true;
}
document.onmouseup = function() {
    console.log('mouse is no longer pressed')
    window.mouseDown = false;
}

let gridSize = 0;
createGrid(48);

function createUserGrid() {
    removeGrid();
    gridSize = prompt('Choose your grid size','24');
    createGrid(gridSize);
}

function createGrid(gridSize) {
    
    for(let i = 0; i < gridSize; i++) {
        createDiv(i,gridSize);
    }
}

function createDiv(loc,gridSize) {
    
    const rowDiv = document.createElement('div');
    rowDiv.classList = 'row';
    rowDiv.style.display = 'flex';
    rowDiv.style.gap = '0px'
    
    for(let x = 0; x < gridSize; x++) {
        const gridDiv = document.createElement('div');
        /* gridDiv.style.border = '1px solid #e3e3e3'; */
        gridDiv.style.width = '18px';
        gridDiv.style.height = '18px';
        gridDiv.classList = 'column';
        gridDiv.style.pointerEvents = 'all';

        rowDiv.appendChild(gridDiv);
    }

    container.appendChild(rowDiv);

    const divs = document.querySelectorAll('div');

    divs.forEach(div => div.addEventListener('mouseover', () =>  {
    
    if(div.classList.value == 'column' && mouseDown) {
        console.log(div.classList.value);
        /* div.style.backgroundColor = randomColor(); */
        div.style.backgroundColor = drawColor;
        } 
    }))
    divs.forEach(div => div.addEventListener('click', () =>  {
    
    if(div.classList.value == 'column') {
        console.log(div.classList.value);
        /* div.style.backgroundColor = randomColor(); */
        div.style.backgroundColor = drawColor;
        } 
    }))
}

function removeGrid() {
    const rowDivs = document.querySelectorAll('.row');
    for(let div of rowDivs) {
        container.removeChild(div);
    }
}

function clearGrid() {
    const divs = document.querySelectorAll('div');
    divs.forEach((div) => {
        if(div.classList.value == 'column') {
            div.style.backgroundColor = 'white';
        } 
    });
}

function setDrawColor(color) {
    drawColor = color;
}

const btnClear = document.querySelector(".btn.clear");
btnClear.addEventListener('click',clearGrid);

function randomColor() {
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return ` #${randColor.toUpperCase()}`
}

console.log(randomColor());

