const navSpans = document.querySelectorAll(".navSpan");
const navSpanLogo = document.querySelector("#logo");

const dropDownMenu = document.querySelector(".dropDownMenu");
const dropDownButton = document.getElementById("dropDown");
const dropDownMenuButtons = document.querySelectorAll(".dropDownMenu button");

const wellcomeScreenOverlay = document.querySelector(".wellcomeScreenOverlay");
const wellcomeScreenButton = document.querySelector(".wellcomeScreen button");

const filterButtons = document.querySelectorAll(".filter");

const filterMercedes = document.querySelector(".filter.mercedes");
const filterAudi = document.querySelector(".filter.audi");
const filterBmw = document.querySelector(".filter.bmw");
const filterPorsche = document.querySelector(".filter.porsche");
const filterLamborghini = document.querySelector(".filter.lamborghini");
const filterFerrari = document.querySelector(".filter.ferrari");

const applyChoicesButton = document.getElementById("applyChoices");

const contentContainerImgs = document.querySelectorAll(".contentContainer img");

const resultsMercedes = document.querySelectorAll(".contentContainer .m");
const resultsAudi = document.querySelectorAll(".contentContainer .a");
const resultsBmw = document.querySelectorAll(".contentContainer .b");
const resultsPorsche = document.querySelectorAll(".contentContainer .p");
const resultsLamborghini = document.querySelectorAll(".contentContainer .l");
const resultsFerrari = document.querySelectorAll(".contentContainer .f");

const loadButton = document.querySelector(".loadButton");
const displayImgs1 = document.querySelectorAll(".display1");
const displayImgs2 = document.querySelectorAll(".display2");
const displayImgs3 = document.querySelectorAll(".display3");
const displayImgs4 = document.querySelectorAll(".display4");
const displayImgs5 = document.querySelectorAll(".display5");
const displayImgs6 = document.querySelectorAll(".display6");
const displayImgs7 = document.querySelectorAll(".display7");

const footerIcons = document.querySelectorAll(".footerItems .icons a");

navSpans.forEach((navSpan) => {
  navSpan.addEventListener("mouseenter", () => {
    navSpan.style.textDecoration = "1px rgb(248, 249, 250) underline";
    navSpan.style.scale = "1.1";
  });
});
navSpans.forEach((navSpan) => {
  navSpan.addEventListener("mouseleave", () => {
    navSpan.style.textDecoration = "none";
    navSpan.style.scale = "1";
  });
});

navSpanLogo.addEventListener("mouseenter", () => {
  navSpanLogo.style.backgroundColor = "rgb(248, 249, 250)";
  navSpanLogo.style.color = "rgb(33, 37, 41)";
});
navSpanLogo.addEventListener("mouseleave", () => {
  navSpanLogo.style.backgroundColor = "rgb(33, 37, 41)";
  navSpanLogo.style.color = "rgb(248, 249, 250)";
});

let dropDownButtonColor = "inActive";
dropDownButton.addEventListener("click", () => {
  if (dropDownButtonColor === "inActive") {
    dropDownButton.style.color = "#999";
    dropDownButtonColor = "active";
  } else {
    dropDownButton.style.color = "rgb(248, 249, 250)";
    dropDownButtonColor = "inActive";
  }
});

dropDownMenuButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "rgba(33, 37, 41, 0.8)";
    button.style.color = "rgb(248, 249, 250)";
    button.style.border = "2px solid rgb(248, 249, 250)";
    button.style.transition = "0.3s ease";
    button.style.scale = "0.98";
  });
});

dropDownMenuButtons.forEach((button) => {
  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "rgba(33, 37, 41, 0.6";
    button.style.color = "rgb(248, 249, 250)";
    button.style.border = "2px solid rgb(33, 37, 41)";
    button.style.transition = "0.3s ease";
    button.style.scale = "1";
  });
});

let dropDownDisplay = 0;
dropDownButton.addEventListener("click", () => {
  if (dropDownDisplay === 0) {
    setTimeout(() => {
      dropDownMenu.style.transform = "translateX(0vw) scale(1)";
    }, 100);
    dropDownDisplay = 1;
    dropDownMenu.style.display = "flex";
  } else {
    setTimeout(() => {
      dropDownMenu.style.display = "none";
      dropDownDisplay = 0;
    }, 250);
    dropDownMenu.style.transform = "translateX(40vw) scale(0.5)";
  }
});

