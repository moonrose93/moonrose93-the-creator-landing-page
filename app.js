
/*Right button for joining from the menu with contact form:*/

const rightBtnDesktop = document.getElementById("btn-desktop");

rightBtnDesktop.addEventListener('click',()=>{
  
    window.location.href = "form.html";
  
});

const rightBtnTablet = document.getElementById("right-btn-tablet");

rightBtnTablet.addEventListener('click',()=>{
  
    window.location.href = "form.html";
  
});






/*1.Countdown */

/*Kreiranjeto na target datata go pravime nadvor od funkcijata */
const targetDate = new Date();

targetDate.setDate(targetDate.getDate()+880)

/*od denesniot datum ja kreirame target datata pa zatoa target datata ja stavame so denesen datum posle to na targetdatata i dodavame setDate kade sto od target datata 
denesniot den ja zemame datata +26 od denesniot den () getDate.

target date go pravime od densnata data da broi 26 dena napred pa zatoa gi koristime setDate methodot i getDate methodot za od denesnata data get date metodot da racuna uste 26 dena.

So setDate methodot attached na target date nie vsusnost ja kreirame tarhetFate (targetiranata data )

1. Sakame od targert datata da kreirame data od densniot den

Od denesnata data koja se sodrzi vo targetdate variablata vsusnost nie kreirame target data so set i get methodite prikaceni na denesnata data.

2. kreirame data so setDate funkcijata kade sto vnatre vo set date ja zemame denesnata data i dodavame +26 dena */

const countDown =()=>{

    /*Ja zemame denesnata data */
    const currentDate = new Date();

   /*Ja racuname vremenskata razlika megu target datata i denesnata data.
   Sekogas morame da ja izrachuname vremenskata razlika za ponatamu da gi dobieme denovite, saatite minutite i sekundite sto preostanuvaat.
   Za toa ja koristime getTime() funkcijata.
   Bidejki target datata e pogolema brojka ja minusirame od denesnata data zaedno so getTime() funkcijata */

   const TimeDifference = targetDate.getTime() - currentDate.getTime();

   /*Potoa mozheme da gi racuname denovite saatite i minutite kade sto najprvo vremenskata razlika ja delime so sekvenci za sekundi minuti saati i denovi se ova
    zaokruzeno vo math floor funkcijata za da dobieeme cel broj za denovi.
   Potoa za da gi dobieme denovite vremenskata razlika i reminder od denovite se deli so sekvenci za da se dobie saatot i taka natamu.
    Isto taka cifrite za sekvenci odat vo zagradi kako i celoto delenje xo TimeDifference. Isto taka se toa ide vnatre vo Math floor.

    */


    const daysCal = Math.floor((TimeDifference / (1000*60*60*24)));
    const hoursCal = Math.floor((TimeDifference % (1000*60*60*24) / (1000*60*60)));
    const minutesCal = Math.floor((TimeDifference %(1000*60*60) / (1000*60)));
    const secondsCal = Math.floor((TimeDifference % (1000*60) / (1000)));

   /*  Vsusnost za da gi dobieme denovite nie ja delime vremenskata razlika so sekvenci i pota za saatite gi delime
     sekvencite od denovite so sekvencite za saatite i reminder zavremenskata razlika. taka gi dobivame saatite.
     Istoto go pravime i ponatamu za dobivanje minuti i sekundi. reminder ima sekade osven na denovite bidejki direkno se delat so timedifference */


    const days= document.getElementById("days");
const hrs = document.getElementById("hr");
const min= document.getElementById("min");
const sec = document.getElementById("sec");

days.innerHTML = `${daysCal}`;
hrs.innerHTML = `${hoursCal}`;
min.innerHTML = `${minutesCal}`;
sec.innerHTML = `${secondsCal}`;

}

countDown();

setInterval(countDown,1000);


/*2. Looping throught partners array- On every click different partner will be displayed */

const btnBack = document.getElementById("button-back");
const btnNext = document.getElementById("button-next-s");
const twitterBlock = document.getElementById("twitter");
const pinterestBlock = document.getElementById("pinterest");
const linkedInBlock = document.getElementById("linkedin");

let currentBlockIndex = 0; // Track the index of the currently displayed block,starting innitial index is 0.

