// Função para verificar se os campos de email e senha estão preenchidos
function checkFields() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginButton = document.getElementById('loginButton');

    // Habilitar o botão se ambos os campos estiverem preenchidos, desabilitá-lo caso contrário
    if (email.trim() !== '' && password.trim() !== '') {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
}

// Adicione um ouvinte de evento de entrada para os campos de email e senha
document.getElementById('email').addEventListener('input', checkFields);
document.getElementById('password').addEventListener('input', checkFields);

// Adicione um ouvinte de evento de envio para o formulário
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio real do formulário (para fins de demonstração)

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica de autenticação real

    // Exemplo simples: verificar se o email é "user" e a senha é "password"
    if (email === 'user' && password === 'password') {
        alert('Login bem-sucedido!');
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});