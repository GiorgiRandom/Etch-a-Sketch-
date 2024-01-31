
const divi = document.createElement('label');
divi.setAttribute('class', 'container');
document.body.append(divi);
const title=document.createElement("label")
title.textContent='Etch-a-Sketch '
title.setAttribute("id",'title')
divi.appendChild(title)
const gridcontainer = document.createElement('div');
gridcontainer.setAttribute('id', 'gridcontainer');
divi.appendChild(gridcontainer)

function gridsize(size) {
  
for (let i = 0; i < size * size; i++) {
    const newdivs = document.createElement('div');
    newdivs.setAttribute('class', 'newdivs');
    newdivs.style.width = `${800 / size}px`;
    newdivs.style.height = `${800 / size}px`;
    gridcontainer.style.cssText=`grid-template-columns: repeat(${size}, 1fr)`
    gridcontainer.appendChild(newdivs);
  }
}

function attachEventListeners() {
  const fromdiv = document.querySelectorAll('.newdivs');
  fromdiv.forEach(function (element) {
    element.addEventListener('mouseover', function () {
      element.style.backgroundColor = randomcolor();
    });
  });
}

const buttoni = document.createElement('button');
buttoni.setAttribute('id', 'buttoni');
buttoni.textContent = 'Change Grid size';
document.body.append(buttoni)
buttoni.onclick =function resizeGrid() {
	let newSize = +prompt("Enter a number. max: 100");
	if (typeof newSize !== "number" || newSize < 2 ||newSize>100) return;
	const boxes = document.querySelectorAll(".newdivs");
	boxes.forEach((box) => box.remove());
  gridsize(newSize);
  attachEventListeners();
};
const newbutton=document.createElement('button')
newbutton.setAttribute("id",'newbutton')
newbutton.textContent='Reset'
document.body.append(newbutton)
newbutton.addEventListener('click',function reset(){
	const newagain=document.querySelectorAll(".newdivs")
  newagain.forEach((element)=>element.style.backgroundColor='#c9a2a2')
  
})
gridsize(16);
attachEventListeners();
function randomcolor() {
  let randomnumber1 = Math.floor(Math.random() * 256);
  let randomnumber2 = Math.floor(Math.random() * 256);
  let randomnumber3 = Math.floor(Math.random() * 256);
  return `rgb(${randomnumber1},${randomnumber2},${randomnumber3})`;
}
