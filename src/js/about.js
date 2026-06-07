

  // the script from Sahar branch
const enBtn = document.getElementById("enBtn");
const drBtn = document.getElementById("drBtn");
const allText = document.querySelectorAll("[data-en]");
enBtn.onclick = () => {
  allText.forEach(item => {
    item.innerHTML = item.getAttribute("data-en");
  });
  document.body.style.direction = "ltr";
  enBtn.classList.add("active");
  drBtn.classList.remove("active");
};
drBtn.onclick = () => {
  allText.forEach(item => {
    item.innerHTML = item.getAttribute("data-dr");
  });
  document.body.style.direction = "rtl";
  drBtn.classList.add("active");
  enBtn.classList.remove("active");
};


/* ================= SCROLL ANIMATION ================= */
const scrollItems = document.querySelectorAll(
    '.scroll-left, .scroll-right'
    );
    window.addEventListener("scroll", () => {
        scrollItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if(itemTop < window.innerHeight - 100){
                item.classList.add("show");
            }    
        });
});


/* ================= LANGUAGE SYSTEM ================= */
    const allTexts = document.querySelectorAll("[data-en]");
    function setEnglish(){
        allTexts.forEach(item => {
         item.innerHTML = item.getAttribute("data-en");
        });
        document.body.style.direction = "ltr";
}   
    function setDari(){
        allTexts.forEach(item => {
            item.innerHTML = item.getAttribute("data-dr");    
        });  
        document.body.style.direction = "rtl";
}


/* ================= SCROLL ANIMATION ================= */
const animationItems = document.querySelectorAll(
    '.scroll-top, .scroll-bottom'
    );
    window.addEventListener("scroll", () => {
        animationItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if(itemTop < window.innerHeight - 100){
                item.classList.add("show");
            }
        });
    });

    
/*================= LANGUAGE SYSTEM ================= */    
    const purposeTexts = document.querySelectorAll("[data-en]");
    function setEnglish(){
        purposeTexts.forEach(item => {
            item.innerHTML = item.getAttribute("data-en");
        });
        document.body.style.direction = "ltr";
    }
    function setDari(){
        purposeTexts.forEach(item => {
            item.innerHTML = item.getAttribute("data-dr");
        });    
        document.body.style.direction = "rtl";
}

/*================= LANGUAGE SYSTEM ================= */    
const activityCards = document.querySelectorAll('.activity-card');

window.addEventListener("scroll", () => {

    activityCards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.classList.add("show");
        }

    });

});


/* ================= LANGUAGE SYSTEM ================= */
/* CONNECTED TO FIRST PAGE */

const activityTexts = document.querySelectorAll("[data-en]");

function setEnglish(){

    activityTexts.forEach(item => {

        item.innerHTML = item.getAttribute("data-en");

    });

    document.body.style.direction = "ltr";
}

function setDari(){

    activityTexts.forEach(item => {

        item.innerHTML = item.getAttribute("data-dr");

    });

    document.body.style.direction = "rtl";
}

const counters = document.querySelectorAll(".counter");

let started = false;

window.addEventListener("scroll", () => {

    const section = document.querySelector(".impact-section");

    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100 && !started){

        counters.forEach(counter => {

            let target = +counter.getAttribute("data-target");

            let count = 0;

            let speed = 80;

            let updateCounter = () => {

                if(count < target){

                    count++;

                    counter.innerText = count;

                    setTimeout(updateCounter, speed);

                }

            }

            updateCounter();

        });

        started = true;
    }

});
