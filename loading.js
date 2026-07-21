/*=================================
        IMAGES
=================================*/

const images = [

"images/first-selfie.jpg",
"images/cycle-date.jpg",
"images/night.jpg",
"images/temple.jpg",
"images/kitchen.jpg",
"images/mirror-hug.jpg",
"images/traditional.jpg",
"images/green-dress.jpg"

];

/*=================================
        MESSAGES
=================================*/

const messages = [

"❤️ Collecting our beautiful moments...",
"📸 Finding our first selfie...",
"🌙 Remembering our first night ride...",
"🛕 Visiting our first temple date...",
"💕 Counting every smile...",
"🤗 Reliving our warm hugs...",
"🌹 Every memory is priceless...",
"✨ Almost ready..."

];

/*=================================
        ELEMENTS
=================================*/

const progressBar = document.getElementById("progressBar");
const percent = document.getElementById("percent");
const loadingText = document.getElementById("loadingText");
const slideImage = document.getElementById("slideImage");

/*=================================
        SLIDESHOW
=================================*/

let imageIndex = 0;

setInterval(() => {

    imageIndex++;

    if(imageIndex >= images.length){

        imageIndex = 0;

    }

    slideImage.style.opacity = "0";

    setTimeout(() => {

        slideImage.src = images[imageIndex];

        slideImage.style.opacity = "1";

    },300);

},2500);

/*=================================
      LOADING PROGRESS
=================================*/

let progress = 0;

const loader = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";

    percent.innerHTML = progress + "%";

    if(progress < 15){

        loadingText.innerHTML = messages[0];

    }

    else if(progress < 30){

        loadingText.innerHTML = messages[1];

    }

    else if(progress < 45){

        loadingText.innerHTML = messages[2];

    }

    else if(progress < 60){

        loadingText.innerHTML = messages[3];

    }

    else if(progress < 75){

        loadingText.innerHTML = messages[4];

    }

    else if(progress < 90){

        loadingText.innerHTML = messages[5];

    }

    else if(progress < 100){

        loadingText.innerHTML = messages[6];

    }

    else{

        loadingText.innerHTML = messages[7];

    }

    if(progress >= 100){

        clearInterval(loader);

        setTimeout(() => {

            document.body.style.transition = "1s";
            document.body.style.opacity = "0";

            setTimeout(() => {

                window.location.href = "index.html";

            },1000);

        },1200);

    }

},80);

/*=================================
        IMAGE FADE
=================================*/

slideImage.style.transition = "0.6s";