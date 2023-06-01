const response = document.querySelector('.box_result_result')
const adition = document.querySelector('#bt_ad')
const verify = document.querySelector('#bt_vr')
const newList = document.getElementById('bt_cleanlist')
const num = document.querySelector('.num');

const listaTxt = document.querySelector('#list')
let listNum = []

adition.onclick = aditionList
verify.onclick = verificarList
newList.onclick = generateList

//Adicionar
function aditionList (){
    
    let numValue = num.value;
    
    if (numValue > 0 && numValue <=100) {
        if (listNum.includes(parseInt(numValue, 10)) == false) {
            numValue = parseInt(numValue, 10)  // para cortar o zero a esquerda
            
            let item = document.createElement('option')
            
            listNum.push(numValue)
            item.text = `Número ${numValue} adicionado`;
            listaTxt.appendChild(item)            
            num.value = '';
            num.focus()  
        }else {
            window.alert('Esse número já está na lista')
            num.value = '';
            num.focus()
        }
    }else {
        window.alert('Numero invalido')
    }
}

//Veriicar 
function verificarList () {
    response.textContent = ''
    let numMaior = 0
    let numMenor = 100
    let numSoma = 0
    
    for (let c = 0; c < listNum.length; c++) {
        if (numMaior < listNum[c]) {
            numMaior = listNum[c]
        }
        if (listNum[c] < numMenor) {
            numMenor = listNum[c]
        }
        numSoma += listNum[c]
    }

    let listFrases = [`Ao todo temos ${listNum.length}`,`O maior número é ${numMaior}`, `O menor número é ${numMenor}`, `A soma dos numeros é ${numSoma}` ]
    console.log(listFrases)

    for (let c = 0; c < listFrases.length; c++){
        let info = document.createElement('p')
        info.innerHTML = `${listFrases[c]}`
        response.appendChild(info)
    }

}

// Nova Lista 
function generateList () {
    listaTxt.innerHTML = ''
    listNum = [] 
    response.innerHTML = ''
}

num.addEventListener('keydown', (event) => {
    console.log(event)
    if(event.keyCode === 13){
        aditionList()
    }
})