wellcomeScreenButton.addEventListener("mouseenter", () => {
  wellcomeScreenButton.style.backgroundColor = "rgba(33, 37, 41, 0.8)";
  wellcomeScreenButton.style.color = "rgb(248, 249, 250)";
  wellcomeScreenButton.style.border = "2px solid rgb(248, 249, 250)";
  wellcomeScreenButton.style.transition = "0.3s ease";
  wellcomeScreenButton.style.cursor = "pointer";
  wellcomeScreenButton.style.scale = "1.1";

  wellcomeScreenOverlay.style.backgroundColor = "rgba(33, 37, 41, 0.45)";
  wellcomeScreenOverlay.style.transition = "1s ease";
});
wellcomeScreenButton.addEventListener("mouseleave", () => {
  wellcomeScreenButton.style.backgroundColor = "rgba(33, 37, 41, 0.6)";
  wellcomeScreenButton.style.color = "rgb(248, 249, 250)";
  wellcomeScreenButton.style.border = "2px solid rgb(33, 37, 41)";
  wellcomeScreenButton.style.transition = "0.3s ease";
  wellcomeScreenButton.style.scale = "1";

  wellcomeScreenOverlay.style.backgroundColor = "rgba(33, 37, 41, 0)";
  wellcomeScreenOverlay.style.transition = "1s ease";
});
wellcomeScreenButton.addEventListener("click", () => {
  function scrollPage() {
    const targetSection = document.getElementById("searchFilters");
    const targetPosition = targetSection.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
  scrollPage();
});

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener("mouseenter", () => {
    filterButton.style.backgroundColor = "rgba(108, 117, 125, 0.9)";
  });
});

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener("mouseleave", () => {
    if (filterButton.classList.contains("inActiveFilter")) {
      filterButton.style.backgroundColor = "transparent";
    } else {
      filterButton.style.backgroundColor = "rgba(108, 117, 125, 0.4)";
    }
  });
});

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener("mousedown", () => {
    filterButton.style.scale = "0.95";
  });
});
filterButtons.forEach((filterButton) => {
  filterButton.addEventListener("mouseup", () => {
    filterButton.style.scale = "1";
  });
});

let mercedesValue = 1;
filterMercedes.addEventListener("click", () => {
  filterMercedes.classList.toggle("inActiveFilter");
  if (filterMercedes.classList.contains("inActiveFilter")) {
    mercedesValue = 0;
  } else {
    mercedesValue = 1;
  }
});

let audiValue = 1;
filterAudi.addEventListener("click", () => {
  filterAudi.classList.toggle("inActiveFilter");
  if (filterAudi.classList.contains("inActiveFilter")) {
    audiValue = 0;
  } else {
    audiValue = 1;
  }
});

let bmwValue = 1;
filterBmw.addEventListener("click", () => {
  filterBmw.classList.toggle("inActiveFilter");
  if (filterBmw.classList.contains("inActiveFilter")) {
    bmwValue = 0;
  } else {
    bmwValue = 1;
  }
});

let porscheValue = 1;
filterPorsche.addEventListener("click", () => {
  filterPorsche.classList.toggle("inActiveFilter");
  if (filterPorsche.classList.contains("inActiveFilter")) {
    porscheValue = 0;
  } else {
    porscheValue = 1;
  }
});

let lamborghiniValue = 1;
filterLamborghini.addEventListener("click", () => {
  filterLamborghini.classList.toggle("inActiveFilter");
  if (filterLamborghini.classList.contains("inActiveFilter")) {
    lamborghiniValue = 0;
  } else {
    lamborghiniValue = 1;
  }
});

let ferrariValue = 1;
filterFerrari.addEventListener("click", () => {
  filterFerrari.classList.toggle("inActiveFilter");
  if (filterFerrari.classList.contains("inActiveFilter")) {
    ferrariValue = 0;
  } else {
    ferrariValue = 1;
  }
});

