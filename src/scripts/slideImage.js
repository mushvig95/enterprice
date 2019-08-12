const orderInput = document.querySelector(".contacts-container-call-number");
const orderClickedText = document.querySelector(".contacts-container-call-text");
const ordeerCallBtn = document.querySelector(".contacts-container-call-button");
let isClicked = false;

ordeerCallBtn.addEventListener("click", () => {
  isClicked = !isClicked;
  if (isClicked) {
    orderInput.style.display = "none";
    orderClickedText.style.display = "block";
    ordeerCallBtn.innerHTML = 'x'
    ordeerCallBtn.style.width = '60px'


  } else {
    orderInput.style.display = "block";
    orderClickedText.style.display = "none";
    ordeerCallBtn.style.width = '190px'
    setTimeout(() => {
      ordeerCallBtn.innerHTML = 'ЗАКАЗАТЬ ЗВОНОК'
    }, 260)

  }
});


//  First slider
let counter = 0;
let width = 0;
const slideContainer = document.querySelector(".image-slider-container-image");
const slideContainerImages = document.querySelectorAll(".image-slider-container-image img");
const prevBtn = document.querySelector(".image-slider-container-arrows-left");
const nextBtn = document.querySelector(".image-slider-container-arrows-right");

nextBtn.addEventListener("click", () => {
  if (counter === slideContainerImages.length - 1) {
    return;
  } else {
    slideContainer.style.transition = "transform 0.4s ease-in-out";
    slideContainer.style.transform = `translateX(-${width + 100}%)`;
    width = width + 100;
    counter++;
  }
});

prevBtn.addEventListener("click", () => {
  if (counter === 0) {
    return;
  } else {
    slideContainer.style.transition = "transform 0.4s ease-in-out";
    slideContainer.style.transform = `translateX(-${width - 100}%)`;
    width = width - 100;
    counter--;
  }
});
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
    } else {
      document.querySelector(`.text${i + 1}`).style.display = 'block';
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
let count = 0;
let wdth = 0;

function getSlides() {
  if ($(window).width() > 800) {
    slides.forEach((slide, index) => {
      slide.style.left = index * 100 + '%'
    })

    for (let i = 1; i < slides.length + 1; i++) {
      document.querySelector(`.nav${i}`).addEventListener('mouseover', () => {
        count = i - 1;
        wdth = (i - 1) * 100;
        track.style.transform = `translateX(-${(i - 1) * 100}%)`;
      })
    }
  }
}
getSlides();

let featureContainer = document.querySelector('.features-slide-img-container');
let featureContainerContent = document.querySelectorAll('.features-slide-img-container-content');

document.querySelector('.feature-slider-container-arrows-right').addEventListener("click", () => {
  if (count === featureContainerContent.length - 1) {
    return;
  } else {
    featureContainer.style.transition = "transform 0.4s ease-in-out";
    featureContainer.style.transform = `translateX(-${wdth + 100}%)`;
    wdth = wdth + 100;
    count++;
  }
});

document.querySelector('.feature-slider-container-arrows-left').addEventListener("click", () => {
  if (count === 0) {
    return;
  } else {
    featureContainer.style.transition = "transform 0.4s ease-in-out";
    featureContainer.style.transform = `translateX(-${wdth - 100}%)`;
    wdth = wdth - 100;
    count--;
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