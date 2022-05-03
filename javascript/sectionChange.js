export default function sectionChange(){
    const navItens = Array.from(document.querySelectorAll('.nav-item'))
    const allSections = Array.from(document.querySelectorAll('.app-section'))
    navItens.forEach((i) => {
        i.addEventListener('click', () => {
            for(let a = 0; a < 3; a++){
                navItens[a].classList.remove('item-active')
                allSections[a].classList.remove('section-active')
            }
            if(i.innerText === 'Relatório Diário'){
                navItens[0].classList.add('item-active')
                allSections[0].classList.add('section-active')
            } else if(i.innerText === 'Boletos'){
                navItens[1].classList.add('item-active')
                allSections[1].classList.add('section-active')
            } else{
                navItens[2].classList.add('item-active')
                allSections[2].classList.add('section-active')
            }
        })
    })
}