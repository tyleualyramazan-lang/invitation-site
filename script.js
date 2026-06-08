function nextPage(n){

    document.querySelectorAll(".page")
    .forEach(p=>p.classList.remove("active"));

    document.getElementById("p"+n)
    .classList.add("active");
}

/* YES */
document.getElementById("yesBtn")
.addEventListener("click",()=>{

    document.querySelectorAll(".page")
    .forEach(p=>p.classList.remove("active"));

    document.getElementById("p5")
    .classList.add("active");

    startConfetti();
});

/* ❌ NO батырмасы (қашпайды, жай disabled) */
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("click",()=>{

    noBtn.innerHTML = "😅 Бұл опция уақытша қолжетімсіз";

    noBtn.style.opacity = "0.5";
    noBtn.disabled = true;

});

/* ❤️ жүрек */
setInterval(()=>{

    const h=document.createElement("div");
    h.className="heart";
    h.innerHTML="❤️";
    h.style.left=Math.random()*100+"vw";

    document.body.appendChild(h);

    setTimeout(()=>h.remove(),5000);

},500);

/* 🎉 конфетти */
function startConfetti(){

    for(let i=0;i<80;i++){

        const c=document.createElement("div");
        c.className="confetti";
        c.style.left=Math.random()*100+"vw";

        const colors=["#fff","#ff0","#f0f","#0ff","#ff4d88"];
        c.style.background=
            colors[Math.floor(Math.random()*colors.length)];

        document.body.appendChild(c);

        setTimeout(()=>c.remove(),3000);
    }
}

/* 🎵 музыка */
function playMusic(){
    document.getElementById("music").play();
}