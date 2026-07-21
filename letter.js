/*==================================
        ELEMENTS
==================================*/

const envelope = document.getElementById("envelope");
const continueBtn = document.getElementById("continueBtn");

let opened = false;

/*==================================
      OPEN ENVELOPE
==================================*/

envelope.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    envelope.classList.add("open");

    createHeartBurst();

    // Optional: play music automatically
    // document.getElementById("bgMusic").play();

});

/*==================================
      CONTINUE BUTTON
==================================*/

continueBtn.addEventListener("click",()=>{

    document.body.style.transition="1s";

    document.body.style.opacity="0";

    setTimeout(()=>{

        // Change this if your dashboard has another name
       window.location.href = "loading.html";

    },1000);

});

/*==================================
      HEART BURST
==================================*/

function createHeartBurst(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.innerHTML=["❤️","💕","💖","🤍","🌹"][Math.floor(Math.random()*5)];

        heart.style.position="fixed";

        heart.style.left=(window.innerWidth/2)+"px";

        heart.style.top=(window.innerHeight/2)+"px";

        heart.style.fontSize=(18+Math.random()*20)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="99999";

        document.body.appendChild(heart);

        const angle=Math.random()*Math.PI*2;

        const distance=180+Math.random()*220;

        const x=Math.cos(angle)*distance;

        const y=Math.sin(angle)*distance;

        heart.animate([

            {

                transform:"translate(0,0) scale(0)",

                opacity:1

            },

            {

                transform:`translate(${x}px,${y}px) rotate(${Math.random()*720}deg) scale(1.5)`,

                opacity:0

            }

        ],{

            duration:2200,

            easing:"ease-out"

        });

        setTimeout(()=>{

            heart.remove();

        },2200);

    }

}

/*==================================
     FLOATING HEARTS
==================================*/

setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML=["❤️","💕","💖","🤍"][Math.floor(Math.random()*4)];

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-30px";

    heart.style.fontSize=(15+Math.random()*18)+"px";

    heart.style.opacity=".8";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    document.body.appendChild(heart);

    heart.animate([

        {

            transform:"translateY(0)",

            opacity:.9

        },

        {

            transform:"translateY(-120vh)",

            opacity:0

        }

    ],{

        duration:7000,

        easing:"linear"

    });

    setTimeout(()=>{

        heart.remove();

    },7000);

},500);

/*==================================
      LETTER GLOW
==================================*/

setInterval(()=>{

    envelope.animate([

        {

            transform:"translateY(0px)"

        },

        {

            transform:"translateY(-8px)"

        },

        {

            transform:"translateY(0px)"

        }

    ],{

        duration:2500

    });

},2500);

/*==================================
      MUSIC (OPTIONAL)
==================================*/

// If you add:
//
// <audio id="bgMusic" loop>
//     <source src="music/perfect.mp3">
// </audio>
//
// Uncomment the line below inside the envelope click event:
//
// document.getElementById("bgMusic").play();