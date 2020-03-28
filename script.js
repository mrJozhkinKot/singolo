window.onload = function() {

    addNavClickHandler();
    addSwitchVerticalPhone();
    addSwitchHorizontalPhone();
    addSliderRightClickHandler();
    addSliderLeftClickHandler();
    addPortfolioCLickHandler();
    addBorderClickHandler();
    addPortfolioShuffle();
    addFeedbackSubmit();
    closeFeedbackSubmit();
    onScroll();
    addHamburgerClick();
    closeMenuByLinks();
  
}
const nav = document.querySelector('.navbar');
const vertPhone = document.querySelector('.vertical-phone-screen');
const horizPhone = document.querySelector('.horizonal-phone-screen');
const chevLeft = document.querySelector('.chev-left');
const chevRight = document.querySelector('.chev-right');
const portfolioNav = document.querySelector('.portfolio-nav');
const pictures = document.querySelector('.layout-4-col');
const submit = document.querySelector('.message');
const modal =  document.querySelector('.modal');
const btn =  document.querySelector('.btn-ok');
const subject = document.querySelector('#subject');
const description = document.querySelector('#description');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.overlay');
const logo = document.querySelector('.logo');
const mobileNav = document.querySelector('.navbar ul');
const menu = document.querySelector('.menu');

const addNavClickHandler = () => {
    nav.addEventListener('click', (e) => {
        nav.querySelectorAll ('a'). forEach (el => {
          el.classList.remove('active');
          e.target.classList.add('active');
        })          
    }) 
}

//scroll
const onScroll = () => {
    document.addEventListener('scroll', (e) => {
        const curPos = window.scrollY + 100;
        document.querySelectorAll('section').forEach((el) => {
        
          if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
                  document.querySelectorAll('.menu a').forEach((a) => {
                  a.classList.remove('active');
                  if(el.getAttribute('class') === a.getAttribute('href').substring(1)) {
                      a.classList.add('active');
                  }
              })
                      }
   
      })
    });
}

//phone screen
const addSwitchVerticalPhone = () => {
    vertPhone.addEventListener('click', (e)=> {
    document.querySelector('.vertical-phone-off').classList.toggle('hidden'); 
     })
     }

const addSwitchHorizontalPhone = (e) => {
horizPhone.addEventListener('click', ()=> {
document.querySelector('.horizontal-phone-off').classList.toggle('hidden'); 
    })
    }


//slider

let slides = document.querySelectorAll('.slider-container .slide');
let currentSlide = 0;
let isEnabled = true;


function changeCurrentSlide (n) {
    currentSlide = (n + slides.length) % slides.length;
}

function hideSlide (direction) {
    isEnabled = false;
    slides[currentSlide].classList.add(direction);
    slides[currentSlide].addEventListener('animationend', function() {
    this.classList.remove ('active-slide', direction);
    });
    }
    
    function showSlide (direction) {
        slides[currentSlide].classList.add('next-slide', direction);
        slides[currentSlide].addEventListener('animationend', function(){
            this.classList.remove('next-slide', direction);
            this.classList.add('active-slide');
            isEnabled = true;
        });
        
    }
  
function nextSlide (n) {
    hideSlide('to-left');
    changeCurrentSlide(n+1);
    showSlide('from-right');   
}   

function previousSlide (n) {
hideSlide('to-right');
changeCurrentSlide(n-1);
showSlide('from-left');
}

const addSliderLeftClickHandler = () => {
    chevLeft.addEventListener('click', () => {
               if (isEnabled) {
            previousSlide(currentSlide);
            document.querySelector('.home').classList.toggle('secondary-bg');

               }
    })
}

const addSliderRightClickHandler = () => {
    chevRight.addEventListener('click', () => {
                if (isEnabled) {
            nextSlide(currentSlide);
            document.querySelector('.home').classList.toggle('secondary-bg');

               }
    });
}

//portfolio navigation
const addPortfolioCLickHandler = () => {
    portfolioNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('portf-nav')) {
           portfolioNav.querySelectorAll ('li'). forEach (el => {
          el.classList.remove('active-nav');
          e.target.classList.add('active-nav');
         }) 
        } 
        })
     
}

const addPortfolioShuffle = () => {
    portfolioNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('portf-nav')) {
                let arr = [];
         pictures.querySelectorAll('img').forEach((el) => {
          arr.push(el.src);
                                  })

        let random = arr.sort( () => 0.5 - Math.random())

        pictures.querySelectorAll('img').forEach((el, index) => 
            el.src = random[index]) 

        pictures.querySelectorAll('img').forEach((el) => 
        el.classList.remove ('img-border'))
                          }
                   
     
    })
}
 
//img border

 const addBorderClickHandler = () => {
        pictures.addEventListener('click', (e) => {
            if (e.target.tagName !== 'IMG') return;
        if (e.target.classList.contains('img-border')) {
            e.target.classList.remove('img-border');
        } else {
                 pictures.querySelectorAll ('img'). forEach (el => {
                el.classList.remove('img-border');
                e.target.classList.add ('img-border'); 
                                     })  
                                             
}
        
 })
}
  

const addFeedbackSubmit = () => { 
  
    submit.addEventListener('submit', (e) => {
        e.preventDefault();
        document.querySelector('#result').innerText =
        `Письмо отправлено! ${GetSubject()}  ${GetDescription()}`;
       modal.classList.remove ('hidden');                   
    })
}

function GetSubject () {
   return subject.value? `\nТема: ${subject.value}`: '\nБез темы';
}

function GetDescription () {
  
    return description.value? `\nОписание: ${description.value}`: '\nБез описания';
}

const closeFeedbackSubmit = () => {
 btn.addEventListener('click', () =>{
    modal.classList.add ('hidden'); 
    submit.reset();

 })
}

const  addHamburgerClick = () => {
hamburger.addEventListener ('click', () => {
    mobileMenu.classList.toggle ('overlay-on');
    nav.classList.toggle ('nav-mobile');
    mobileNav.classList.toggle ('active-ul');
    logo.classList.toggle ('logo');
    logo.classList.toggle ('logo-left');
    hamburger.classList.toggle ('hamburger-rotate');
   
})
}

const closeMenuByLinks = () => {
    nav.addEventListener ('click', (e) => {
 if (e.target.tagName === 'A' ) {
nav.classList.remove ('nav-mobile');
mobileNav.classList.remove ('active-ul');
mobileMenu.classList.remove ('overlay-on');
logo.classList.add ('logo');
logo.classList.remove ('logo-left');
hamburger.classList.toggle ('hamburger-rotate');
    }
})
}

