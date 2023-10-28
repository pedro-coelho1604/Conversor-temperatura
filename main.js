const btnF = document.querySelector('#f')
const btnC = document.querySelector('#c')

let resp = null

function pegaTemp() {
    const temp = document.querySelector('#temp')
    const valorTemp = temp.value
    return valorTemp
}

btnF.addEventListener('click', () => {
    var temp = pegaTemp()
    resp = (temp * 9 / 5) + 32
    document.querySelector('#resp').innerHTML =`A temperatura é ${resp}°F.`
})

btnC.addEventListener('click', () => {
    var temp = pegaTemp()
    resp = (temp - 32) * 5 / 9
    document.querySelector('#resp').innerHTML =`A temperatura é ${resp}°C.`
})