// Array to hold all block elements
const blocks = [twitterBlock, pinterestBlock, linkedInBlock];




btnNext.addEventListener("click", () => {
    // Hide the current block
    blocks[currentBlockIndex].style.display = "none";

    // Move to the next block index, looping back to the start if at the end
    currentBlockIndex = (currentBlockIndex + 1) % blocks.length;

    // Show the next block
    blocks[currentBlockIndex].style.display = "block";
});

btnBack.addEventListener("click", () => {
    // Hide the current block
    blocks[currentBlockIndex].style.display = "none";

    // Move to the previous block index, looping back to the end if at the start
    currentBlockIndex = (currentBlockIndex - 1 + blocks.length) % blocks.length;

    // Show the previous block
    blocks[currentBlockIndex].style.display = "block";
});

//3.scrool toview 

const partnersLink = document.getElementById("partners-link");
const partnersBlock = document.getElementById("partners-block");

partnersLink.addEventListener("click", ()=>{
  partnersBlock.scrollIntoView({behavior: 'smooth'})
})


const howWeWorkLink = document.getElementById("how-we-work-link");
const howWeWorkContainer = document.getElementById("how-we-work");

howWeWorkLink.addEventListener("click", ()=>{
  howWeWorkContainer.scrollIntoView({behavior: 'smooth'})
})


const reviewLink = document.getElementById("review-link");
const reviewContainer = document.getElementById("review");

reviewLink.addEventListener("click", () =>{
  reviewContainer.scrollIntoView({behavior: 'smooth'})
})

const charityLink = document.getElementById("charity-link");
const charityContainer = document.getElementById("charity");

charityLink.addEventListener("click",() =>{
  charityContainer.scrollIntoView({behavior: 'smooth'})
})



/*4.click on the join btn if the email is entered correctly then the page to be opened. */
const joinEmailBtn = document.getElementById("join-btn-email");

const joinEmailBtnDown = document.getElementById("join-btn-email-down");

const inputEmail = document.getElementById("input-email");

const inputEmailDown = document.getElementById("input-email-down");

const textValidation = document.getElementById("text-for-validation");

const textValidationDown = document.getElementById("text-for-validation-down");

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

/*When you define inputValue outside of the event listener, it
captures the value of the input field only once when the script is initially run. It doesn't get updated when the input field's value changes.

To fix this, you need to move the inputValue variable declaration inside the event listener callback function, so that it captures the updated value of
the input field each time the event is triggered */


  inputEmail.addEventListener("input", () => {
    const inputValue = inputEmail.value;
    if (!regexEmail.test(inputValue)) {
      const errorMessage = document.createElement("p");
      errorMessage.style.color = "red"; // Set color to red
      errorMessage.style.marginTop = "20px"; // Set margin top to 20px
      errorMessage.textContent = "Invalid format - Please provide a real email address";
      textValidation.innerHTML = ""; // Clear previous error messages
      textValidation.appendChild(errorMessage);
    } else {
      textValidation.innerHTML = ""; // Clear previous error messages if email is valid
    }
  });


joinEmailBtn.addEventListener('click',()=>{
  const inputValue = inputEmail.value;
  if(regexEmail.test(inputValue)){
    window.location.href = "success_msg.html";
  }
});


inputEmailDown.addEventListener("input", () => {
  const inputValue = inputEmailDown.value;
  if (!regexEmail.test(inputValue)) {
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red"; // Set color to red
    errorMessage.style.marginTop = "20px"; // Set margin top to 20px
    errorMessage.textContent = "Invalid format - Please provide a real email address";
    textValidationDown.innerHTML = ""; // Clear previous error messages
    textValidationDown.appendChild(errorMessage);
  } else {
    textValidationDown.innerHTML = ""; // Clear previous error messages if email is valid
  }
});


joinEmailBtnDown.addEventListener('click',()=>{
const inputValue = inputEmailDown.value;
if(regexEmail.test(inputValue)){
  window.location.href = "success_msg.html";
}
});

const btnBackPpl = document.getElementById("button-back-ppl");
const btnNextPpl = document.getElementById("button-next-ppl");

const firstBlock = document.getElementById("first-block-people");
const secondBlock = document.getElementById("people-second-block");

