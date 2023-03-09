function submitForm(event) {
    event.preventDefault(); // evita que o formulário seja enviado
  
    // obter os valores dos campos
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var nif = document.getElementById('nif').value;
    var observations = document.getElementById('observations').value;
  
    // limpar os campos
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    document.getElementById('nif').value = '';
    document.getElementById('observations').value = '';
  
    // exibir mensagem de sucesso na console
    console.log('Form submitted successfully:');
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Phone: ' + phone);
    console.log('Address: ' + address);
    console.log('NIF: ' + nif);
    console.log('Observations: ' + observations);
  }
  