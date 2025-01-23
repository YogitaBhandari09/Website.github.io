// Select all grid items
const gridItems = document.querySelectorAll(".third li");

// Add click event to each grid item
gridItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change clicked square's color to red
        item.classList.add("red");

        // If it's the last square, change all squares to green
        if (index === gridItems.length - 1) {
            gridItems.forEach((square) => {
                square.classList.remove("red");
                square.classList.add("green");
            });
        }
    });
});
