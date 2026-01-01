let grid = document.querySelector('.container');

let n = 10;
for(let i = 0;i<n;i++){
    for(let j =0;j<n;j++){
        let cell = document.createElement("div");
        cell.className = "box";
        grid.appendChild(cell);
    }
}



grid.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('box')) {

        // generate random RGB values
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        // set the hovered box's background
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`;

        console.log('entered', e.target);
    }
});
