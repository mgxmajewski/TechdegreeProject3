// console.log('test'); - checking if file is conected
const name = document.getElementById("name");
name.focus();
const jobRole = document.getElementById("other-title");
jobRole.style.display = 'none';

const designList = document.getElementById("design");
const design = document.getElementById("design").children;
console.log(design);
const color = document.getElementById("color").children;
console.log(color);
const colorDiv = document.getElementById("colors-js-puns");


if (design[0]) {
   colorDiv.style.display ="none";
}

designList.addEventListener('input', (e) => {
   
   design[0].style.display="none";
   colorDiv.style.display ="";
   const choice = e.target;
  for (let i = 1; i < design.length -1; i++){
     if (design[1]){
        color[0].style.display="none";
        color[1].style.display="none";
        color[2].style.display="none";
     } else {
      color[3].style.display="none";
      color[4].style.display="none";
      color[5].style.display="none";
     }
  }
});