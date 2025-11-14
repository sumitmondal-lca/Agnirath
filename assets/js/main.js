// stellernav js
jQuery('.stellarnav').stellarNav({
  theme: 'plain', // adds default color to nav. (light, dark)
  breakpoint: 1230, // number in pixels to determine when the nav should turn mobile friendly
  menuLabel: '', // label for the mobile nav
  sticky: false, // makes nav sticky on scroll (desktop only)
  position: 'static', // 'static', 'top', 'left', 'right' - when set to 'top', this forces the mobile nav to be placed absolutely on the very top of page
  openingSpeed: 250, // how fast the dropdown should open in milliseconds
  closingDelay: 250, // controls how long the dropdowns stay open for in milliseconds
  showArrows: true, // shows dropdown arrows next to the items that have sub menus
  phoneBtn: '', // adds a click-to-call phone link to the top of menu - i.e.: "18009084500"
  phoneLabel: 'Call Us', // label for the phone button
  locationBtn: '', // adds a location link to the top of menu - i.e.: "/location/", "http://site.com/contact-us/"
  locationLabel: 'Location', // label for the location button
  closeBtn: false, // adds a close button to the end of nav
  closeLabel: 'Close', // label for the close button
  mobileMode: false,
  scrollbarFix: false // fixes horizontal scrollbar issue on very long navs
});

// active links---------------
document.addEventListener("DOMContentLoaded", () => {
  // Select only top-level nav items
  const navLinks = document.querySelectorAll(".stellarnav > ul > li");

  // Remove active class from all and add on click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Keep active item based on current page URL
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const anchor = link.querySelector("a");
    if (anchor) {
      const hrefPage = anchor.getAttribute("href");

      // Compare only filenames (e.g., "courses.html")
      if (hrefPage === currentPage) {
        link.classList.add("active");
      }
    }
  });
});




// cursor ball ---------------------
  // Smooth custom cursor script
  (function(){
    const body = document.body;
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');

    let mouse = { x: window.innerWidth/2, y: window.innerHeight/2 };
    let dotPos = { x: mouse.x, y: mouse.y };
    let ringPos = { x: mouse.x, y: mouse.y };

    // tuning parameters
    const dotLerp = 0.45;   // how fast the dot catches the cursor (0-1)
    const ringLerp = 0.12;  // how fast the ring catches the cursor (0-1)

    // track mouse
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }, { passive:true });

    // add hover effect when over interactive elements
    const interactiveSelector = 'a, button, input, textarea, select, label, [role="button"], .interactive';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelector)) body.classList.add('cursor-hover');
    });
    document.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest(interactiveSelector)) body.classList.remove('cursor-hover');
    });

    // animation frame loop
    function raf() {
      // lerp dot
      dotPos.x += (mouse.x - dotPos.x) * dotLerp;
      dotPos.y += (mouse.y - dotPos.y) * dotLerp;

      // lerp ring (slower)
      ringPos.x += (mouse.x - ringPos.x) * ringLerp;
      ringPos.y += (mouse.y - ringPos.y) * ringLerp;

      // apply transforms
      dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(raf);
    }

    // kick off
    dot.style.opacity = '1';
    ring.style.opacity = '1';
    requestAnimationFrame(raf);
  })();



  // our projects slider-----------------------
  $('.projects-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });




// Number Counter ------------------------------------------
// document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration) {
//         let obj = document.getElementById(id);
//         if (!obj) return;
//         let current = start,
//             range = end - start,
//             increment = end > start ? Math.ceil(range / (duration / 10)) : Math.floor(range / (duration / 10)),
//             step = 10,  // Faster update interval
//             timer = setInterval(() => {
//                 current += increment;
//                 if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
//                     current = end;
//                     clearInterval(timer);
//                     obj.textContent = current + "+"; // Add "+" when the count reaches the end
//                 } else {
//                     obj.textContent = current;
//                 }
//             }, step);
//     }
//     counter("count1", 50, 1000, 500);  // Increased speed
//     counter("count2", 50, 100, 1500);     // Faster
//     counter("count3", 0, 50, 1000);       // Faster
// });


// sidhu ai typed js---------------------------
let typed = new Typed('#element', {
    strings: ['space', 'defense tech', 'AI image generators'],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1200,
    startDelay: 500,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true,
    shuffle: false,
    fadeOut: true,
    fadeOutDelay: 500
});