export default function sectionChange(){
    const navItens = Array.from(document.querySelectorAll('.nav-item'))

    navItens.forEach((i) => {
        i.addEventListener('click', () => {
            for(let a = 0; a < 3; a++){
                console.log(a)

                navItens[a].classList.remove('item-active')
            }

            console.log(i.innerText)

            if(i.innerText === 'Relatório Diário'){
                navItens[0].classList.add('item-active')

            } else if(i.innerText === 'Boletos'){
                navItens[1].classList.add('item-active')
            } else{
                navItens[2].classList.add('item-active')

            }
        })
    })
}