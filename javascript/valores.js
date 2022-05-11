export default function valores(){
    const dinSpan = document.querySelector('.din-span')
    const cartSpan = document.querySelector('.cart-span')
    const saiSpan = document.querySelector('.sai-span')
    const totSpan = document.querySelector('.tot-span')

    const dinInput = document.querySelector('#dinheiro-in')
    const cartInput = document.querySelector('#cartao-in')
    const sainput = document.querySelector('#saida-in')

    const dataH2 = document.querySelector('.data')

    let data = new Date()
    let dia = data.getDate()
    let mes = data.getUTCMonth()
    let ano = data.getUTCFullYear()
    let dataAtual =  `${dia}-${mes+1}-${ano}`
    dataH2.innerText = `${dataAtual}`
    
    

    let dinTot
    dinTot = +localStorage.getItem('dinTot', dinTot);

    let cartTot
    cartTot = +localStorage.getItem('cartTot', cartTot);

    let saiTot
    saiTot = +localStorage.getItem('saiTot', saiTot);

    let totGeral
    totGeral = +localStorage.getItem('totGeral', totGeral);

    dinSpan.innerText = dinTot
    cartSpan.innerText = cartTot
    saiSpan.innerText = saiTot
    totSpan.innerText = totGeral

    dinInput.addEventListener('change', () => {
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
        minutos < 10 ? spanTime.innerText = `${horas}:0${minutos}` : spanTime.innerText = `${horas}:${minutos}`
        spanTime.classList.add('para-din-time')
        novoP.appendChild(spanTime)
        novoP.classList.add('para-din')
        valoresTab.appendChild(novoP)

        dinTot += +DinheiroValor.toFixed(2)

        dinSpan.innerText = dinTot

        totGeral = +dinTot + +cartTot - +saiTot

        totSpan.innerText = totGeral

        localStorage.setItem('dinTot', dinTot)
        localStorage.setItem('totGeral', totGeral)
        }
    })

    cartInput.addEventListener('change', () => {
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
        minutos < 10 ? spanTime.innerText = `${horas}:0${minutos}` : spanTime.innerText = `${horas}:${minutos}`
        spanTime.classList.add('para-din-time')
        novoP.appendChild(spanTime)
        novoP.classList.add('para-din')
        valoresTab.appendChild(novoP)
    
        cartTot += +CartaoValor.toFixed(2)
        
        cartSpan.innerText = cartTot

        totGeral = +dinTot + +cartTot - (+saiTot)

        totSpan.innerText = totGeral

        localStorage.setItem('cartTot', cartTot)
        localStorage.setItem('totGeral', totGeral)
        }
})

sainput.addEventListener('change', () => {
    let horas = data.getHours()
    let minutos = data.getMinutes()

    const valoresTab = document.querySelector('.valores-saida')
    const novoP = document.createElement('p')
    const spanTime = document.createElement('span')
    let SaidaValor = +Number.parseFloat(document.querySelector('#saida-in').value)

    if( isNaN(Number.parseFloat(document.querySelector('#saida-in').value))) {
        SaidaValor = 0
    } else {
    novoP.innerHTML = `R$ ` + ` ` + SaidaValor.toFixed(2)
    minutos < 10 ? spanTime.innerText = `${horas}:0${minutos}` : spanTime.innerText = `${horas}:${minutos}`
    spanTime.classList.add('para-din-time')
    novoP.appendChild(spanTime)
    novoP.classList.add('para-din')
    valoresTab.appendChild(novoP)

    saiTot += +SaidaValor.toFixed(2)
    
    saiSpan.innerText = saiTot

    totGeral = +dinTot + +cartTot - (+saiTot)

    totSpan.innerText = totGeral

    localStorage.setItem('saiTot', saiTot)
    localStorage.setItem('totGeral',  totGeral)
    }
})

const buttonFechar = document.querySelector('.fecharCaixa')

buttonFechar.addEventListener('click', () => {
    const confirmaçao = confirm('Se confirmar os valores serão apagados e um arquivo com os valores totais será criado, você tem certeza?')
    if(confirmaçao){
    let horas = data.getHours()
    let minutos = data.getMinutes()
    let horaAtual = minutos < 10 ? `${horas}:0${minutos}` : `${horas}:${minutos}`
    
    const opt = {
            margin:       3,
            filename:  `${dataAtual} - ${horaAtual}.pdf`
    };
    const element = document.querySelector('.print');
    html2pdf(element, opt)


    const timeout = setTimeout(function(){
        localStorage.clear()
        location.reload()
    }, 500);
    }

    

    
})

}


