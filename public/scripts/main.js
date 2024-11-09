
const modal_ctn = document.getElementById("modal-ctn");

const ip_modal = document.getElementById("modal-ip");

const cnt_btn = document.getElementById("cnt-btn");

const prj_btn = document.getElementById("prj-btn");

const abt_btn = document.getElementById("abt-btn");

const span_cnt = document.getElementById("cnt-close");

const span_ip = document.getElementById("ip-close");

cnt_btn.onclick = function() {
  modal_ctn.style.display = "block";
}

prj_btn.onclick = function() {
  ip_modal.style.display = "block";
}

abt_btn.onclick = function () {
    ip_modal.style.display = "block";
}

span_cnt.onclick = function () {
    modal_ctn.style.display = "none";
}

span_ip.onclick = function () {
    ip_modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal_ctn) {
    modal_ctn.style.display = "none";
    }
    if (event.target == ip_modal) {
        ip_modal.style.display = "none";
    }
}



function Copy(element, text) {
    const before = element.innerHTML;
    navigator.clipboard.writeText(text);
    element.innerText = "Copied!";
    setTimeout(() => {
        element.innerHTML = before;
    }, 1000);
     }