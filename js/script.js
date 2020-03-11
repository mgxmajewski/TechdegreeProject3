// console.log('test'); - checking if file is conected
const name = document.getElementById("name");
name.focus();

const jobRole = document.getElementById("other-title");
jobRole.style.display = 'none';
const jobList = document.getElementById("title");


jobList.addEventListener('change', (e) => {
   const clicked = e.target.value;
   if (clicked == 'other') {
      jobRole.style.display = '';
   } else if (clicked !== 'other') {
      jobRole.style.display = 'none';
   }
});


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
colorDiv.style.display ="none";
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
      // console.log('1st loop');
     } else if (clicked === 'heart js'){
      color[0].style.display="none";
      color[4].selected = true;
      color[1].style.display="none";
      color[2].style.display="none";
      color[3].style.display="none";
      color[4].style.display="";
      color[5].style.display="";
      color[6].style.display="";
      // console.log('2nd loop');
     }
  }
});

//checkboxes delcaring variables ()
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkboxDiv = document.querySelector('.activities');
const totalCostDiv = document.createElement('p');

let totalCost = 0;
checkboxDiv.appendChild(totalCostDiv);
totalCostDiv.innerHTML = "Total: $" + totalCost;

const checkboxVal = document.createElement('p');
checkboxDiv.appendChild(checkboxVal);
checkboxVal.innerHTML = "*check minimum one chechbox";
checkboxVal.style.color = "red";
checkboxVal.style.display = 'none';

// console.log(checkboxes);
//
checkboxDiv.addEventListener('change', (e) => {
// checkboxValidator();
const clicked = e.target;
const clickedTime = clicked.getAttribute('data-day-and-time');
const clickedCost = parseInt(clicked.getAttribute('data-cost'));
  // loop through all checkboxes to exclude conflicts - using logic from warmup 'checkboxes'
  if (clicked.checked){
   totalCost += clickedCost;
   // checkboxVal.style.display = 'none';
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
   totalCostDiv.innerHTML = "Total: $" + totalCost;
   // adding loop for validation (think it's better nto to create another event listner)
   if (totalCost == 0){
      checkboxVal.style.display = '';
   } else {
      checkboxVal.style.display = 'none';
   }
});

// payment section
const payment = document.getElementById('payment');
const chosenPayment = payment.value;

const creditCardDiv = document.getElementById('credit-card');
const payPalDiv = document.getElementById('paypal');
const bitcoinDiv = document.getElementById('bitcoin');
// console.log(payment[0]);
payPalDiv.style.display = 'none';
bitcoinDiv.style.display = 'none';

payment[1].selected = true;
payment[0].style.display = "none";
console.log(chosenPayment);
payment.addEventListener('change', (e) =>{
const clicked = e.target.value;
console.log(clicked);
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

//name validation
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

// email validation
 const email = document.getElementById('mail');

 const emailValidator = () => {
   const emailValue = email.value;
   // console.log(emailValue);
     const atIndex = emailValue.indexOf('@');
     const dotIndex = emailValue.lastIndexOf('.');
   //   console.log(atIndex, dotIndex);
     if (atIndex > 1 && dotIndex > atIndex+1 ) {
         return true;
     } else {
         email.style.border = '3px solid red';
         return false;
     }
   }



// checkbox (at leas one) validation
const checkboxValidator = () => {
   for (let i = 0; i < checkboxes.length; i++){
      if (checkboxes[i].checked) {
         return true;
      } else if (checkboxes[i].checked)
        return false;
   }
   
}

// card payment validation
const cardNumber = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const expMonth = document.getElementById('exp-month');
const expYear = document.getElementById('exp-year');

const cardNumberRegX = /^\d{13,16}$/;
const zipRegX = /^\d{5}$/;
const cvvRegX = /^\d{3}$/;


// cardNumber.addEventListener('change', (e) =>{

// });
   
   
   
const cardValidator = () => {
   let cardNumberInput = cardNumber.value;
   if (cardNumberRegX.test(cardNumberInput)) {
         console.log(cardNumberInput); 
         cardNumber.style.border = '2px solid rgb(111, 157, 220)';
         return true;
      } else {
         cardNumber.style.border = '3px solid red';
         return false;
      }
   }

const zipValidator = () => {
   let zipInput = zip.value;
   if (zipRegX.test(zipInput)) {
         console.log(zipInput); 
         zip.style.border = '2px solid rgb(111, 157, 220)';
         return true;
      } else {
         zip.style.border = '3px solid red';
         return false;
      }
   }

const cvvValidator = () => {
   let cvvInput = cvv.value;
   if (cvvRegX.test(cvvInput)) {
         console.log(cvvInput); 
         cvv.style.border = '2px solid rgb(111, 157, 220)';
         return true;
      } else {
         cvv.style.border = '3px solid red';
         return false;
      }
   }
// console.log(cardValidation());
// event listner for submition with ifs for validation
 form.addEventListener('submit', (e) => {
       
   if(!nameValidator()){
         e.preventDefault();
         console.log(`name validator prevented default submission`);
       }
       
   if(!emailValidator()){
      e.preventDefault();
         console.log(`mail validator prevented default submission`);
       } 

   if(!checkboxValidator()){
      e.preventDefault();
      checkboxVal.style.display = '';
         console.log(`checkbox name validator prevented default submission`);
      }
if (chosenPayment == "credit card") {
   if(!cardValidator()){
      e.preventDefault();
         console.log(`card validator prevented default submission`);
         } 

   if(!zipValidator()){
      e.preventDefault();
         console.log(`card validator prevented default submission`);
         }      

   if(!cvvValidator()){
      e.preventDefault();
         console.log(`card validator prevented default submission`);
         } 
      }
   // console.log('Submit handler is functional!');
 });