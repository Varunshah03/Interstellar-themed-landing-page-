var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop:true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    mousewheel:true,
    keyboard:true
  });


//   $(document).ready(function () {
//     $(".owl-carousel").owlCarousel({
//         autoplay: true,
//         autoplayTimeout: 3000,
//         autoplayHoverPause: false,
//         items: 1,
//         center: true,
//         nav: false,
//         margin: 20,
//         dots: true,
//         loop: true,
//         responsive: {
//             0: { items: 1 },
//             600: { items: 2 },
//             1000: { items: 3 }
//         }
//     });
// });

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Set the default location to Baroda, Gujarat, India
  var barodaLat = 22.3072;
  var barodaLon = 73.1812;

  // Initialize the map centered at Baroda
  var map = L.map('map').setView([barodaLat, barodaLon], 13);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Add a marker for Baroda
  L.marker([barodaLat, barodaLon]).addTo(map)
      .bindPopup('Vadodara, Gujarat, India')
      .openPopup();