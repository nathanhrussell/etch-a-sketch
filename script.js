const container = document.getElementById("container");

function createGrid(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        container.appendChild(div);
    }
}

createGrid(16, 16);