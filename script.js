//your code here
document.addEventListener('DOMContentLoaded', function() {
    const addItemButton = document.getElementById('add');
    const itemNameInput = document.getElementById('item-name-input');
    const itemPriceInput = document.getElementById('item-price-input');
    const itemList = document.getElementById('item-list');
    const totalElement = document.getElementById('total');
    let grandTotal = 0;

    addItemButton.addEventListener('click', function() {
        const itemName = itemNameInput.value.trim();
        const itemPrice = parseFloat(itemPriceInput.value);

        if (itemName !== '' && !isNaN(itemPrice) && itemPrice >= 0) {
            // Add new row to the table
            const newRow = document.createElement('tr');
            
            const itemNameTd = document.createElement('td');
           

