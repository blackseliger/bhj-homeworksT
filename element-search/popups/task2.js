let modal_main = document.getElementById("modal_main");
let btn_danger = document.getElementsByClassName("btn_danger");
let modal_success = document.getElementById("modal_success");
let btn_success = document.getElementsByClassName("btn_success");
let modal__close = document.querySelectorAll(".modal__close_times");



btn_danger[0].onclick = () => {
    modal_main.className = "modal";
    modal_success.className = "modal modal_active";
}

btn_success[0].onclick = () => {
    return false;
}

let modal_close = Array.from(modal__close);

console.log(Array.isArray(modal_close));

console.log(modal_close.length);

modal_close.forEach(x => console.log(x));

modal_close.forEach(function(x) {
                       x.onclick = function() {
                            console.log(`its work`)
                            this.closest(".modal").className = "modal modal__close";
    }
});






