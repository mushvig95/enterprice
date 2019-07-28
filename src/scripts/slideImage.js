const slideContainer = document.querySelector(".image-slider-container-image");
const slideContainerImages = document.querySelectorAll(
  ".image-slider-container-image img"
);
const prevBtn = document.querySelector(".image-slider-container-arrows-left");
const nextBtn = document.querySelector(".image-slider-container-arrows-right");
/******************************************************************************** */
const orderCallContainer = document.querySelector(".contacts-container-call");
const callClickedContainer = document.querySelector(
  ".contacts-container-call-clicked"
);
const ordeerCallBtn = document.querySelector(".contacts-container-call-button");
const closeOrderBtn = document.querySelector(
  ".contacts-container-call-button-closed"
);

ordeerCallBtn.addEventListener("click", () => {
  orderCallContainer.style.display = "none";
  callClickedContainer.style.display = "flex";
});
closeOrderBtn.addEventListener("click", () => {
  orderCallContainer.style.display = "flex";
  callClickedContainer.style.display = "none";
});

//  First slider
let counter = 0;
let width = 0;

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
// Last Slider
$(".industry-container-slide").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  arrows: false,
  responsive: [{ // responsive break point for the window width less than 800
    breakpoint: 500,
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

function getSlides() {
  if ($(window).width() > 800) {
    slides.forEach((slide, index) => {
      slide.style.left = index * 100 + '%'
    })

    for (let i = 1; i < slides.length + 1; i++) {
      document.querySelector(`.nav${i}`).addEventListener('click', () => {
        track.style.transform = `translateX(-${(i - 1) * 100}%)`;
      })
    }
  }
}
getSlides();