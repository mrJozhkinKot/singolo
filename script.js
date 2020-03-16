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

}
const nav = document.querySelector('.navbar');
const vertPhone = document.querySelector('.vertical-phone-screen');
const horizPhone = document.querySelector('.horizonal-phone-screen');
const chevLeft = document.querySelector('.chev-left');
const chevRight = document.querySelector('.chev-right');
const portfolioNav = document.querySelector('.portfolio-nav');
const pictures = document.querySelector('.layout-4-col');
const submit = document.querySelector('.message');
const modal =  document.querySelector('.modal-feedback');
const btn =  document.querySelector('.btn-ok');
const subject = document.querySelector('#subject');
const describtion = document.querySelector('#describtion');



const addNavClickHandler = () => {
    nav.addEventListener('click', (e) => {
        nav.querySelectorAll ('a'). forEach (el => {
          el.classList.remove('active');
          e.target.classList.add('active');
        })          
    }) 
}
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

const addSliderRightClickHandler = () => {
    chevRight.addEventListener('click', () => {
        document.querySelector('.second-slide').classList.toggle('hidden');
        document.querySelector('.promo').classList.toggle('secondary-bg');
        vertPhone.classList.toggle('hidden');
        horizPhone.classList.toggle('hidden');
    })
}

const addSliderLeftClickHandler = () => {
    chevLeft.addEventListener('click', () => {
        document.querySelector('.second-slide').classList.toggle('hidden');
        document.querySelector('.promo').classList.toggle('secondary-bg');
        vertPhone.classList.toggle('hidden');
        horizPhone.classList.toggle('hidden');
    })
}

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
        }
    })
}
 


 const addBorderClickHandler = () => {
    pictures.addEventListener('click', (e) => {
        pictures.querySelectorAll ('img'). forEach (el => {
            el.classList.remove('img-border');
            e.target.classList.add ('img-border'); 
           })   
})
 }


const addFeedbackSubmit = () => {
  
    submit.addEventListener('submit', (e) => {
        e.preventDefault();
        document.querySelector('#result').innerText =
        `Письмо отправлено! ${GetSubject()}  ${GetDescribtion()}`;
       modal.classList.remove ('hidden');                   
    })
}

function GetSubject () {
   return subject.value? `\nТема: ${subject.value}`: '\nБез темы';
}

function GetDescribtion () {
    return describtion.value? `\nОписание: ${describtion.value}`: '\nБез описания';
}



const closeFeedbackSubmit = () => {
 btn.addEventListener('click', () =>{
    modal.classList.add ('hidden'); 
    submit.reset();

 })
}