btnNextPpl.addEventListener("click", ()=>{
  secondBlock.style.display ="flex";
  firstBlock.style.display ="none";
});

btnBackPpl.addEventListener("click", ()=>{
  secondBlock.style.display ="none";
  firstBlock.style.display ="flex";
})



/*For mobile */

const menuMobile = document.getElementById("container-menu-mobile");

const menuMobileTwo = document.getElementById("menu-mobile");

const hamburgerIcon = document.getElementById("hamburger-icon");

const partnersMobile = document.getElementById("partners-mobile");

const howWeWorkMobile = document.getElementById("how-we-work-mobile");

const reviewMobile = document.getElementById("review-mobile");

const charityMobile = document.getElementById("charity-mobile");
 

hamburgerIcon.addEventListener("click", () => {
  menuMobile.style.display = 'block';
});

document.addEventListener("click", (event) =>{
  if (event.target !== hamburgerIcon && event.target !== menuMobileTwo && event.target !== menuMobile && event.target && event.target !== partnersMobile
    && event.target !== howWeWorkMobile && event.target !== reviewMobile && event.target !== charityMobile ){
    menuMobile.style.display = 'none';
  }
});

//The input email for the mobile version:

const inputElementMobile = document.getElementById("input-email-mobile");

const textValidationMobile = document.getElementById("text-for-validation-mobile");

const regexEmailMobile = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


inputElementMobile.addEventListener("input", ()=>{
  let inputValueMobile = inputElementMobile.value;

  if(!regexEmailMobile.test(inputValueMobile)){
    const paragraphMobile = document.createElement("p");
    paragraphMobile.textContent = 'Invalid format - Please provide a real email address';
    paragraphMobile.style.color="red";
    paragraphMobile.style.marginTop ="20px";
    textValidationMobile.textContent = "";/*The content of textValidationMobile (which appears to be a <span> element) is cleared to remove any previous validation message. */

    textValidationMobile.appendChild(paragraphMobile);/*The newly created paragraph element is appended as a child to textValidationMobile, making it visible to the user. */
  }else{
    textValidationMobile.textContent = ""; //else if input value is same as the regex then the div to be empty.
  }

});

const joinBtnMobileUp = document.getElementById("join-btn-email-M");

joinBtnMobileUp.addEventListener("click", ()=>{
 
  const inputElementMobile = document.getElementById("input-email-mobile");
  let inputValueMobile = inputElementMobile.value;
  const regexEmailMobile = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if(regexEmailMobile.test(inputValueMobile)){
    window.location.href = "success_msg_mobile.html";
  }

});

//For the menu:


partnersMobile.addEventListener("click", ()=>{
  const partnersHeadingMobile = document.getElementById("partners-heading-mobile");
  partnersHeadingMobile.scrollIntoView({behavior: "smooth"});
});


howWeWorkMobile.addEventListener("click", ()=>{
  howWeWorkParagraph = document.getElementById("work-expert-startegist");
  howWeWorkParagraph.scrollIntoView({behavior: "smooth"})
})

reviewMobile.addEventListener("click", ()=>{
  const reviewMobileBlock = document.getElementById("review-mobile-block");
  reviewMobileBlock.scrollIntoView({behavior:"smooth"})
});

charityMobile.addEventListener("click", () =>{
  const charityMobileBlock = document.getElementById("charity-mobile-block");
  charityMobileBlock.scrollIntoView({behavior:"smooth"});
});


//Timer-mobile:

const targetDateMobile = new Date();
/*To create the target date we use the new date and then with setDate we create the target date where we get the date (the todays date with the functiongetDate + 880= and adding how much 
we need 880 days for example so from today +880 days thats our target date.) */
targetDateMobile.setDate(targetDateMobile.getDate() +360);

