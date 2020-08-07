//Procurar o botao
document.querySelector('#add-time')
.addEventListener('click', cloneField)   // Quando clicar no botao




// Executar uma acao
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //Para cada campo, limpar
    fields.forEach(function(fields) {
        //Pegar o fields do momento e limpa ele
        fields.value = ''
    })

    // Colocar na página: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
