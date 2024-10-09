const container = document.getElementById("container");
const btnContainer = document.getElementById("btn-container");

function createGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    
    container.innerHTML = ""; 

    for (let i = 0; i < rows * cols; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
                        
        div.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#ffffff';
        });

        container.appendChild(div);
    }
}

const squaresBtn = document.createElement("button");
squaresBtn.textContent = "Choose your grid size!";
btnContainer.appendChild(squaresBtn);
squaresBtn.addEventListener("click", () => {
    let rows = prompt("Please choose how many rows you would like the grid to have (max 100).");
    let cols = prompt("Please choose how many rows you would like the grid to have (max 100).");
    createGrid(rows, cols);
  });

