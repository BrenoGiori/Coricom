const btn = document.getElementById("enviar");

btn.addEventListener("click", () => {
    //mostrar nome
    const nome = document.getElementById("nome");
    const mostrarNome = document.getElementById("mostrarNome");
    mostrarNome.innerText = nome.value;
    //mostrar sobre 1
    const sobre1 = document.getElementById("sobre1");
    const mostrarSobre1 = document.getElementById("mostrarSobre1");
    mostrarSobre1.innerText = sobre1.value;
    //mostrar formacao
    const formacao = document.getElementById("formacao");
    const mostrarFormacao = document.getElementById("mostrarFormacao");
    mostrarFormacao.innerText = formacao.value;
    //mostrar experiencia
    const experiencia = document.getElementById("experiencia");
    const mostrarExperiencia = document.getElementById("mostrarExperiencia");
    mostrarExperiencia.innerText = experiencia.value;
    //mostrar experiencia 2
    const experiencia2 = document.getElementById("experiencia2");
    const mostrarExperiencia2 = document.getElementById("mostrarExperiencia2");
    mostrarExperiencia2.innerText = experiencia2.value;
    //mostrar Contato
    const contato = document.getElementById("contato");
    const mostrarContato = document.getElementById("mostrarContato");
    mostrarContato.innerText = contato.value;
});
