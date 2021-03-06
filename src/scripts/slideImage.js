const orderInput = document.querySelector(".contacts-container-call-number");
const orderClickedText = document.querySelector(".contacts-container-call-text");
const orderCallBtn = document.querySelector(".contacts-container-call-button");
let isClicked = false;

orderCallBtn.addEventListener("click", () => {
  isClicked = !isClicked;
  if (isClicked) {
    orderInput.style.display = "none";
    orderClickedText.style.display = "block";
    orderCallBtn.innerHTML = 'x'
    orderCallBtn.style.width = '60px'


  } else {
    orderInput.style.display = "block";
    orderClickedText.style.display = "none";
    orderCallBtn.style.width = '190px'
    setTimeout(() => {
      orderCallBtn.innerHTML = 'ЗАКАЗАТЬ ЗВОНОК'
    }, 260)

  }
});

const mobileCallBtn= document.querySelector('.mobile-call-btn');
const mobileCallText = document.querySelector('.mobile-call-text');
let mobileBtnClicked = false;

mobileCallBtn.addEventListener('click',()=> {
  mobileBtnClicked = !mobileBtnClicked;
  if(mobileBtnClicked) {
    document.querySelector('.headerbg-inner-input').style.display = 'none';
    mobileCallText.style.display = 'block';
    mobileCallBtn.innerHTML = 'ОК'
    mobileCallBtn.style.width = '80%'
  } else {
    document.querySelector('.headerbg-inner-input').style.display = 'block';
    mobileCallText.style.display = 'none';
    mobileCallBtn.innerHTML = 'Спасибо. Мы скоро вам позвоним'
    mobileCallBtn.style.width = '100%'
  }
})


//  First slider

const nextBtn = document.querySelector('.main-slider-button-next');
const prevBtn = document.querySelector('.main-slider-button-prev');
const imgItem = document.querySelector('.main-slider-container-image-item');
const slideItemLength = imgItem.childElementCount;
let slideItem = 0;
let currentPos = 1;

nextBtn.addEventListener('click',()=> {
  if(currentPos !== slideItemLength) {
    slideItem+=100;
    imgItem.style.right = `${slideItem}%`;
  }
  currentPos !== slideItemLength && currentPos++;
  console.log('currentPos',currentPos);
});

prevBtn.addEventListener('click',()=> {
  if(currentPos !==1) {
    slideItem-=100;
    imgItem.style.right = `${slideItem}%`;
  }
  currentPos !==1 && currentPos--;
  console.log('currentPos',currentPos);
})


// Middle Slider
$(".slider-container-middle").slick({
  dots: true,
  infinite: true,
  speed: 300,
  centerMode: true,
  variableWidth: true,
  arrows: false,
  responsive: [{ // responsive break point for the window width less than 800
    breakpoint: 800,
    settings: {
      variableWidth: false,
      centerMode: false
    }
  }]
});

//slider features
function featureSlide() {
  if ($(window).width() < 800) {
    $(".features-slide-img-container").slick({
      dots: true,
      arrows: true,
      infinite: false
    });
  }
}
featureSlide();

// Image Change 
function resize() {
  if ($(window).width() < 800) {
    $(".inner-container-left img").attr('src', './img/logomob.png');
    $(".footer-container img").attr('src', './img/logo-footer2.png');
  }
}
resize();
$(window).on('resize', resize);

// Slide for partners 
function slickPartners() {
  $(".general").slick({
    dots: true,
    arrows: false,
    infinite: false,
  });
}
slickPartners();

// slide for benefits
function slickBenefits() {
  if ($(window).width() < 800) {
    $(".benefits-container-items").slick({
      dots: true,
      infinite: true,
      speed: 300,
      arrows: false,
    });
  }
}
slickBenefits();


