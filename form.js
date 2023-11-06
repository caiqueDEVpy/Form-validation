const nome = document.getElementById('name-id');
const genero1 = document.getElementById('genero1-id');
const genero2 = document.getElementById('genero2-id');
const btn_enviar = document.getElementById('btn-submit');
const born = document.getElementById('nascimento-id');
const data_atual = new Date().getFullYear();

btn_enviar.addEventListener('click', () => {
    const born_format = new Date(born.value).getFullYear();
    const idade = data_atual - born_format;
    if (idade < 18) {
        alert("Você é menor de idade.");
    } 
        const mail = document.getElementById('mail-id').value;
        const senha = document.getElementById('password-id').value;
        if (mail === "" || senha === "" || nome.value === "" || (!genero1.checked && !genero2.checked)) {
            alert("Usuário não logado! Preencha os campos obrigatórios.");
        } else {
            alert("Usuário logado!");
        }
    
});