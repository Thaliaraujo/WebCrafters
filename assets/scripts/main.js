//Form Validation
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    //verifica se os campos estão preenchidos
    if (name.trim() === '') {
        alert('Por favor, preencha o campo Nome.');
        return;
    };
    if (surname.trim() === '') {
        alert('Por favor, preencha o campo Sobrenome.');
        return;
    };
    if (email.trim() === '') {
        alert('Por favor, preencha o campo Email.');
        return;
    };
    if (phone.trim() === '') {
        alert('Por favor, preencha o campo Telefone.');
        return;
    };
    if (message.trim() === '') {
        alert('Por favor, preencha o campo Mensagem.');
        return;
    };

    // Criar um objeto com os dados do formulário
    const formData = {
        name: name,
        surname: surname,
        email: email,
        phone: phone,
        message: message
    };

    // Enviar os dados para o servidor usando a API Fetch
    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (response.ok) {
            alert('Formulário enviado com sucesso!');
        } else {
            throw new Error('Erro ao enviar o formulário.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    });
});
