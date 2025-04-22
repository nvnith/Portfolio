const navmMenu= document.getElementById('nav-menu');
const navToggle= document.getElementById('nav-toggle');
const navClose= document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navmMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navmMenu.classList.remove('show-menu')
    })
}

const navLink= document.querySelectorAll('.nav__link')
const linkAction= ()=>{
        navmMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction))

// const blurheader=()=>{ 
//     const header = Document.getElementById('header')
    // this.scrollY >= 50 ? header.classList.add('blur-header')
    //                     : header.classList.remove('blur-header')
    // if(this.scrollY >= 50){
    //     header.classList.add('blur-header')
    // }else{
    //     header.classList.remove('blur-header')
    // }
// }
// window.addEventListener('scroll',blurheader)

const header = document.querySelector(".header");
const toggleClass = "blur-header";

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll >= 50) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});


const contactForm= document.getElementById('contact-form');
const contactMessage= document.getElementById('contact-message');

const sendEmail= (e)=>{
  e.preventDefault()

  emailjs.sendForm('service_n9mya65', 'template_wwrwoje', '#contact-form','jYr57nj-LfXTfT8YQ')
  .then(()=>{
    contactMessage.textContent='Message sent successfully ✅'
    setTimeout(()=>{
      contactMessage.textContent= ''
    },3000)

    contactForm.reset()
  },()=>{
    contactMessage.textContent='Message not sent (srvice error) ❌'

    setTimeout(()=>{
      contactMessage.textContent= ''
    },3000)

    contactForm.reset()
  })

  // emailjs.sendForm('service_n9mya65', 'template_wwrwoje', '#contact-form').then(
  //   (response) => {
  //     console.log('SUCCESS!', response.status, response.text);
  //   },
  //   (error) => {
  //     console.log('FAILED...', error);
  //   },
  // );
}

contactForm.addEventListener('submit',sendEmail);

const scrollup=()=>{
  const scrollup= document.getElementById('scroll-up');
  if (scrollY >= 350) {
    scrollup.classList.add('show-scroll');
  } else {
    scrollup.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollup)

// const section=document.querySelectorAll('section[id]')

// const scrollactive= ()=>{
//   const scrollY=window.pageYOffset

//   section.forEach(current =>{
//     const sectionHeight= current.offsetHeight,
//     sectionTop= current.offsetTop - 58,
//     sectionId= current.getAttribute('id'),
//     sectionClass= document.querySelector('.nav__menu a[href*=' + sectionId + '}')

//     if(scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
//       sectionClass.classList.add('active-link')
//     }else{
//       sectionClass.classList.remove('active-link')
//     }
//   })
// }
// window.addEventListener('scroll',scrollactive)

const navlinks=document.querySelectorAll('.nav__link');
const sections=document.querySelectorAll('.section')

let currentsection='home';
window.addEventListener('scroll', ()=>{
  sections.forEach(sections=>{
    if(window.scrollY >= sections.offsetTop){
      currentsection= sections.id
    }
  })

  navlinks.forEach(navlinks=>{
      if(navlinks.href.includes(currentsection)){
        document.querySelector('.active').classList.remove('active')
        navlinks.classList.add('active')
      }
  })
})

const sr= ScrollReveal({
  origin:'top', 
  distance: '60px',
  duration: 2500,
  delay: 400,

})

sr.reveal('.home__data,.home__social,.contact__container,.footer__container')
sr.reveal('.home__image', {origin:'bottom'})
sr.reveal('.about__data,.skills__data', {origin:'left'})
sr.reveal('.about__image, .skills__content', {origin:'right'})
sr.reveal('.services__card,.projects__card', {interval: 100})