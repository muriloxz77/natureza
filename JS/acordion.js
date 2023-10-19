const imagens = document.querySelectorAll('.image-list li')
const textos = document.querySelectorAll('.conteudo section')


export function ativarConteudo(indice){

    textos.forEach((item)=>{
        item.classList.remove('active')
    })
    textos[indice].classList.add('active')
}

imagens.forEach((item, indice)=>{
    item.addEventListener('click', ()=>{
        ativarConteudo(indice)
    })
})

const perguntas = document.querySelectorAll('#faq .perguntas')
const respostas = document.querySelectorAll('#faq .respostas')

export function ativarRespostas(indice){
    respostas[indice].classList.add('active')
}

export function removerRespostas(indice) {
    perguntas[indice].addEventListener('click', () => {
        if (respostas[indice].classList.contains('active')) {
            respostas[indice].classList.remove('active');
        }
        else {
            respostas[indice].classList.add('active');
        }
    });
}
perguntas.forEach((item, indice)=>{
    item.addEventListener('click', ()=>{
        ativarRespostas(indice)
        removerRespostas(indice)
    })
})
