const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

document.getElementById("goHome").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo(0, 1);
});

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (
    window.scrollY > 0 &&
    window.innerHeight + window.scrollY + 1 < document.body.offsetHeight
  ) {
    navbar.classList.remove("navbar-initial");
    navbar.classList.add("navbar-active");
  } else {
    navbar.classList.remove("navbar-active");
    navbar.classList.add("navbar-initial");
  }
});

let sentences = [
  ["Jhalak Dance Competition"],
  ["Samosas and Mimosas"],
  ["Jab We Matched"],
  ["Annual Barge Party"],
];

let currentTyped = null;

function startTypingAnimation(swiper) {
  var activeSlide = swiper.realIndex;
  var typedElement = document.querySelectorAll(".typed-text")[activeSlide];

  if (currentTyped) {
    currentTyped.destroy();
  }

  currentTyped = new Typed(typedElement, {
    strings: sentences[activeSlide],
    typeSpeed: 30,
    backSpeed: 30,
    loop: false,
  });
}

var swiper = new Swiper(".swiper-container", {
  loop: false,
  speed: 750,
  lazy: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function () {
      setTimeout(() => {
        startTypingAnimation(this);
      }, 500);
    },
    slideChangeTransitionEnd: function () {
      if (this.realIndex === sentences.length) {
        this.slideTo(1, 0);
      } else if (this.realIndex === -1) {
        this.slideTo(sentences.length - 1, 0);
      } else {
        startTypingAnimation(this);
      }
    },
  },
});

const subtitle = document.getElementsByClassName("card-subtitle")[0];
const words = subtitle.getElementsByTagName("span");
let observer;

const createWord = (text, index) => {
  const word = document.createElement("span");

  word.textContent = text; // Set the word text

  word.classList.add("card-subtitle-word");

  word.style.transitionDelay = `${index * 150}ms`;

  return word;
};

const addWord = (text, index) => {
  const word = createWord(text, index);
  subtitle.appendChild(word);
  subtitle.appendChild(document.createElement("br")); // Add line break after each word
};

const createSubtitle = (text) => text.split(" ").map(addWord);

createSubtitle("Culture Community Camaraderie");

// Check if device is a touch device
// if (window.innerWidth <= 800 && window.innerHeight <= 600) {
//   const card = document.querySelector(".card");
//   const observerOptions = {
//     root: null, // relative to document viewport
//     rootMargin: "0px", // margin around root. Values are similar to css property. Unitless values not allowed
//     threshold: 0.5, // visible amount of item shown in relation to root
//   };

//   // Callback
//   const observerCallback = (entries, observer) => {
//     entries.forEach((entry) => {
//       // If entry (card) is visible - according with the params set in `options`
//       if (entry.isIntersecting) {
//         setTimeout(() => {
//           entry.target.classList.add("active");
//         }, 500); // 1 second after it enters viewport, add 'active' class to trigger animation
//       } else {
//         entry.target.classList.remove("active");
//       }
//     });
//   };

//   const observer = new IntersectionObserver(observerCallback, observerOptions);

//   // Observe card
//   observer.observe(card);
// }

const blob = document.getElementById("blob");
window.onpointermove = (event) => {
  const { clientX, clientY } = event;
  const maxLeft = window.innerWidth - blob.offsetWidth / 2;
  const maxTop =
    (document.documentElement.scrollTop || document.body.scrollTop) +
    blob.style.height / 2 -
    blob.offsetHeight / 2;

  const left = Math.min(clientX, maxLeft);

  var top =
    clientY +
    (document.documentElement.scrollTop || document.body.scrollTop) -
    Math.round(window.innerHeight);
  var top = Math.min(top, maxTop);
  blob.animate(
    {
      left: `${left}px`,
      top: `${top}px`,
    },
    { duration: 1000, fill: "forwards" }
  );
};

const blur = document.getElementById("blur");
if (
  document.getElementById("int-cont").clientHeight >=
  25 + Math.round(window.innerHeight)
) {
  blur.style.height = document.getElementById("int-cont").clientHeight + "px";
} else {
  blur.style.height = blur.style.height + "px";
}
if (document.body.clientWidth > 960) {
  document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,listYear",
      },
      buttonText: {
        today: "Today",
        month: "Month",
        list: "List",
      },
      displayEventTime: false,
      // plugins: ["googleCalendarPlugin"],
      googleCalendarApiKey: "AIzaSyB7j0L1ZR2jU695_76m7fWT19JDzR2_j3s",

      events: {
        googleCalendarId:
          "b85e3d63899cd189932469da55cb4d858511742f7e3e9bb09607b680d6d68ff8@group.calendar.google.com",
      },
      eventClick: function (arg) {
        window.open(arg.event.url, "_blank", "width=700,height=600");

        arg.jsEvent.preventDefault();
      },
    });
    calendar.render();
  });
} else {
  document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");

    var calendar = new FullCalendar.Calendar(calendarEl, {
      height: "auto",
      contentHeight: "auto",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,listYear",
      },
      buttonText: {
        today: "Today",
        month: "Month",
        list: "List",
      },
      displayEventTime: false,
      // plugins: ["googleCalendarPlugin"],
      googleCalendarApiKey: "AIzaSyB7j0L1ZR2jU695_76m7fWT19JDzR2_j3s",

      events: {
        googleCalendarId:
          "b85e3d63899cd189932469da55cb4d858511742f7e3e9bb09607b680d6d68ff8@group.calendar.google.com",
      },
      eventClick: function (arg) {
        window.open(arg.event.url, "_blank", "width=700,height=600");

        arg.jsEvent.preventDefault();
      },
    });
    calendar.render();
  });
}

if (document.body.clientWidth < 960) {
  blob.remove();
  blur.remove();
  // document.getElementById("info").style.height =
  //   Math.round(window.innerHeight) * 1.5 + "px";
}
