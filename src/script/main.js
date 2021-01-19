'use strict';
const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
    //console.log(anchor);
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href');
    //console.log(blockID);
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline:'center',
    });
  });
};

let buttons = document.querySelectorAll('.about_tabs--tab');
buttons.forEach(function(i){

    i.addEventListener('click',function(e){
        e.preventDefault();
        let item = e.currentTarget;
        document.querySelector('.one_tb').classList.remove('actives')
        item.classList.toggle('active');
        item.addEventListener('blur',function(e){
            item.classList.remove('active');
        })
        
            if(item.getAttribute('data-tab') === 'first'){
                
                document.querySelector('.content_first').classList.remove('casper');
                document.querySelector('.content_second').classList.add('casper');
                document.querySelector('.content_third').classList.add('casper');
            } else if(item.getAttribute('data-tab') === 'second'){
                
                document.querySelector('.content_second').classList.remove('casper');
                document.querySelector('.content_first').classList.add('casper');
                document.querySelector('.content_third').classList.add('casper');  
            } else if(item.getAttribute('data-tab') === 'third'){
               
                document.querySelector('.content_third').classList.remove('casper');
                document.querySelector('.content_first').classList.add('casper');
                document.querySelector('.content_second').classList.add('casper'); 
            };
    });
});

let faqs = document.querySelectorAll('.questions_acc--btn');

faqs.forEach(function(elem){

    elem.addEventListener('click',function(e){
        e.preventDefault();
        let elem = e.currentTarget;
        elem.classList.toggle('active');
        let content = elem.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            content.style.transitionDuration = `3s`;
          } else {
            content.style.display = "block";
            content.style.transitionDuration = `3s`;
          }
        
        // console.log(elem.getAttribute('data-acc'));
        // if(elem.getAttribute('data-acc') === 'first'){
        //     document.querySelector('.acc_first').classList.toggle('casper');
        // } else if(elem.getAttribute('data-acc') === 'second'){
        //     document.querySelector('.acc_second').classList.toggle('casper');
        // } else if(elem.getAttribute('data-acc') === 'third'){
        //     document.querySelector('.acc_third').classList.toggle('casper');
        // } else if(elem.getAttribute('data-acc') === 'forth'){
        //     document.querySelector('.acc_forth').classList.toggle('casper');
        // }


    })
})

let header_nav = document.querySelector('.header');
//console.log(scroll);

window.addEventListener('scroll', function(e){
//   console.log(window.pageYOffset);
    if(window.pageYOffset > 75){
      header_nav.classList.add('header_scroll');
    } else {
      header_nav.classList.remove('header_scroll');
    }
});
