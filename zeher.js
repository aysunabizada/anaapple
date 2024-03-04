const bars = document.querySelector(".bars");
const apple = document.querySelector(".apple");
const glass = document.querySelector(".glass");
const shop = document.querySelector(".shop");
const hiddenbars = document.querySelector(".hiddenbars");

let flag = false;
// burger menyunu acir
function OpenBars() {
    if (flag == false) {
        hiddenbars.style.display = "block";
        apple.style.display = "none";
        shop.style.display = "none";
        glass.style.display = "none";
        bars.style.display = "none";
        flag = true;
    } else {
        hiddenbars.style.display = "none";
        apple.style.display = "block";
        glass.style.display = "block";
        shop.style.display = "block";
        bars.style.display = "block";
        flag = false;
    }
}

