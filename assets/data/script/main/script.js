const alertError = document.querySelector('.error');
const alertWarning = document.querySelector('.warning');
const alertInfo = document.querySelector('.info');

const footerTrigger = document.querySelector('.footer');
const footerImg = document.querySelector('#svg-footer-img');

const contentError = document.querySelector('#error');
const contentWarning = document.querySelector('#warning');
const contentInfo = document.querySelector('#info');

const openTimeline = document.querySelector('.timeline');
const openDownload = document.querySelector('.download');
const openApply = document.querySelector('.apply');

let closeTime = "5000";

const timelineObtainable = false;
const downloadObtainable = false;
const applicationOpen = true;

let isAlertOpen = false;

const projLoca = document.querySelector('.selection')
const toggleModel = document.querySelector('#project-btn');
const toggleImage = document.querySelector('#image-btn');
const galleryLeft = document.querySelector('.card-left');
const galleryRight = document.querySelector('.card-right');
const galleryBtnModel = document.querySelector('#project-btn');
const galleryBtnImage = document.querySelector('#image-btn');
const modelStage = document.querySelector('.project-stage');
const imageStage = document.querySelector('.image-stage');

let activeCard = "none";

const closeDisclaimer = document.querySelector('.disclaimer-close');
const closeImage = document.querySelector('.image-close');
const closeModel = document.querySelector('.project-close');

const timeline = document.querySelector('.history');
const download = document.querySelector('.downloads');

closeDisclaimer.addEventListener("click", () => {
    document.querySelector(".disclaimer").hidden = true;
})

/*closeImage.addEventListener("click", () => {
    imageStage.close();
});

closeModel.addEventListener("click", () => {
    modelStage.close();
});

toggleModel.addEventListener("click", () => {
    galleryRight.classList.add("animation-right"); //starts the hide animation (right card)
    galleryLeft.classList.add("slide-right"); //translates the left card by x% (--> CSS)
    galleryLeft.style.transform = "translateX(60%)"; //makes the animation run more cleanly
    galleryBtnModel.disabled = true;
    activeCard = "left";
    setTimeout(() => {
        showStage();
    }, 400);
})

toggleImage.addEventListener("click", () => {
    galleryLeft.classList.add("animation-left"); 
    galleryRight.classList.add("slide-left");
    galleryRight.style.transform = "translateX(-60%)";
    galleryBtnImage.disabled = true;
    activeCard = "right";
    setTimeout(() => {
        showStage();
    }, 400);
});

function showStage(){
    if(activeCard == "left"){
        modelStage.showModal();
        modelStage.style.scale = "100%"
        setTimeout(() => {
            removeCardClassLeft();
        }, 600);
    }
    
    if(activeCard == "right"){
        imageStage.showModal();
        imageStage.style.scale = "100%"
        setTimeout(() => {
            removeCardClassRight();
        }, 600);
    }
}

function removeCardClassLeft(){
    galleryRight.classList.remove("animation-right");
    galleryLeft.classList.remove("slide-right");
    galleryLeft.style.transform = "translateX(0)";
    galleryBtnModel.disabled = false;
    activeCard = "none";
}

function removeCardClassRight(){
    galleryLeft.classList.remove("animation-left");
    galleryRight.classList.remove("slide-left");
    galleryLeft.style.transform = "translateX(0)";
    galleryRight.style.transform = "translateX(0)";
    galleryBtnImage.disabled = false;
    activeCard = "none";
}
*/

//------------

openTimeline.addEventListener("click", () => {
    if(timelineObtainable == true){
        timeline.scrollIntoView();
    }
    else if(timelineObtainable == false){
        contentWarning.innerHTML = "404 - not found";
        showWarning();
    }
    else{
        contentError.innerHTML = 'If the problem persists it is probably a bug, we will take care of it as soon as possible.';
        console.warn('showError triggered');
        showError();
    }
    isAlertOpen = true;
});

