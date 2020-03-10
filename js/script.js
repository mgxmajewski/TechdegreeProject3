// console.log('test'); - checking if file is conected
const name = document.getElementById("name");
name.focus();
const jobRole = document.getElementById("other-title");
jobRole.style.display = 'none';

const designList = document.getElementById("design");
const design = designList.getElementsByTagName('option');

console.log(design);
const color = document.getElementById("color").children;
console.log(color);
const colorDiv = document.getElementById("colors-js-puns");


// console.log(design[0]);
// console.log(design[1]);
// console.log(design[2]);

if (design[0]) {
   colorDiv.style.display ="none";
}

designList.addEventListener('input', (e) => {
   design[0].style.display="none";
   colorDiv.style.display ="";
   const clicked = e.target.value;
   console.log(clicked);
   // const choice = e.target;
   // console.log(choice);
  for (let i = 0; i < design.length ; i++){
     if (clicked == 'js puns') {
      color[0].style.display="";
      color[1].style.display="";
      color[2].style.display="";
      color[3].style.display="none";
      color[4].style.display="none";
      color[5].style.display="none";
      // console.log(design[i].textContent);
      // console.log('1st loop');
     } else {
      color[0].style.display="none";
      color[1].style.display="none";
      color[2].style.display="none";
      color[3].style.display="";
      color[4].style.display="";
      color[5].style.display="";
      // console.log(design[i].textContent);
      // console.log('2nd loop');
     }
  }
});