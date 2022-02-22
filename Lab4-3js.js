function reset(){
    parent.style.backgroundColor = 'lightcoral';
    child.style.backgroundColor = 'lightpink';
}

function outside1(){
    parent.style.backgroundColor = 'pink';
}

function inside1(){
    child.style.backgroundColor = 'orange';
}

const parent = document.querySelector('.outside')
parent.addEventListener('click', outside1)

const child = document.querySelector('.inside')
child.addEventListener('click', inside1)

const button = document.querySelector('.button')
button.addEventListener('click', reset)