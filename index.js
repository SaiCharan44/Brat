
function validate()
{
var userid=document.getElementById("user-id").value;
var name=document.getElementById("name").value;
var number=document.getElementById("mobile-number").value;
var n=number.toString().length;
const URL="register.html";
  if(n<10 || n>10){
    // alert("Mobile Number should of 10 digits");
    confirm('Mobile Number should of 10 digits')
    window.location.href = URL;
  }
var p=document.getElementById("password").value;
var cp=document.getElementById("confirm-password").value;

  if(p!=cp)
    {
      c=1;
        //alert("Password doesn't match");
        confirm("Password Doesn't match")
        window.location.href = URL;
        
    }
  
  if(p==cp)
    {
      if(p.length<8)
        {
          //alert("Password length should of minimum 8 characters");
          confirm("Password is less than 8 characters")
          window.location.href = URL;
        }
    }
    localStorage.setItem("password",p);
    localStorage.setItem("userid",userid);
    localStorage.setItem('number',number);
    localStorage.setItem('name',name);
}



function loginvalidate(){
var userid=document.getElementById("user-id").value;
var password=document.getElementById("password").value;
var userId=localStorage.getItem("userid");
var Password=localStorage.getItem("password");
const URL="registersuccess.html";
if(userId==userid && password==Password)
{
        alert("Succefully logged in.... ")
        window.location.href= URL
}
else{
    alert("Unsuccessful due to invalid credentials....");
    window.location.href=URL
}
}



function display()
{
let min=10000;
let max=99999;
document.getElementById("customer-ID").innerHTML=Math.floor(Math.random() * (max - min+ 1)) + min;
document.getElementById("customer-name").innerHTML=localStorage.getItem('name');
document.getElementById("mobile-number").innerHTML=localStorage.getItem('number');
}



function displayname()
{
  document.getElementById("username").innerHTML=localStorage.getItem('name');
}



function displayamount()
{
  document.getElementById("amount-paid").innerHTML=localStorage.getItem("amount");
  
}



document.addEventListener('DOMContentLoaded', () => {
  // Get all checkboxes
  const checkboxes = document.querySelectorAll('input[name="bills"]');
  
  // Add event listener to each checkbox
  checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', updateTotalAmount);
  });
  
  // Function to update total amount
  function updateTotalAmount() {
      let totalAmount = 0;
      
      // Loop through each checkbox
      checkboxes.forEach(checkbox => {
          if (checkbox.checked) {
              // Add the amount of checked checkboxes to totalAmount
              totalAmount += parseFloat(checkbox.dataset.amount);
          }
      });
      
      // Update the total amount displayed
      document.getElementById('total-amount').textContent = totalAmount;
      localStorage.setItem('amount',totalAmount);
  }
  
  // Function to handle proceed to pay button
  window.proceedToPay = function() {
      const totalAmount = document.getElementById('total-amount').textContent;
      if (parseFloat(totalAmount) > 0) {
          // Redirect to the payment page
          const paymentUrl = 'cardpage.html'; // Replace with your actual payment URL
          if (confirm(`You are about to proceed with payment of ₹${totalAmount}. Continue?`)) {
              window.location.href = paymentUrl;
          }
      } else {
          alert('Please select at least one bill to proceed.');
      }
  };
});

function displaycard()
{
  document.getElementById("card-type").innerHTML=localStorage.getItem('card');
}

function amount()
{
  document.getElementById("payment-amount").innerHTML+=localStorage.getItem("amount");
}
function payment()
{
  localStorage.setItem('card',document.getElementById('cardtype').value);
 
}