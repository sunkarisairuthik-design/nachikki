/* =====================================
   OUR LITTLE WORLD
   Phase 1 - Part 6
===================================== */

// =======================
// IMPORTANT
// Change these dates
// =======================

// Your relationship start date
const relationshipDate = new Date(2025, 4, 3); // May 3, 2025 (month is 0-based)

// Her birthday
const birthday = new Date(2006, 12, 12); // December 12, 2006 (month is 0-based)

// Anniversary
const anniversary = new Date(2025, 4, 3); // May 3, 2025 (month is 0-based)


// =======================
// Greeting
// =======================
const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

let greetingText = "";

if(hour < 12){

    greetingText = "🌞 Good Morning";

}
else if(hour < 17){

    greetingText = "☀️ Good Afternoon";

}
else if(hour < 21){

    greetingText = "🌇 Good Evening";

}
else{

    greetingText = "🌙 Good Night";

}

if(greeting){

    greeting.innerHTML = greetingText + " ❤️";

}

// =======================
// Days Together
// =======================
const today = new Date();

const diff = today - relationshipDate;

const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

const daysCard = document.getElementById("daysTogether");

if (daysCard) {

    let count = 0;

    const timer = setInterval(() => {

        count += Math.ceil(totalDays / 50);

        if (count >= totalDays) {

            count = totalDays;
            clearInterval(timer);

        }

        daysCard.textContent = count + " Days";

    }, 30);

}

animateValue("memoryCount", 12);
animateValue("letterCount", 18);
animateValue("songCount", 9);

function animateValue(id, value){

    const element=document.getElementById(id);

    if(!element) return;

    let count=0;

    const speed=Math.max(15,Math.floor(800/value));

    const timer=setInterval(()=>{

        count++;

        element.textContent=count;

        if(count>=value){

            clearInterval(timer);

        }

    },speed);

}

// =======================
// Countdown Function
// =======================

function countdown(target){

    const now = new Date();

    target.setFullYear(now.getFullYear());

    if(target < now){

        target.setFullYear(now.getFullYear()+1);

    }

    const distance = target - now;

    return Math.ceil(distance / (1000*60*60*24));

}


// Birthday

const birthdayText = document.getElementById("birthdayCountdown");

if(birthdayText){

    birthdayText.innerHTML = countdown(birthday)+" Days";

}


// Anniversary

const anniversaryText = document.getElementById("anniversaryCountdown");

if(anniversaryText){

    anniversaryText.innerHTML = countdown(anniversary)+" Days";

}


// =======================
// Daily Surprise
// =======================



const surprises = [

"❤️ You are my favorite person in the world.",

"🌹 Every day with you is a beautiful gift.",

"🥰 You make my ordinary days extraordinary.",

"💕 Home is wherever you are.",

"✨ You are my greatest blessing.",

"💖 Loving you is the easiest thing I've ever done.",

"🌸 Thank you for choosing me every day.",

"😊 Your smile is still my favorite view.",

"🌍 If I had to choose again, I'd still choose you.",

"💌 You're the best chapter of my life.",

"❤️ My heart feels complete with you.",

"🌹 You're my sunshine on cloudy days.",

"🥹 I fall in love with you a little more every day.",

"💕 Forever doesn't seem long enough with you.",

"✨ You make every memory beautiful.",

"❤️ Our little world is my favorite place.",

"🌸 Every heartbeat reminds me of you.",

"🥰 Thank you for every laugh, hug, and smile.",

"💖 You are my today and all my tomorrows.",

"❤️ I love you more than yesterday, but less than tomorrow."


];
const quote = document.getElementById("dailyQuote");

if (quote) {

    const today = new Date();

    const index = today.getDate() + (today.getMonth() * 31);

    quote.textContent = surprises[index % surprises.length];

}
/* ===========================
   Relationship Progress
=========================== */

// Progress based on a 5-year journey
const startDate = new Date(2025, 4, 3);
const endDate = new Date(2030, 4, 3);

const now = new Date();

const total = endDate - startDate;
const passed = now - startDate;

let progress = Math.floor((passed / total) * 100);

progress = Math.max(0, Math.min(progress, 100));

const progressFill = document.getElementById("progressFill");
const progressPercent = document.getElementById("progressPercent");

if(progressFill){
    progressFill.style.width = progress + "%";
}

if(progressPercent){
    progressPercent.textContent = progress + "%";

}
const memories = [

{
image:"images/first-selfie.jpg",
text:"❤️ The selfie where our beautiful story began."
},

{
image:"images/cycle-date.jpg",
text:"🚲 Our peaceful cycling date together."
},

{
image:"images/kitchen.jpg",
text:"🍳 Every ordinary moment feels special with you."
},

{
image:"images/mirror-hug.jpg",
text:"🤍 Wrapped in the safest hug."
},

{
image:"images/classroom.jpg",
text:"📚 Just sitting together made an ordinary day unforgettable."
},

{
image:"images/black-white.jpg",
text:"🖤 Every smile, every hug, every heartbeat—our love in one frame."
},

{
image:"images/dog-filter.jpg",
text:"🐶 Even our goofy moments become treasured memories."
},

{
image:"images/window.jpg",
text:"🌅 Side by side, looking toward every new adventure together."
},

{
image:"images/forehead-kiss.jpg",
text:"💋 A forehead kiss worth remembering forever."
},

{
image:"images/night.jpg",
text:"🌙 Smiles that lit up the night."
},

{
image:"images/temple.jpg",
text:"🛕 A peaceful day spent together."
},

{
image:"images/green-dress.jpg",
text:"🌿 Every outing with you becomes my favorite."
},

{
image:"images/traditional.jpg",
text:"✨ Looking beautiful together in traditional outfits."
},

{
image:"images/our-photo.jpg",
text:"📷 One more beautiful page in our love story."
},

{
image:"images/look.jpg",
text:"🥹 The way we look at each other says everything."
},

{
image:"images/together.jpg",
text:"❤️ Wherever we are, that's my favorite place."
}



];

let currentMemory = 0;

const sliderImage = document.getElementById("sliderImage");
const sliderCaption = document.getElementById("sliderCaption");

function changeMemory(){

if(!sliderImage) return;

currentMemory++;

if(currentMemory >= memories.length){

currentMemory = 0;

}

sliderImage.style.opacity = 0;

setTimeout(()=>{

sliderImage.src = memories[currentMemory].image;

sliderCaption.textContent = memories[currentMemory].text;

sliderImage.style.opacity = 1;

},400);

}

setInterval(changeMemory,4000);

