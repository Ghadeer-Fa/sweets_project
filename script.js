document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});
function countup(el, target) {
  let data = { count: 0 };
  anime({
    targets: data,
    count: [0, target],
    duration: 60000,
    round: 1,
    delay: 200,
    easing: 'easeOutCubic',
    update() {
      el.innerText = data.count.toLocaleString();
    }
  });
}


function countup(el, target) {
    let data = { count: 0 };
    anime({
      targets: data,
      count: [0, target],
      duration: 500,
      round: 1,
      delay: 200,
      easing: 'easeOutCubic',
      update() {
        el.innerText = data.count.toLocaleString();
      }
    });
  }
  
  function makeCountup(el) {
    const text = el.textContent;
    const target = parseInt(text, 10);
  
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          countup(el, target);
          io.unobserve(entry.target);
        }
      });
    });
  
    io.observe(el);
  }
  
  const els = document.querySelectorAll('[data-countup]');
  
  els.forEach(makeCountup);
  // 
//  
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('#menu-tabs li');
  const contents = document.querySelectorAll('.tab-content .content');

  tabs.forEach(tab => {
      tab.addEventListener('click', () => {
          // إزالة الفئة النشطة من جميع التبويبات
          tabs.forEach(t => t.classList.remove('is-active'));
          // إزالة الفئة النشطة من جميع الأقسام
          contents.forEach(content => content.classList.remove('is-active'));

          // إضافة الفئة النشطة للتبويب والقسم الذي تم النقر عليه
          tab.classList.add('is-active');
          const target = tab.getAttribute('data-tab');
          document.getElementById(target).classList.add('is-active');
      });
  });
});
// 
//اtestimonials
const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
      el: '.swiper-testimoniala-pagination',
      clickable: true,
  },
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
});
// swiper-images

 var swiper_image = new Swiper(".swiper_image",  {
  slidesPerView: 3,
  spaceBetween: 0,
  pagination: {
      el: ".swiper-image-pagination",
      clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
},
 
});

// gallery
var swiper_gallery = new Swiper(".swiper-gallery", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
      prev: {
          shadow: true,
          translate: [0, 0, -400],
      },
      next: {
          translate: ["100%", 0, 0],
      },
  },
  autoplay: {
              delay: 2000,
          },
});
// الزر
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// 
// gallery
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
},
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
// 
// لوضع الخط في الناف بار عند الوصول عند السكشن المطلوب
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
      let current = "";

      // تحديد القسم الحالي بناءً على التمرير
      sections.forEach((section) => {
          const sectionTop = section.offsetTop - 150; // 
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
              current = section.getAttribute("id");
          }
      });

      // تحديث الروابط بناءً على القسم الحالي
      navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").includes(current)) {
              link.classList.add("active");
          }
      });
  });
});