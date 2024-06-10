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
            itemNameTd.id = 'item';
            itemNameTd.textContent = itemName;
            newRow.appendChild(itemNameTd);
            
            const itemPriceTd = document.createElement('td');
            itemPriceTd.id = 'price';
            itemPriceTd.textContent = itemPrice.toFixed(2);
            newRow.appendChild(itemPriceTd);

            itemList.appendChild(newRow);

            // Update grand total
            grandTotal += itemPrice;
            totalElement.textContent = grandTotal.toFixed(2);

            // Clear input fields
            itemNameInput.value = '';
            itemPriceInput.value = '';
        } else {
            alert('Please enter a valid item name and price.');
        }
    });
});
