$(document).ready(function(){
    

    const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

//Swipper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 7,
  spaceBetween: 30,
  slidesPerGroup: 7,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-mobile", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$('img[usemap]').rwdImageMaps();
	
	
$("#mapa1").click(function(){
  $('#exampleModalLabel').text("Region 1");
  $("#modalText").text("XXX Adolescentes y jóvenes beneficiados");
  $("#exampleModal").modal("show");
})
$("#mapa2").click(function(){
  $('#exampleModalLabel').text("Region 2");
  $("#modalText").text("XXX Adolescentes y jóvenes beneficiados");
  $("#exampleModal").modal("show");
})
$("#mapa3").click(function(){
  $('#exampleModalLabel').text("Region 3");
  $("#modalText").text("XXX Adolescentes y jóvenes beneficiados");
  $("#exampleModal").modal("show");
})
$("#mapa4").click(function(){
  $('#exampleModalLabel').text("Region 4");
  $("#modalText").text("XXX Adolescentes y jóvenes beneficiados");
  $("#exampleModal").modal("show");
})
$("#mapa5").click(function(){
  $('#exampleModalLabel').text("Region 5");
  $("#modalText").text("XXX Adolescentes y jóvenes beneficiados");
  $("#exampleModal").modal("show");
})
$("#mapa6").click(function(){
  $('#exampleModalLabel').text("Region 6");
  $("#modalText").text("XXX Adolescentes y jóvenes beneficiados");
  $("#exampleModal").modal("show");
})

var swiper = new Swiper(".mySwiper-sacudetetv1", {
  slidesPerView: 4,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "",
    prevEl: "",
  },
});
var swiper = new Swiper(".mySwiperDisplayTV", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
});