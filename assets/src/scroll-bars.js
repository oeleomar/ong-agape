const controls = document.querySelectorAll(".control");

let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  if (window.innerWidth < 900) {
    control.classList.add("disabled");
  }
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("arrow-left");

    if (isLeft) {
      currentItem--;
    } else {
      currentItem++;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));
    items[currentItem].scrollIntoView({
      inline: "center",
      behavior: "smooth",
      block: "nearest",
    });
    items[currentItem].classList.add("current-item");
  });
});
