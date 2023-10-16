// import wusp from "../header only.html";
//đoạn này dùng để thay đổi icon + - khi dùng chế độ màn hình bé trong phần navbar và đóng các category đang mở khi bấm vào 1 category khác

const button1 = document.getElementById("button1").innerHTML;
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const tab1 = document.getElementById("fridgesDetail");
const tab2 = document.getElementById("laundryDetail");
const tab3 = document.getElementById("conditioningDetail");
// console.log('button1:', wusp);
button1.addEventListener("click", function () {
    button2.classList.add("collapsed")
    button3.classList.add("collapsed")
    if (tab1.classList.contains("show")) {
        plusIcon1.style.display
    }
    if (tab2.classList.contains("show")) {
        tab2.classList.remove("show");
    }
    if (tab3.classList.contains("show")) {
        tab3.classList.remove("show");
    }
    
});
button2.addEventListener("click", function () {
    button1.classList.add("collapsed")
    button3.classList.add("collapsed")
    if (tab1.classList.contains("show")) {
        tab1.classList.remove("show");
    }
    if (tab3.classList.contains("show")) {
        tab3.classList.remove("show");
    }
});
button3.addEventListener("click", function () {
    button1.classList.add("collapsed")
    button2.classList.add("collapsed")
    if (tab1.classList.contains("show")) {
        tab1.classList.remove("show");
    }
    if (tab2.classList.contains("show")) {
        tab2.classList.remove("show");
    }
});