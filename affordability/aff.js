


var botusafe = false; //if true process 26% otherwise 23% if clearing
var netpay = 0; // clear all loans
var basicTreshhold = 9100;//


// JavaScript code to handle list item clicks
document.querySelectorAll('.clickable').forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation();
        // Toggle visibility of the sub-list
        const subList = this.querySelector('.sub-list');
        if (subList.style.display === 'none' || subList.style.display === '') {
            subList.style.display = 'block';
        } else {
            subList.style.display = 'none';
        }
    });
});
// JavaScript code to handle sub-list item clicks
document.querySelectorAll('.clickable-sub').forEach(subItem => {
    subItem.addEventListener('click', function(event) {
        // Prevent the event from bubbling up to parent elements
        event.stopPropagation();
         // Toggle visibility of the sub-list
         const subList = this.querySelector('.sub-list');
         if (subList.style.display === 'none' || subList.style.display === '') {
             subList.style.display = 'block';
         } else {
             subList.style.display = 'none';
         }
    });
});