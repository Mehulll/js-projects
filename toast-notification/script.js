const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener('click' , () => {
    cN();
});

function cN(){
    const notif = document.createElement
    ('div');
    notif.classList.add('toast');

    notif.innerHTML =  'This challenge is crazy';

    container.appendChild(notif);

    setTimeout(() =>{
        notif.remove();
    },3000);
}