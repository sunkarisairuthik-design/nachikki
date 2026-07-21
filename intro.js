/*=================================
        TYPEWRITER EFFECT
=================================*/

const message = `Every memory with you is my favorite story.
Every smile of yours brightens my world.
Welcome to Our Little World,
where every heartbeat belongs to us. ❤️`;

const typing = document.getElementById("typing");

let index = 0;

function typeWriter() {

    if (index < message.length) {

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 45);

    }

}

typeWriter();

/*=================================
        BUTTON
=================================*/

const btn = document.getElementById("beginBtn");

btn.onclick = () => {

    document.body.style.transition = "1s";

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "letter.html";

        // If your homepage is index.html
        // window.location.href = "index.html";

    }, 1000);

};

/*=================================
      HEART PARTICLES
=================================*/

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = ["❤️","💕","🤍","💖","🌹"][Math.floor(Math.random()*5)];

    heart.style.position = "fixed";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.bottom = "-40px";

    heart.style.fontSize = (18 + Math.random()*18) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    heart.style.transition = "transform 6s linear, opacity 6s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform = `translateY(-110vh) rotate(${360+Math.random()*360}deg)`;

        heart.style.opacity = "0";

    },100);

    setTimeout(() => {

        heart.remove();

    },6200);

},600);

/*=================================
       BUTTON GLOW
=================================*/

setInterval(()=>{

    btn.animate([

        {
            boxShadow:"0 0 0 rgba(201,124,109,0)"
        },

        {
            boxShadow:"0 0 35px rgba(201,124,109,.7)"
        },

        {
            boxShadow:"0 0 0 rgba(201,124,109,0)"
        }

    ],{

        duration:1800

    });

},1800);