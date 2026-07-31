// ======================================
// UNTUK ISTRIKU IJAAAA 💙
// script.js
// ======================================

const PASSWORD = "852024";

const login = document.getElementById("login");
const loading = document.getElementById("loading");
const gift = document.getElementById("gift");
const gallery = document.getElementById("gallery");
const letter = document.getElementById("letter");

const music = document.getElementById("music");

// ============================
// PASSWORD
// ============================

function cekPassword(){

    const input = document.getElementById("pass").value;
    const error = document.getElementById("error");

    if(input === PASSWORD){

        error.innerHTML = "";

        login.style.display = "none";

        loading.style.display = "flex";

        setTimeout(()=>{

            loading.style.display = "none";

            gift.style.display = "flex";

            gift.classList.add("fade");

            music.play().catch(()=>{});

        },2000);

    }else{

        error.innerHTML =
        "masa ayang lupa tanggal nya kita pacaran Lee 🥺";

        navigator.vibrate?.(300);

    }

}

// ============================
// ENTER
// ============================

document.getElementById("pass")
.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        cekPassword();

    }

});

// ============================
// BUKA KADO
// ============================

function openGift(){

    const hadiah = document.querySelector(".gift-box");

    hadiah.style.transform="scale(1.4) rotate(12deg)";
    hadiah.style.opacity="0";

    setTimeout(()=>{

        gift.style.display="none";

        gallery.style.display="flex";

        gallery.classList.add("fade");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },800);

}

// ============================
// KE SURAT
// ============================

function nextLetter(){

    gallery.style.display="none";

    letter.style.display="flex";

    letter.classList.add("fade");

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// ============================
// FLOATING HEART
// ============================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=Math.random()>0.5?"💙":"🤍";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=
    (5+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,700);

// ============================
// BUTTON EFFECT
// ============================

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("mousedown",()=>{

        btn.style.transform="scale(.95)";

    });

    btn.addEventListener("mouseup",()=>{

        btn.style.transform="scale(1)";

    });

});

// ============================
// PRELOAD FOTO
// ============================

[
"assets/photo1.jpg",
"assets/photo2.jpg",
"assets/photo3.jpg",
"assets/background.jpg"
].forEach(src=>{

    const img=new Image();

    img.src=src;

});

// ============================
// MUSIC VOLUME
// ============================

music.volume=0.6;