const countDownMobile = () =>{

const currentDateMobile = new Date();

 const timeDifferenceMobile  = targetDateMobile.getTime() - currentDateMobile.getTime();

 const daysMobile = Math.floor(timeDifferenceMobile / (24*60*60*1000));

 const hrMobile =  Math.floor(timeDifferenceMobile %  (24*60*60*1000) / (60*60*1000));

 const minMobile = Math.floor(timeDifferenceMobile % (60*60*1000) / (60*1000));

 const secMobile =  Math.floor(timeDifferenceMobile % (60*1000) / (1000));



daysM = document.getElementById("days-mobile");
hrM = document.getElementById("hr-mobile");
minM = document.getElementById("min-mobile");
secM = document.getElementById("sec-mobile");

daysM.textContent = `${daysMobile}`;
hrM.textContent = `${hrMobile}`;
minM.textContent = `${minMobile}`;
secM.textContent =`${secMobile}`;


}

countDownMobile();

setInterval(countDownMobile,1000);


//For the partners;

const btnNextMobile = document.getElementById("button-next-mobile");

const btnBackMobile = document.getElementById("button-back-mobile");

const twitterBlockMobile = document.getElementById("twitter-mobile");

const pinterestBlockMobile = document.getElementById("pinterest-mobile");

const linkedInBlockMobile = document.getElementById("linkedin-mobile");



// Define currentBlockIndexMobile outside of the event listener function

let  currentBlockIndexMobile = 0;

const mobileBlocksArray = [twitterBlockMobile,pinterestBlockMobile,linkedInBlockMobile];

btnNextMobile.addEventListener("click",()=>{


mobileBlocksArray[currentBlockIndexMobile].style.display = "none";

currentBlockIndexMobile = (currentBlockIndexMobile + 1) % mobileBlocksArray.length;


mobileBlocksArray[currentBlockIndexMobile].style.display = "block";

});

btnBackMobile.addEventListener("click", ()=>{

  mobileBlocksArray[currentBlockIndexMobile].style.display = "none";

  currentBlockIndexMobile = (currentBlockIndexMobile - 1 +  mobileBlocksArray.length ) % mobileBlocksArray.length;

  mobileBlocksArray[currentBlockIndexMobile].style.display = "block";

})

/*Here we say from the MobileBlocksArray current index style.display= "none".
then the current index we set it equal the current index plus or minus from the mobileBlocks Array lenght and a reminder of the mobile blocks array lenght.
- Spo first we hide the current element that is displayed we do that by setting the arrayName and currentIndex inside the [] From that array. Thata current index
style.display none. then Current index gets updated and after updating we display it to block. */

//For people:

const btnNextMobilePpl = document.getElementById("button-next-mobile-ppl");

const btnBackMobilePpl = document.getElementById("button-back-mobile-ppl");

const personOne = document.getElementById("person-one");

const personTwo = document.getElementById("person-two");

const personThree = document.getElementById("person-three");

const personFour = document.getElementById("person-four");

const personFive = document.getElementById("person-five");

const personSix = document.getElementById("person-six");




let currentIndexPpl = 0 ;

const pplArray = [personOne,personTwo,personThree,personFour,personFive,personSix];

btnNextMobilePpl.addEventListener("click", ()=>{

  pplArray[currentIndexPpl].style.display = "none";

  currentIndexPpl = (currentIndexPpl + 1 ) % pplArray.length;

  pplArray[currentIndexPpl].style.display = "block";
});

btnBackMobilePpl.addEventListener("click", () =>{

  pplArray[currentIndexPpl].style.display ="none";

  //Updating the next index backwards from the current-index.

  currentIndexPpl = (currentIndexPpl - 1 + pplArray.length) % pplArray.length;

  pplArray[currentIndexPpl].style.display = "block";
});



//Input Mobile down:

//text: 'Invalid format - Please provide a real email address';

const inputMobileDown = document.getElementById("input-email-down-mobile-s");

const regexEmailDown = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const textValidationDownMobile = document.getElementById("text-for-validation-down-mobile");

inputMobileDown.addEventListener("input", ()=>{


  let inputValueMobileDown = inputMobileDown.value;

  if(!regexEmailDown.test(inputValueMobileDown)){
    paragraphMobileDown = document.createElement("p");
    paragraphMobileDown.style.marginTop = "30px";
    paragraphMobileDown.style.color = "red"
    paragraphMobileDown.textContent = 'Invalid format - Please provide a real email address';
    textValidationDownMobile.innerHTML = "";
    textValidationDownMobile.appendChild(paragraphMobileDown);


  }else{
    textValidationDownMobile.innerHTML = "";
  }



});


