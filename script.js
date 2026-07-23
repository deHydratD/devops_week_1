function submitForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var date = document.getElementById('date').value.trim();

    if (name && email && phone) {
        document.getElementById('confirmation').innerText =
            'Thank You, ' + name + '. You have registered successfully.';
        console.log('Registration Details:', { Name: name, Email: email, Phone: phone, Dob: date });
    } else {
        alert('Please fill in all fields before joining.');
    }
}