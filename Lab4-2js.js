function show1(){
    show.removeEventListener("click",show1);
    show.classList.add("hidden");
    hide.classList.remove("hidden");
}

function show2() {
    hide.classList.add("hidden");
    details.classList.remove("hidden");
}

function hide1() {
    hide.classList.remove("hidden");
    details.classList.add("hidden");
}

const show = document.querySelector("#show1");
show.addEventListener("click", show1);

const hide = document.querySelector("#show2");
hide.addEventListener("click", show2);

const details = document.querySelector("#hide");
details.addEventListener("click", hide1);