const joinBtnMobileDown = document.getElementById("join-btn-email-down-mobile");


joinBtnMobileDown.addEventListener("click",()=>{
  const regexEmailDown = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let inputValueMobileDown = inputMobileDown.value;
  if(regexEmailDown.test(inputValueMobileDown)){
    window.location.href = "success_msg_mobile.html"
  }
});
//Countdown tablet:


const targetDateTablet = new Date();

targetDateTablet.setDate(targetDateTablet.getDate()+880)
const countDownTablet =()=>{

  /*Ja zemame denesnata data */
  const currentDate = new Date();

 /*Ja racuname vremenskata razlika megu target datata i denesnata data.
 Sekogas morame da ja izrachuname vremenskata razlika za ponatamu da gi dobieme denovite, saatite minutite i sekundite sto preostanuvaat.
 Za toa ja koristime getTime() funkcijata.
 Bidejki target datata e pogolema brojka ja minusirame od denesnata data zaedno so getTime() funkcijata */

 const TimeDifference = targetDateTablet.getTime() - currentDate.getTime();

 /*Potoa mozheme da gi racuname denovite saatite i minutite kade sto najprvo vremenskata razlika ja delime so sekvenci za sekundi minuti saati i denovi se ova
  zaokruzeno vo math floor funkcijata za da dobieeme cel broj za denovi.
 Potoa za da gi dobieme denovite vremenskata razlika i reminder od denovite se deli so sekvenci za da se dobie saatot i taka natamu.
  Isto taka cifrite za sekvenci odat vo zagradi kako i celoto delenje xo TimeDifference. Isto taka se toa ide vnatre vo Math floor.

  */


  const daysCalTablet = Math.floor((TimeDifference / (1000*60*60*24)));
  const hoursCalTablet = Math.floor((TimeDifference % (1000*60*60*24) / (1000*60*60)));
  const minutesCalTablet = Math.floor((TimeDifference %(1000*60*60) / (1000*60)));
  const secondsCalTablet = Math.floor((TimeDifference % (1000*60) / (1000)));

 /*  Vsusnost za da gi dobieme denovite nie ja delime vremenskata razlika so sekvenci i pota za saatite gi delime
   sekvencite od denovite so sekvencite za saatite i reminder zavremenskata razlika. taka gi dobivame saatite.
   Istoto go pravime i ponatamu za dobivanje minuti i sekundi. reminder ima sekade osven na denovite bidejki direkno se delat so timedifference */


  const daysTablet= document.getElementById("days-tablet");
const hrsTablet = document.getElementById("hr-tablet");
const minTablet = document.getElementById("min-tablet");
const secTablet = document.getElementById("sec-tablet");

daysTablet.innerHTML = `${daysCalTablet}`;
hrsTablet.innerHTML = `${hoursCalTablet}`;
minTablet.innerHTML = `${minutesCalTablet}`;
secTablet.innerHTML = `${secondsCalTablet}`;

}

countDownTablet();

setInterval(countDownTablet,1000);


//For Tablet:

const partnersLinkTablet = document.getElementById("partners-link-tablet");

const howWeWorkLinkTablet = document.getElementById("how-we-work-link-tablet");

const reviewLinkTablet = document.getElementById("review-link-tablet");

const charityLinkTablet = document.getElementById("charity-link-tablet");

//blocks

const partnersBlockTablet = document.getElementById("partners-block-tablet");

const howWeWorkBlockTablet = document.getElementById("how-we-work-tablet");

const reviewBlockTablet = document.getElementById("review-tablet");

const charityBlock = document.getElementById("charity-tablet");

partnersLinkTablet.addEventListener("click", ()=>{
  partnersBlockTablet.scrollIntoView({behavior: "smooth"})
});


howWeWorkLinkTablet.addEventListener("click", ()=>{
  howWeWorkBlockTablet.scrollIntoView({behavior: "smooth"})
});

reviewLinkTablet.addEventListener("click", ()=>{
  reviewBlockTablet.scrollIntoView({behavior: "smooth"});
});


charityLinkTablet.addEventListener("click",()=>{
  charityBlock.scrollIntoView({behavior: "smooth"})
});


//The Email-input on the top.

