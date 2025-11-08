const parentDiv = document.getElementById("etchContainer");
let containerGrid = [];
let gridSize = 16;
let oldGridSize = gridSize;

function newGrid(gridSize, oldGridSize) {
    for (let i=0; i < (oldGridSize * oldGridSize); i++) {
        containerGrid[i].remove();
    }

    for (let i=0; i < (gridSize * gridSize); i++) {
        containerGrid[i] = document.createElement("div");
        containerGrid[i].id = "gridBox" + i;
        parentDiv.appendChild(containerGrid[i]);
        containerGrid[i].addEventListener('mouseover', () => {
            containerGrid[i].className = "sketched";
        });
    }

    oldGridSize = gridSize;
}

function newGridSize() {
    let userInput = window.prompt("New grid size: ");
    //parentDiv.childElementCount.style.width = (100/userInput);
    gridSize = userInput;
    newGrid(gridSize, oldGridSize);
}

newGrid(gridSize);