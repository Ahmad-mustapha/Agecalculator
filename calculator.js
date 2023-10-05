const userInput = document.querySelector('#date')
userInput.max = new Date().toISOString().split('T')[0]
console.log(userInput.max)
const gen = document.querySelector('button')
const display = document.querySelector('#result')

// console.log(userInput.max)
gen.addEventListener('click', ()=>{
    let dateOfBirth = new Date(userInput.value)
    // console.log(dateOfBirth)

    let d1 = dateOfBirth.getDate()
    let m1 = dateOfBirth.getMonth() + 1
    let y1 = dateOfBirth.getFullYear()
    // console.log(y1)

    let today = new Date()

    let d2 = today.getDate()
    let m2 = today.getMonth() + 1
    let y2 = today.getFullYear()

    let d3, m3, y3
    y3 = y2 - y1

    if(m2 >= m1){
        m3 = m2 - m1
    }else{
        y3--
        m3 = 12 + m2 - m1
    }
    if(d2 >= d1){
        d3 = d2 - d1
    }else{
        m3--
        d3 = getDaysInMonth(y1, m1) + d2 - d1
    }
    if(m3 < 0){
        m3 = 11;
        y3--
    }
    // console.log(y3, m3, d3)
    display.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old`
    display.style.marginTop = '2.5rem'
    function getDaysInMonth(year, month){
        return new Date(year, month, 0).getDate()
    }
})