const inputEmailTabletUp = document.getElementById("input-email-tablet");


const joinBtnTabletUp = document.getElementById("join-btn-email-tablet");

const textValidationTablet = document.getElementById("text-for-validation-tablet");

inputEmailTabletUp.addEventListener("input", ()=>{
  let inputValueTabletUp = inputEmailTabletUp.value;

  const regexEmailTablet = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if(!regexEmailTablet.test(inputValueTabletUp)){
    const paragrahElTablet = document.createElement("p");
    paragrahElTablet.textContent = 'Invalid format - Please provide a real email address';
    paragrahElTablet.style.marginTop = "30px"
    paragrahElTablet.style.color = "red";
    textValidationTablet.innerHTML = "";
    textValidationTablet.appendChild(paragrahElTablet);
  }else{
    textValidationTablet.innerHTML = "";
  }

});

joinBtnTabletUp.addEventListener("click", ()=>{

  let inputValueTabletUp = inputEmailTabletUp.value;

  const regexEmailTablet = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if( regexEmailTablet.test(inputValueTabletUp)){
    window.location ="success_msg_tablet.html"
  }
});







const inputEmailTabletDown = document.getElementById("input-email-down-tablet");


const joinBtnTabletDown = document.getElementById("join-btn-email-down-tablet");

const textValidationTabletDown = document.getElementById("text-for-validation-down-tablet");


inputEmailTabletDown.addEventListener("input",()=>{

  const inputValueTabletDown = inputEmailTabletDown.value;

   console.log(textValidationTabletDown);
  const regexEmailTabletDown = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if(!regexEmailTabletDown.test(inputValueTabletDown)){
    const paragraphTabletDown = document.createElement("p");
    paragraphTabletDown.style.marginTop = "30px";
    paragraphTabletDown.style.color = 'red';
    paragraphTabletDown.textContent = 'Invalid format - Please provide a real email address';
    textValidationTabletDown.innerHTML ="";
    textValidationTabletDown.appendChild(paragraphTabletDown);
  }else{
    textValidationTabletDown.innerHTML= "";
  }

});


joinBtnTabletDown.addEventListener("click", () =>{
  const inputValueTabletDown = inputEmailTabletDown.value;

  console.log(textValidationTabletDown);
 const regexEmailTabletDown = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
 if(regexEmailTabletDown.test(inputValueTabletDown)){
  window.location = "success_msg_tablet.html";
 }
});


//Partners block:


const buttonBackTablet = document.getElementById("button-back-tablet");

const buttonNextTablet = document.getElementById("button-next-s-tablet");

const twitterBlockTablet = document.getElementById("twitter-tablet");

const pinterestBlockTablet = document.getElementById("pinterest-tablet");

const linkedInBlockTablet = document.getElementById("linkedin-tablet");


const blocksTabletPartners = [twitterBlockTablet, pinterestBlockTablet, linkedInBlockTablet];

let currentIndexTablet = 0;

buttonNextTablet.addEventListener("click", () => {

  blocksTabletPartners[currentIndexTablet].style.display= "none";

  currentIndexTablet = (currentIndexTablet + 1) % blocksTabletPartners.length;

  blocksTabletPartners[currentIndexTablet].style.display = 'block';
});


buttonBackTablet.addEventListener("click", ()=> {

  blocksTabletPartners[currentIndexTablet].style.display = "none";

  currentIndexTablet = (currentIndexTablet - 1 + blocksTabletPartners.length) % blocksTabletPartners.length;

  blocksTabletPartners[currentIndexTablet].style.display = "block";


});

//People tablet :

const firstBlockPplTablet = document.getElementById("first-block-people-tablet");

const secondBlockPplTablet = document.getElementById("second-block-people-tablet");

const btnNextPplTablet = document.getElementById("button-next-ppl-tablet");

const btnBackPplTablet = document.getElementById("button-back-ppl-tablet");



btnNextPplTablet.addEventListener("click", ()=>{

  firstBlockPplTablet.style.display = "none";
  secondBlockPplTablet.style.display = "flex";
});

btnBackPplTablet.addEventListener("click",()=>{
  secondBlockPplTablet.style.display = "none";
  firstBlockPplTablet.style.display = "flex";
});



