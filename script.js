let grid = document.querySelector('.container');

let n = 10;
for(let i = 0;i<n;i++){
    for(let j =0;j<n;j++){
        let cell = document.createElement("div");
        cell.className = "box";
        grid.appendChild(cell);
    }
}
