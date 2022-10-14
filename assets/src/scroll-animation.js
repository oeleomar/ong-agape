const observerNormal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-right");
    } else {
      entry.target.classList.remove("show-right");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden-right");
hiddenElements.forEach((el) => observerNormal.observe(el));

const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-left");
    } else {
      entry.target.classList.remove("show-left");
    }
  });
});

const hiddenLeft = document.querySelectorAll(".hidden-left");
hiddenLeft.forEach((el) => observerLeft.observe(el));

const doe = document.querySelector(".doe-anim");
const observerDoe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("doe-anim-animate");
    } else {
      entry.target.classList.remove("doe-anim-animate");
    }
  });
});
observerDoe.observe(doe);
