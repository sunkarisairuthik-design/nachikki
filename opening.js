const petals=["🌹","🌸","💖","❤️","✨"];

setInterval(()=>{

const p=document.createElement("div");

p.className="petal";

p.innerHTML=petals[Math.floor(Math.random()*petals.length)];

p.style.left=Math.random()*100+"vw";

p.style.top="-30px";

p.style.animationDuration=(6+Math.random()*4)+"s";

document.body.appendChild(p);

setTimeout(()=>{

p.remove();

},10000);

},300);

setTimeout(()=>{

document.body.style.transition="2s";

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href="intro.html";

},2000);

},9000);