document.addEventListener('DOMContentLoaded', () => {
    window.goToHome = function() {
        window.location.href = 'userhomepage.html';
    };

 window.printTable = function() {
    const table = document.getElementById('transaction-table');
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print Table</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write('<h1>Transaction Details</h1>');
    printWindow.document.write(table.outerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
};
});