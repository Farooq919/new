document.addEventListener('DOMContentLoaded', () => {
    // Get references to the form elements
    const nameInput = document.getElementById('Name');
    const emailInput = document.getElementById('email');
    const selectBox = document.getElementById('opt1');
    const textarea = document.getElementById('textarea');
    
    // Add event listeners to the save buttons
    document.getElementById('saveName').addEventListener('click', () => {
        const name = nameInput.value;
        const data = { name };
        console.log('Name saved:', data);
        // Here you can send the data object to your backend
        // Example: fetch('/saveName', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
    });
    
    document.getElementById('saveEmail').addEventListener('click', () => {
        const email = emailInput.value;
        const data = { email };
        console.log('Email saved:', data);
        // Here you can send the data object to your backend
        // Example: fetch('/saveEmail', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
    });
    
    document.getElementById('saveMessage').addEventListener('click', () => {
        const message = textarea.value;
        const selectedOption = selectBox.value;
        const data = { message, selectedOption };
        console.log('Message saved:', data);
        // Here you can send the data object to your backend
        // Example: fetch('/saveMessage', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
    });
});