openDownload.addEventListener("click", () => {
    if(downloadObtainable == true){
        download.scrollIntoView();  
        contentInfo.innerHTML = "Press on the desired link to start the download";
        showInfo();      
    }
    else if(downloadObtainable == false){
        contentWarning.innerHTML = '404 - not found';
        showWarning();
    }
    else{
        contentError.innerHTML = 'If the problem persists it is probably a bug, we will take care of it as soon as possible.';
        console.warn('showError triggered');
        showError();
    }
    isAlertOpen = true;
});

openApply.addEventListener("click", () => {
    if(applicationOpen == true){
        contentInfo.innerHTML = 'Redirecting to Google Forms. Not working? <a href="https://forms.gle/48J8Mhf8ob88Z78t7" target="_blank">Use this link instead!</a>';
        window.open('https://forms.gle/48J8Mhf8ob88Z78t7')
        showInfo();
    }
    else if(applicationOpen == false){
        contentWarning.innerHTML = "404 - not found"
        showWarning();
    }
    else{
        contentError.innerHTML = 'If the problem persists it is probably a bug, we will take care of it as soon as possible.';
        console.warn('showError triggered');
        showError();
    }
    isAlertOpen = true;
});

function showError(){
    if(isAlertOpen == true){
        alertInfo.hidden = true;
        alertWarning.hidden = true;
        alertError.hidden = false;
        setTimeout(closeError, closeTime);
    }
    else if(isAlertOpen == false){
        alertError.hidden = false;
        setTimeout(closeError, closeTime);
    }
    else{
        console.error("isAlertOpen expected")
    }
}

function closeError(){
    alertError.hidden = true;
}

function showWarning(){
    if(isAlertOpen == true){
        alertError.hidden = true;
        alertInfo.hidden = true;
        alertWarning.hidden = false;
        setTimeout(closeWarning, closeTime);
    }
    else if(isAlertOpen == false){
        alertWarning.hidden = false;
        setTimeout(closeWarning, closeTime);
    }
    else{
        console.error("isAlertOpen expected")
    }
}

function closeWarning(){
    alertWarning.hidden = true;
}

function showInfo(){
    if(isAlertOpen == true){
        alertError.hidden = true;
        alertWarning.hidden = true;
        alertInfo.hidden = false;
        setTimeout(closeInfo, closeTime);
    }
    else if(isAlertOpen == false){
        alertInfo.hidden = false;
        setTimeout(closeInfo, closeTime);
    }
    else{
        console.error("isAlertOpen expected")
    }
}

function closeInfo(){
    alertInfo.hidden = true;
}

//-------------

const RMProject = document.querySelector('#scrollSelec');
RMProject.addEventListener('click', () => {
   projLoca.scrollIntoView(); 
});

//------------

//randomBackground();

function randomBackground(){
    const colorsA = ['#C77966','#703030'];
    const colorsB = ['#2F343B', '#E3CDA4'];
    const colorsC = ['#8CBEB2', '#F2EBBF']; 
    const colorsD = ['#F3B562', '#F06060'];
    
    for (let number = 1; number < 2; number++) {                
        const projectSlider = document.querySelector(`#card${number}`);
        projectSlider.style.backgroundColor = colorsA[Math.floor(Math.random() * colorsA.length)];
    }    

    for (let number = 2; number < 3; number++) {                
        const projectSlider = document.querySelector(`#card${number}`);
        projectSlider.style.backgroundColor = colorsB[Math.floor(Math.random() * colorsB.length)];
    }    

    for (let number = 3; number < 4; number++) {                
        const projectSlider = document.querySelector(`#card${number}`);
        projectSlider.style.backgroundColor = colorsC[Math.floor(Math.random() * colorsC.length)];
    }    

    for (let number = 4; number < 5; number++) {                
        const projectSlider = document.querySelector(`#card${number}`);
        projectSlider.style.backgroundColor = colorsD[Math.floor(Math.random() * colorsD.length)];
    }    
}