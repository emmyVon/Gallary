const currentDate = new Date()
const daysoftheweek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const monthstext = ['Jan','Feb','Mar','May','June','July','AUG','SEPT','OCT','NOV','DEC']
const indexofday = currentDate.getDay()
const dayname = daysoftheweek[indexofday]
const date = currentDate.getDate()
let month = currentDate.getMonth()-1
month = monthstext[month]
const year = currentDate.getFullYear()
document.querySelector('.day').innerText = `You visited: ${dayname},${date} ${month} ${year}`
const hidetext = document.getElementById('hide')
const ReadmoreBtn = document.getElementById('more')



ReadmoreBtn.addEventListener('click',function(){
    if(hidetext.classList.contains('hide')){
        hidetext.classList.remove('hide')
        hidetext.classList.add('show')
        return
    }
    else{
         hidetext.classList.remove('show')
        hidetext.classList.add('hide')
    }
})