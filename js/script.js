// console.log('test'); - checking if file is conected
const name = document.getElementById("name");
name.focus();
const jobRole = document.getElementById("other-title");
jobRole.style.display = 'none';

// Declaring variables for T-Shirt Info Dropdown scripti
const designList = document.getElementById("design");
const design = designList.getElementsByTagName('option');
const color = document.getElementById("color").children;
const colorDiv = document.getElementById("colors-js-puns");
const colorOptions = document.querySelectorAll('#color option')
// Here adding to 'Color options' - "Please select a T-shirt theme"
const colorParentNode = document.getElementById("color");
const selectTheme = document.createElement("option");
selectTheme.innerHTML = "Please select a T-shirt theme";
colorParentNode.prepend(selectTheme);
selectTheme.indexOf = 0;
color[0].selected = true;
// Here hidding all 'Color options'
const hideColors = () => {
for (let i = 1; i < color.length; i++) {
   color[i].style.display="none";
   }
};
hideColors();
// Here adding to 'Color options' - "Please select a T-shirt theme"
designList.addEventListener('change', (e) => {
   design[0].style.display="none";
   colorDiv.style.display ="";
   const clicked = e.target.value;
   color[0].style.display="";
  for (let i = 0; i < design.length ; i++){
     if (clicked == 'js puns') {
      color[0].style.display="none";
      color[1].selected = true;
      color[1].style.display="";
      color[2].style.display="";
      color[3].style.display="";
      color[4].style.display="none";
      color[5].style.display="none";
      color[6].style.display="none";
      console.log('1st loop');
     } else if (clicked === 'heart js'){
      color[0].style.display="none";
      color[4].selected = true;
      color[1].style.display="none";
      color[2].style.display="none";
      color[3].style.display="none";
      color[4].style.display="";
      color[5].style.display="";
      color[6].style.display="";
      console.log('2nd loop');
     }
  }
});

//checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
console.log(checkboxes);

document.querySelector('.activities').addEventListener('change', (e) => {
   
  // YOUR CODE GOES HERE!!! Do the steps below to complete this challenge
const clicked = e.target;
console.log(clicked);
  // 1) Create a variable named clicked to store the checkbox input that was just clicked
  //    - `e.target` will be helpful here

  // 2) Create a variable named clickedType to store the `data-type` attribute of the checkbox that was just clicked
  //    - the `getAttribute` method will be helpful here
const clickedType = clicked.getAttribute('data-day-and-time');
console.log(clickedType);
  // 3) Log out the two variables you just created to confirm their values

  // 4) Use the `checkboxes` variable that was created for you above, and a `for` loop to iterate over all the checkbox input elements
  for (let i = 0; i < checkboxes.length; i++) {
    const checkboxType = checkboxes[i].getAttribute('data-day-and-time');
    if (clickedType === checkboxType && clicked !== checkboxes[i]) {
        if(clicked.checked) {
          checkboxes[i].disabled = true;
      } else {
      checkboxes[i].disabled = false;
      }
    }
   }
});