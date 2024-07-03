let a =Math.round(Math.random()*99 + 1)

let raqam = document.getElementById ('salom')
raqam.textContent = a

if(a > 50 ){
    raqam.style.color ='blue'
    raqam.style.background ='aqua'
}else{
    raqam.style.color ='pink'
    raqam.style.background ='gray'
}