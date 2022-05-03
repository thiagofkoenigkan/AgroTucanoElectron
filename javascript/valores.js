export default function valores(){
    const dinSpan = document.querySelector('.din-span')
    const cartSpan = document.querySelector('.cart-span')
    const saiSpan = document.querySelector('.sai-span')
    const totSpan = document.querySelector('.tot-span')

    const dinInput = document.querySelector('#dinheiro-in')
    const cartInput = document.querySelector('#cartao-in')
    const sainput = document.querySelector('#saida-in')

    let dinTot = 0;

    let cartTot = 0;

    let saiTot = 0;

    let totGeral = 0;

    dinSpan.innerText = dinTot;
    cartSpan.innerText = cartTot;
    saiSpan.innerText = saiTot;
    totSpan.innerText = totGeral;

    

    dinInput.addEventListener('change', () => {

        let data = new Date()
        let horas = data.getHours()
        let minutos = data.getMinutes()

        const valoresTab = document.querySelector('.valores-dinheiro')
        const novoP = document.createElement('p')
        const spanTime = document.createElement('span')
        let DinheiroValor = +Number.parseFloat(document.querySelector('#dinheiro-in').value)

        if( isNaN(Number.parseFloat(document.querySelector('#dinheiro-in').value))) {
            DinheiroValor = 0
        } else {
        novoP.innerHTML = `R$ ` + ` ` + DinheiroValor.toFixed(2)
        spanTime.innerText = `${horas}:${minutos}`
        spanTime.classList.add('para-din-time')
        novoP.appendChild(spanTime)
        novoP.classList.add('para-din')
        valoresTab.appendChild(novoP)

        dinTot += +DinheiroValor.toFixed(2)

        dinSpan.innerText = dinTot

        totGeral = +dinTot + +cartTot - +saiTot

        totSpan.innerText = totGeral
        }
    })


    cartInput.addEventListener('change', () => {

        let data = new Date()
        let horas = data.getHours()
        let minutos = data.getMinutes()
    
        const valoresTab = document.querySelector('.valores-cartao')
        const novoP = document.createElement('p')
        const spanTime = document.createElement('span')
        let CartaoValor = +Number.parseFloat(document.querySelector('#cartao-in').value)
    
        if( isNaN(Number.parseFloat(document.querySelector('#cartao-in').value))) {
            CartaoValor = 0
        } else {
        novoP.innerHTML = `R$ ` + ` ` + CartaoValor.toFixed(2)
        spanTime.innerText = `${horas}:${minutos}`
        spanTime.classList.add('para-din-time')
        novoP.appendChild(spanTime)
        novoP.classList.add('para-din')
        valoresTab.appendChild(novoP)
    
        
    
        cartTot += +CartaoValor.toFixed(2)
        
        cartSpan.innerText = cartTot

        totGeral = +dinTot + +cartTot - (+saiTot)

        totSpan.innerText = totGeral
    
        }
})
}