contentContainerImgs.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.style.scale = "1.02";
    img.style.cursor = "pointer";
  });
});
contentContainerImgs.forEach((img) => {
  img.addEventListener("mouseleave", () => {
    img.style.scale = "1";
  });

  applyChoicesButton.addEventListener("mouseenter", () => {
    applyChoicesButton.style.scale = 0.98;
    applyChoicesButton.style.backgroundColor = "#444";
  });
  applyChoicesButton.addEventListener("mouseleave", () => {
    applyChoicesButton.style.scale = 1;
    applyChoicesButton.style.backgroundColor = "#333";
  });
});
applyChoicesButton.addEventListener("click", () => {
  resetFilters();
  loadButton.classList.remove("inActive");

  resultsFerrari.forEach((resultFerrari) => {
    resultFerrari.classList.add("inActive");
    if (ferrariValue === 1) {
      resultFerrari.classList.remove("inActive");
    }
  });

  resultsMercedes.forEach((resultMercedes) => {
    resultMercedes.classList.add("inActive");
    if (mercedesValue === 1) {
      resultMercedes.classList.remove("inActive");
    }
  });

  resultsAudi.forEach((resultAudi) => {
    resultAudi.classList.add("inActive");
    if (audiValue === 1) {
      resultAudi.classList.remove("inActive");
    }
  });

  resultsBmw.forEach((resultBmw) => {
    resultBmw.classList.add("inActive");
    if (bmwValue === 1) {
      resultBmw.classList.remove("inActive");
    }
  });

  resultsPorsche.forEach((resultPorsche) => {
    resultPorsche.classList.add("inActive");
    if (porscheValue === 1) {
      resultPorsche.classList.remove("inActive");
    }
  });

  resultsLamborghini.forEach((resultLamborghini) => {
    resultLamborghini.classList.add("inActive");
    if (lamborghiniValue === 1) {
      resultLamborghini.classList.remove("inActive");
    }
  });
});
function resetFilters() {
  loadedImages = 1;
  displayImgs2.forEach((displayImg) => {
    displayImg.style.display = "none";
  });
  displayImgs3.forEach((displayImg) => {
    displayImg.style.display = "none";
  });
  displayImgs4.forEach((displayImg) => {
    displayImg.style.display = "none";
  });
  displayImgs5.forEach((displayImg) => {
    displayImg.style.display = "none";
  });
  displayImgs6.forEach((displayImg) => {
    displayImg.style.display = "none";
  });
  displayImgs7.forEach((displayImg) => {
    displayImg.style.display = "none";
  });
}

loadButton.addEventListener("mouseenter", () => {
  loadButton.style.backgroundColor = "rgba(33, 37, 41, 0.8)";
  loadButton.style.color = "rgb(248, 249, 250)";
  loadButton.style.border = "2px solid rgb(248, 249, 250)";
  loadButton.style.transition = "0.3s ease";
  loadButton.style.cursor = "pointer";
  loadButton.style.scale = "1.1";
});
loadButton.addEventListener("mouseleave", () => {
  loadButton.style.backgroundColor = "rgba(33, 37, 41, 0.6)";
  loadButton.style.color = "rgb(248, 249, 250)";
  loadButton.style.border = "2px solid rgb(33, 37, 41)";
  loadButton.style.transition = "0.3s ease";
  loadButton.style.scale = "1";
});

let loadedImages = 1;
loadButton.addEventListener("click", () => {
  loadedImages++;

  displayImgs7.forEach((displayImg) => {
    if (loadedImages === 7) {
      loadButton.classList.add("inActive");
      displayImg.style.display = "flex";
      if (displayImg.classList.contains("inActive")) {
        displayImg.style.display = "none";
      }
    }
  });

  displayImgs6.forEach((displayImg) => {
    if (loadedImages === 6) {
      displayImg.style.display = "flex";
      if (displayImg.classList.contains("inActive")) {
        displayImg.style.display = "none";
      }
    }
  });

  displayImgs5.forEach((displayImg) => {
    if (loadedImages === 5) {
      displayImg.style.display = "flex";
      if (displayImg.classList.contains("inActive")) {
        displayImg.style.display = "none";
      }
    }
  });

  displayImgs4.forEach((displayImg) => {
    if (loadedImages === 4) {
      displayImg.style.display = "flex";
      if (displayImg.classList.contains("inActive")) {
        displayImg.style.display = "none";
      }
    }
  });
  displayImgs3.forEach((displayImg) => {
    if (loadedImages === 3) {
      displayImg.style.display = "flex";
      if (displayImg.classList.contains("inActive")) {
        displayImg.style.display = "none";
      }
    }
  });
  displayImgs2.forEach((displayImg) => {
    if (loadedImages === 2) {
      displayImg.style.display = "flex";
      if (displayImg.classList.contains("inActive")) {
        displayImg.style.display = "none";
      }
    }
  });
});

/* FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER FOOTER  */

footerIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.fontSize = "1.15em";
  });
});
footerIcons.forEach((icon) => {
  icon.addEventListener("mouseleave", () => {
    icon.style.fontSize = "1em";
  });
});
