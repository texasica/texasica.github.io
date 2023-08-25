const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (
    window.scrollY > 0 &&
    window.innerHeight + window.scrollY + 50 < document.body.offsetHeight
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

// const wrapper = document.getElementById("tiles");
// const gridContainer = document.getElementById("grid-container");

// let columns = 0,
//   rows = 0,
//   toggled = false;
// const toggle = () => {
//   toggled = !toggled;

//   gridContainer.classList.toggle("toggled");
// };
// const handleOnClick = (index) => {
//   toggle();

//   anime({
//     targets: ".tile",
//     opacity: toggled ? 0 : 1,
//     delay: anime.stagger(50, {
//       grid: [columns, rows],
//       from: index,
//     }),
//   });
// };
// const createTile = (index) => {
//   const tile = document.createElement("div");

//   tile.classList.add("tile");

//   tile.style.opacity = toggled ? 0 : 1;

//   tile.onclick = (e) => handleOnClick(index);

//   return tile;
// };
// const createTiles = (quantity) => {
//   Array.from(Array(quantity)).map((tile, index) => {
//     wrapper.appendChild(createTile(index));
//   });
// };
// const createGrid = () => {
//   wrapper.innerHTML = "";

//   const size = gridContainer.clientWidth > 800 ? 100 : 50;
//   columns = Math.floor(gridContainer.clientWidth / size);
//   rows = Math.floor(gridContainer.clientHeight / size);
//   wrapper.style.setProperty("--columns", columns);
//   wrapper.style.setProperty("--rows", rows);

//   createTiles(columns * rows);
// };

// createGrid();

// window.onresize = () => createGrid();
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

createSubtitle("Community Recreation Culture");

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
  const maxTop = window.innerHeight - blob.offsetHeight / 2;

  const left = Math.min(clientX, maxLeft);
  const top = Math.min(clientY, maxTop);

  blob.animate(
    {
      left: `${left}px`,
      top: `${top}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};
