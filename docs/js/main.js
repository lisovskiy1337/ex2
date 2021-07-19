$('.slider').slick({
  infinite: true,
  dots: false,
  arrows: false,
  slidesToShow:4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 867,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });




const searchBtn = document.querySelector('.header__search-btn'),
      searchClose = document.querySelector('.header__search-close'),
      searchForm = document.querySelector('.header__search-wrapper'),
      searchParent = document.querySelector('.header__search');


function showInput(){
    searchBtn.addEventListener('click', (e) =>{
      e.preventDefault();
      searchForm.classList.add('show');
      searchBtn.classList.add('hide');
      searchClose.classList.add('show');
    });
}
showInput();


function hideInput(){
  searchClose.addEventListener('click', () =>{
    searchForm.classList.remove('show');
    searchForm.classList.add('hide');
    searchClose.classList.remove('show');
    searchBtn.classList.remove('hide');
  });

}

hideInput();


jQuery(function($){
  $(document).mouseup(function (e){ 
   
   var div = $(".header__search-wrapper"); 
 
   if (!div.is(e.target) 
       && div.has(e.target).length === 0) { 
        searchForm.classList.remove('show');
        searchForm.classList.add('hide');
        searchClose.classList.remove('show');
        searchBtn.classList.remove('hide');
  
  
   }
  });
});

const burger = document.querySelector('.header__burger-btn'),
    close = document.querySelector('.header__burger-close'),
    navMenu = document.querySelector('.nav'),
    navMenuLink = document.querySelectorAll('.nav__list-link');

function burgerOpen() {
    burger.addEventListener('click', () => {
        close.classList.add('show');
        navMenu.classList.add('show-nav'); 
        navMenuLink.forEach(item =>{
          item.classList.add('link-active');
        });

    });
}
function burgerClose(){
    close.addEventListener('click', () => {
        close.classList.remove('show');
        navMenu.classList.remove('show-nav');
        navMenuLink.forEach(item =>{
          item.classList.remove('link-active');
        });
    });

  }

burgerOpen();
burgerClose();