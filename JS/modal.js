const form = document.querySelector('.js-modal')
const sucesso = document.querySelector('.msg')
const dados = {} //Objeto



export function pegarValorForm(event){
    dados[event.target.name] = event.target.value 
    console.log(dados)
}

export function exibirModal() {
    form.classList.add('active')
    
    
}
  
export function ocultarModal() {
    form.classList.remove('active')
    form.style.display = 'none' 
    
}

window.addEventListener('load', exibirModal);

form.addEventListener('change', pegarValorForm )
form.addEventListener('submit', (event) =>{
    event.preventDefault()
    localStorage.setItem(dados.email, JSON.stringify(dados))
    sucesso.classList.add('active')
    setTimeout(ocultarModal, 3000)
    
    

})

setTimeout(exibirModal, 15 * 60 * 1000)