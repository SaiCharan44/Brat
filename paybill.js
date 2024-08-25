
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



function amount()
{
    document.getElementById("payment-amount").innerHTML+=localStorage.getItem("amount");
}