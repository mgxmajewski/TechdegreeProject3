/******************************************************
* 
*     NAME FOCUS, VALIDATION ON SUBMITION
*                
*******************************************************/
// name subsection
const name = document.getElementById("name");
name.focus();
const nameRegX = /^[a-zA-Z\-]+$/;
const nameValidator = () => {
   const nameVal = name.value;
   console.log(nameVal);
   if (nameRegX.test(nameVal)) {
     return true;
   } else {
     name.style.border = '3px solid red';
     return false;
   } 
 }

/******************************************************
* 
*     EMAIL LIVE MESSAGES - KEYUP EVENT LISTENER
*                         &
*              VALIDATION ON SUBMITION 
*
*******************************************************/
const email = document.getElementById('mail');
const emailParentNode = document.getElementsByTagName('label')[1];
const emailNotValid = document.createElement('p');
emailParentNode.appendChild(emailNotValid);
emailNotValid.style.display = "none";
// source of regex https://emailregex.com/
const mailRegX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
email.addEventListener('keyup', (e) => {
   let typed = e.target.value;
   console.log(typed);
   let atIndex = typed.indexOf('@');
   let dotIndex = typed.indexOf('.');
   console.log(atIndex, dotIndex);
   if (typed.length == 0) {
      emailNotValid.style.display = "";
      emailNotValid.style.color = "red";
      emailNotValid.innerHTML = "You can't submit empty email address";
      email.style.border = '3px solid red';
   } else if (mailRegX.test(typed) == false && atIndex < 0 && dotIndex < 0) {
      emailNotValid.style.display = "";
      emailNotValid.style.color = "black";
      emailNotValid.innerHTML = "Please, provide valid mail, there is no '@' & '.' in the address";
      email.style.border = '3px solid red';
   } else if (mailRegX.test(typed) == false && dotIndex < 0 && atIndex > 0)  {
      emailNotValid.style.display = "";
      emailNotValid.innerHTML = "Please, provide valid mail, there is no '.' in the address";
      email.style.border = '3px solid red';
   } else if (mailRegX.test(typed) == false && dotIndex > 0 && atIndex < 0) {
      emailNotValid.style.display = "";
      emailNotValid.style.color = "black";
      emailNotValid.innerHTML = "Please, provide valid mail, there is no @ in the address";
      email.style.border = '3px solid red';
   } else if (mailRegX.test(typed) == false) {
      emailNotValid.style.display = "";
      emailNotValid.style.color = "black";
      emailNotValid.innerHTML = "Please, provide valid mail";
      email.style.border = '3px solid red';
   } else if (mailRegX.test(typed)) {
      emailNotValid.style.display = "";
      emailNotValid.style.color = "Green";
      emailNotValid.innerHTML = "Email is valid, thank you!";
      email.style.border = '2px solid rgb(111, 157, 220)';
      } 
});
// validation on submition
const emailValidator = () => {
   const emailValue = email.value;
   console.log(emailValue);
     if (mailRegX.test(emailValue)) {
         return true;
     } else {
         mail.style.border = '3px solid red';
         emailNotValid.style.color = "red";   
         emailNotValid.style.display = "";
         emailNotValid.innerHTML = "You can't submit empty email address";
         return false;
     }
   }

/******************************************************
* 
*     JOB ROLE DISPLAY      
*
*******************************************************/

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

/******************************************************
* 
*     T-SHIRT THEME & COLOR DROPLIST DISPLAY  
*
*******************************************************/

// Declaring variables for T-Shirt Info Dropdown 
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
// left some features in case exceed "color" hidding was removed
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

/******************************************************
* 
*     CHECKBOX EXCLUSION WHILE TIME CONFLICT
*                      &
*              COST CALCULATION    
*
*******************************************************/

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

// check box handler - evenlistner 
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
   totalCostDiv.innerHTML = "Total: $" + totalCost;
   // adding massage if cost is 0
   if (totalCost == 0){
      checkboxVal.style.display = '';
   } else {
      checkboxVal.style.display = 'none';
   }
});

// checkbox (at leas one) validation on submition
const checkboxValidator = () => {
   for (let i = 0; i < checkboxes.length; i++){
      if (checkboxes[i].checked) {
         return true;
      } else if (checkboxes[i].checked)
        return false;
   }
   
}

/******************************************************
* 
*     PAYMENT OPTION DISPLAY 
*         
*******************************************************/

// payment section
const payment = document.getElementById('payment');
payment.removeChild(payment[0]);
const chosenPayment = payment.value;
const creditCardDiv = document.getElementById('credit-card');
const payPalDiv = document.getElementById('paypal');
const bitcoinDiv = document.getElementById('bitcoin');
payPalDiv.style.display = 'none';
bitcoinDiv.style.display = 'none';

// console.log(chosenPayment);
payment.addEventListener('change', (e) =>{
const clicked = e.target.value;
// console.log(clicked);
for (let i = 0; i < payment.length; i++){
   if (clicked == "credit card") {
      creditCardDiv.style.display = '';
      payPalDiv.style.display = 'none';
      bitcoinDiv.style.display = 'none';
      payment[0].selected = true;
   } else if (clicked == "paypal") {
      payPalDiv.style.display = '';
      creditCardDiv.style.display = 'none';
      bitcoinDiv.style.display = 'none';
      payment[1].selected = true;
   } else if (clicked == "bitcoin") {
      creditCardDiv.style.display = 'none';
      payPalDiv.style.display = 'none';
      bitcoinDiv.style.display = '';
      payment[2].selected = true;
   }
}
});

/******************************************************
* 
*     CARD PAYMENT VALIDATION ON SUBMITION      
*
*******************************************************/
const cardNumber = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const expMonth = document.getElementById('exp-month');
const expYear = document.getElementById('exp-year');
// Regexes to difine expected input
const cardNumberRegX = /^\d{13,16}$/;
const zipRegX = /^\d{5}$/;
const cvvRegX = /^\d{3}$/;
// card number validator
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
// zip number validator
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
// cvv number validator
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

/******************************************************
* 
*     FORM SUBMIT VALIDATORS 
*
*******************************************************/
const form = document.querySelector("form");

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
//declaring local variable so card isn't validated if PayPAl or Bitcoin selected
const CardValue = payment.value; 
   if (CardValue == "credit card") {
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