const container = document.getElementById("container");
const btnContainer = document.getElementById("btn-container");
function getRandomColour() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    
    container.innerHTML = ""; 

    for (let i = 0; i < rows * cols; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
                        
        div.addEventListener('mouseenter', function() {
            this.style.backgroundColor = getRandomColour();
        });

        container.appendChild(div);
    }
}

const squaresBtn = document.createElement("button");
squaresBtn.textContent = "Choose your grid size!";
btnContainer.appendChild(squaresBtn);

squaresBtn.addEventListener("click", () => {
    let rows = prompt("Please choose how many rows you would like the grid to have (max 100).");
    let cols = prompt("Please choose how many columns you would like the grid to have (max 100).");

    if (rows && cols < 101) {
        createGrid(rows, cols);
    } else {
        alert("Please enter a number 100 or less for both rows and columns.");
    }
});

