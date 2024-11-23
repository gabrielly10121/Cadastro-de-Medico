
function validarFormulario(event) {
    
    event.preventDefault();

    
    var nome = document.getElementById('nomeMedico').value;
    var email = document.getElementById('emailMedico').value;
    var crm = document.getElementById('crmMedico').value;
    var especializacao = document.getElementById('especializacao').value;
    
  
    var mensagemDiv = document.getElementById('mensagem');

    
    if (nome === "" || email === "" || crm === "" || especializacao === "") {
        mensagemDiv.style.display = 'block';
        mensagemDiv.className = 'alert alert-danger';
        mensagemDiv.innerHTML = 'Todos os campos são obrigatórios!';
    } else {
        
        mensagemDiv.style.display = 'block';
        mensagemDiv.className = 'alert alert-success';
        mensagemDiv.innerHTML = 'Cadastro realizado com sucesso!';

        
        document.getElementById('formCadastro').reset();

        
        setTimeout(function() {
            mensagemDiv.style.display = 'none';
        }, 3000);
    }
}
