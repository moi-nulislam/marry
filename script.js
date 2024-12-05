function clickNo() {
    let no = document.querySelector('.no');
    let yes = document.querySelector('.yes');

    no.classList.add('yes-temp');
    yes.classList.add('no-temp');

    no.classList.remove('no');
    yes.classList.remove('yes');

    no.classList.add('yes');
    yes.classList.add('no');
}

function clickYes() {
    let no = document.querySelector('.no');
    let yes = document.querySelector('.yes');
    let qn = document.querySelector('.qn');
    let msg = document.querySelector('.msg');
    let body = document.body;
    
    yes.style.display = "none";
    no.style.display = "none";
    qn.style.display = "none";

    body.style.backgroundColor = "#8fb5d6";
    msg.innerHTML = "I knew you'd say YES my Mahdiat! ❤️";
    msg.style.fontSize = "5rem";
    msg.style.transition = "color 0.5s";

}