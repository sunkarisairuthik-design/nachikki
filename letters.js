const btn = document.querySelector(".openLetter");

const content = document.querySelector(".letter-content");

btn.addEventListener("click", () => {

    if(content.style.display==="block"){

        content.style.display="none";

        btn.innerHTML="Read Letter";

    }else{

        content.style.display="block";

        btn.innerHTML="Close Letter";

    }

});