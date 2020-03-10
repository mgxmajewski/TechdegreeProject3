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

//checkboxes delcaring variables ()
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkboxDiv = document.querySelector('.activities');
const totalCostDiv = document.createElement('p');
let totalCost = 0;
checkboxDiv.appendChild(totalCostDiv);
totalCostDiv.innerHTML = totalCost;
// console.log(checkboxes);


//
checkboxDiv.addEventListener('change', (e) => {
const clicked = e.target;
const clickedTime = clicked.getAttribute('data-day-and-time');
const clickedCost = parseInt(clicked.getAttribute('data-cost'));
  // loop through all checkboxes to exclude conflicts - using logic from warmup 'checkboxes'
  if (clicked.checked){
   totalCost += clickedCost;
  } else { 
     totalCost -= clickedCost
  }
  for (let i = 0; i < checkboxes.length; i++) {
    const checkboxTime = checkboxes[i].getAttribute('data-day-and-time');
    if (clickedTime === checkboxTime && clicked !== checkboxes[i]) {
        if(clicked.checked) {
          checkboxes[i].disabled = true;
      } else {
      checkboxes[i].disabled = false;
      }
    }
   }
   // console.log(totalCost);
   // for (let i = 0; i < checkboxes.length; i++) {
   //  if(clicked.checked) {
   //    totalCost += clickedCost;
   //  } 
   // }
   totalCostDiv.innerHTML = "Total: $" + totalCost;
});
// payment section
const payment = document.getElementById('payment');
const creditCardDiv = document.getElementById('credit-card');
const payPalDiv = document.getElementById('paypal');
const bitcoinDiv = document.getElementById('bitcoin');
console.log(payment[0]);

payment.addEventListener('change', (e) =>{
const clicked = e.target.value;
console.log(clicked);
payment[0].style.display = "none";
for (let i = 0; i < payment.length; i++){
   if (clicked == "credit card") {
      creditCardDiv.style.display = '';
      payPalDiv.style.display = 'none';
      bitcoinDiv.style.display = 'none';
   } else if (clicked == "paypal") {
      payPalDiv.style.display = '';
      creditCardDiv.style.display = 'none';
      bitcoinDiv.style.display = 'none';
   } else if (clicked == "bitcoin") {
      creditCardDiv.style.display = 'none';
      payPalDiv.style.display = 'none';
      bitcoinDiv.style.display = '';

   }
}
});
// Validation 
const form = document.querySelector("form");
const nameValidator = () => {
   const nameVal = name.value;
   console.log(nameVal);
   if (nameVal.length > 0) {
     return true;
   } else {
     name.style.border = '3px solid red';
     return false;
   } 
 }




// event listner for submition with ifs for validation
 form.addEventListener('submit', (e) => {
       if(!nameValidator()){
         e.preventDefault();
         console.log(`name validator prevented default submission`);
       }
   console.log('Submit handler is functional!');
 });