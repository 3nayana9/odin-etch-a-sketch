const container = document.querySelector(".container");

document.getElementById("newGrid").addEventListener("click", () => {
  let N = Number(prompt("Enter number of squares per side (max 100):"));

  if (isNaN(N) || N <= 0 || N > 100) {
    alert("Please enter a valid number between 1 and 100");
    return;
  }

  const boxSize = 20;

  // Resize container
  container.style.width = `${N * boxSize}px`;
  container.style.height = `${N * boxSize}px`;

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


container.addEventListener("mouseover", (e) => {
  if (!e.target.classList.contains("box")) return;
  
  let b = e. target;

  if(!b.dataset.opacity)
  {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b1 = Math.floor(Math.random() * 256);

    b.dataset.color =   `${r},${g},${b1}`;
    b.dataset.opacity = 0.1
   }
   else{

    let newOp = Math.min(Number(b.dataset.opacity)+0.1,1);
    b.dataset.opacity = newOp;
   }
   
    b.style.backgroundColor = `rgba(${b.dataset.color}, ${b.dataset.opacity})`;
  
});
