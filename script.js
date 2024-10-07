const container = document.getElementById("container");

function createGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    
    container.innerHTML = ""; 

    for (let i = 0; i < rows * cols; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        container.appendChild(div);
    }
}

createGrid(16, 16);