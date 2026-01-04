const container = document.querySelector(".container");



document.getElementById("newGrid").addEventListener("click", () => {
  let N = Number(prompt("Enter number of squares per side (max 100):"));

  if (isNaN(N) || N <= 0 || N > 100) {
    alert("Please enter a valid number between 1 and 100");
    return;
  }

  const boxSize = (600/N);

  // Resize container
  

  // Clear old grid
  container.innerHTML = "";

  // Create grid
  for (let i = 0; i < N * N; i++) {
    let cell = document.createElement("div");
    cell.className = "box";
    cell.style.width = `${boxSize}px`;
    cell.style.height = `${boxSize}px`;
    container.appendChild(cell);
  }
});

//opacity , color,clear buttons off by default
let opacityOn = false;
let colorOn = false;

// Button toggles
const opacityBtn = document.getElementById("Opacity");
const colorBtn = document.getElementById("Colors");
const clearBtn = document.getElementById("Clear");

opacityBtn.addEventListener("click", () => {
    opacityOn = !opacityOn;

    if (opacityOn) {
        opacityBtn.style.backgroundColor = "#434144ff";
        opacityBtn.style.color = "white";
    } else {
        opacityBtn.style.backgroundColor = "";
        opacityBtn.style.color = "";
    }
});

colorBtn.addEventListener("click", () => {
    colorOn = !colorOn;

    if (colorOn) {
        colorBtn.style.backgroundColor = "#434144ff";
        colorBtn.style.color = "white";
    } else {
        colorBtn.style.backgroundColor = "";
        colorBtn.style.color = "";
    }
});

clearBtn.addEventListener("click", () => {
    container.innerHTML = ""; 
});



container.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("box")) return;
    let b = e.target;

    let r = 0, g = 0, bl = 0;

    // Determine base color
    if (colorOn) {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        bl = Math.floor(Math.random() * 256);
    }

    // Handle opacity
    if (opacityOn) {
        if (!b.dataset.opacity) b.dataset.opacity = 0.1;
        else b.dataset.opacity = Math.min(Number(b.dataset.opacity) + 0.1, 1);

        b.style.backgroundColor = `rgba(${r}, ${g}, ${bl}, ${b.dataset.opacity})`;
    } else {
        // No opacity → solid color
        b.style.backgroundColor = colorOn ? `rgb(${r}, ${g}, ${bl})` : "black";
    }
});