var component = [
  { state: false },
  { state: false },
  { state: false },
  { state: false },
  { state: false },
];
for (let i = 0; i < 5; i++) {
  document.querySelector(`.arr${i + 1}`).addEventListener('click', () => {
    if (component[i].state) {
      document.querySelector(`.text${i + 1}`).style.display = 'none';
      document.querySelector(`.arr${i + 1} span`).style.transform = 'rotate(45deg)';
    } else {
      document.querySelector(`.text${i + 1}`).style.display = 'block';
      document.querySelector(`.arr${i + 1} span`).style.transform = 'rotate(225deg)';
    }
    component[i].state = !component[i].state
  });

}
// nav menu
document.querySelector('.nav-menu').addEventListener('click', () => {
  document.querySelector('.navigation').style.display = 'block';
  document.querySelector('.navigation').style.top = '0';
})
document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.navigation').style.top = '-100%';

});


const track = document.querySelector('.features-slide-img-container');
const slides = Array.from(track.children);
let count = 1;
let wdth = 0;
let reviewed = 0;

function getSlides() {
  if ($(window).width() > 800) {
    slides.forEach((slide, index) => {
      slide.style.left = index * 100 + '%'
    })

    for (let i = 1; i < slides.length + 1; i++) {
      document.querySelector(`.nav${i}`).addEventListener('mouseover', () => {
        count = i;
        wdth = (i - 1) * 100;
        track.style.transform = `translateX(-${(i - 1) * 100}%)`;
        for(let k = 1; k < slides.length +1; k ++) {
          if(k === i && document.querySelector(`.nav${k}`).classList) {
            document.querySelector(`.nav${k}`).classList.add('nav-active');
          } else {
            document.querySelector(`.nav${k}`).classList.remove('nav-active');
          }
        }
      })
    }
  }
}
getSlides();

let featureContainer = document.querySelector('.features-slide-img-container');
let featureContainerContent = document.querySelectorAll('.features-slide-img-container-content');

document.querySelector('.feature-slider-container-arrows-right').addEventListener("click", () => {
  if (count === featureContainerContent.length) {
    return;
  } else {
    featureContainer.style.transition = "transform 0.4s ease-in-out";
    featureContainer.style.transform = `translateX(-${wdth + 100}%)`;
    wdth = wdth + 100;
    count++;
  }
  for(let k = 1; k < featureContainerContent.length+1; k ++) {
    if(k === count && document.querySelector(`.nav${k}`).classList) {
      document.querySelector(`.nav${k}`).classList.add('nav-active');
    } else {
      document.querySelector(`.nav${k}`).classList.remove('nav-active');
    }
  }
});

document.querySelector('.feature-slider-container-arrows-left').addEventListener("click", () => {
  if (count === 1) {
    return;
  } else {
    featureContainer.style.transition = "transform 0.4s ease-in-out";
    featureContainer.style.transform = `translateX(-${wdth - 100}%)`;
    wdth = wdth - 100;
    count--;
  }
  for(let k = 1; k < featureContainerContent.length+1; k ++) {
    if(k === count && document.querySelector(`.nav${k}`).classList) {
      document.querySelector(`.nav${k}`).classList.add('nav-active');
    } else {
      document.querySelector(`.nav${k}`).classList.remove('nav-active');
    }
  }
});

// Last Slider
var doubled = $('.industry-container-slide-item');
if ($(window).width() < 800) {
  doubled.unwrap();
}

$(".industry-container-slide").slick({
  dots: true,
  infinite: true,
  speed: 300,
  centerMode: true,
  variableWidth: true,
  arrows: false,
  responsive: [{ // responsive break point for the window width less than 800
    breakpoint: 500,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: true
    }
  }]
});

// division height
function height() {
  if ($(window).width() < 800) {
    var he = document.querySelector('.features-icon-container').clientHeight;
    document.querySelector('.feature-slide ').style.marginTop = `${he - 200}px`;
  }
} height();

// div.addEventListener('scroll',() =>
//     div.scrollTop = Math.max(1, Math.min(div.scrollTop, div.scrollHeight - div.clientHeight - 1))
// );