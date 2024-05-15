window.onload = function() {
    const locationInput = document.getElementById('location');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=pt`)
            .then(response => response.json())
            .then(data => {
                locationInput.value = data.city ? data.city : data.locality + ', ' + data.countryName;
            })
            .catch(() => {
                locationInput.value = 'Localização não disponível';
            });
        }, function() {
            locationInput.value = 'Permissão de localização negada';
        });
    } else {
        locationInput.value = 'Geolocalização não suportada';
    }

    // Setup initial item entry
    addItem();
};

function addItem() {
    const container = document.getElementById('item-list');
    const div = document.createElement('div');
    div.innerHTML = `
        <input type="text" name="item[]" placeholder="Item" required>
        <input type="number" name="quantity[]" placeholder="Quantidade" min="1" required>
        <input type="number" name="price[]" placeholder="Valor" step="0.01" required>
        <button type="button" onclick="removeItem(this)">Remover</button>
    `;
    container.appendChild(div);
}
function submitPurchase() {
    const form = document.getElementById('purchase-form');
    const items = document.querySelectorAll('#item-list div');
    let itemsDescription = '';

    items.forEach(item => {
        const itemName = item.querySelector('[name="item[]"]').value;
        const itemQuantity = item.querySelector('[name="quantity[]"]').value;
        const itemPrice = item.querySelector('[name="price[]"]').value;
        itemsDescription += `${itemName} x${itemQuantity} - $${itemPrice}, `;
    });

    // Chamada fictícia para adicionar o registro ao histórico
    addPurchaseRecord(
        form['trip-code'].value,
        form['employee-id'].value,
        form['purchase-date'].value,
        form['location'].value,
        form['expense-type'].value,
        itemsDescription.slice(0, -2), // Remove a última vírgula e espaço
        'CalcularTotal()', // Implementar função para calcular total
        'URL_DO_RECIBO.pdf' // Substituir pela URL real do recibo
    );

    // Reset form após a submissão
    form.reset();
}

function removeItem(button) {
    button.parentNode.remove();
}

function addPurchaseRecord(tripCode, employeeId, purchaseDate, location, expenseType, itemsPurchased, totalPrice, receiptUrl) {
    const table = document.getElementById('purchase-history').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);

    cell1.textContent = tripCode;
    cell2.textContent = employeeId;
    cell3.textContent = purchaseDate;
    cell4.textContent = location;
    cell5.textContent = expenseType;
    cell6.textContent = itemsPurchased;
    cell7.textContent = totalPrice;
    cell8.innerHTML = `<a href="${receiptUrl}">Ver Recibo</a>`;
}

function calculateTotal() {
    const itemElements = document.querySelectorAll('#item-list div');
    let total = 0;

    itemElements.forEach(item => {
        const quantity = parseFloat(item.querySelector('[name="quantity[]"]').value);
        const price = parseFloat(item.querySelector('[name="price[]"]').value);
        total += quantity * price;
    });

    return total.toFixed(2); // Retorna o total como uma string formatada com duas casas decimais
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    // Redireciona o usuário ou faz outras ações após o login bem-sucedido
}

function renderButton() {
    gapi.signin2.render('googleSignIn', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSignIn,
        'onfailure': onFailure
    });
}
