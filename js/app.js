// 1- Sélecteurs
let img = document.getElementById("bg-img");
console.log(img);
let style = img.currentStyle || window.getComputedStyle(img, false),
  bi = style.backgroundImage;
let titre1 = document.getElementById("titre1"),
  titre2 = document.getElementById("titre2");

// 3- Fonctions

function slider() {
  // let src = img.getAttribute("url");

  switch (bi.substring(bi.search("img/"), bi.length - 2)) {
    case "img/background.jpg":
      img.style.backgroundImage = "url(img/background2.jpg)";
      (style = img.currentStyle || window.getComputedStyle(img, false)),
        (bi = style.backgroundImage);
      titre1.style.color = "black";
      titre2.style.color = "black";
      break;
    case "img/background2.jpg":
      img.style.backgroundImage = "url(img/background3.jpg)";
      (style = img.currentStyle || window.getComputedStyle(img, false)),
        (bi = style.backgroundImage);
      titre1.style.color = "white";
      titre2.style.color = "white";
      break;
    case "img/background3.jpg":
      img.style.backgroundImage = "url(img/background.jpg)";
      (style = img.currentStyle || window.getComputedStyle(img, false)),
        (bi = style.backgroundImage);
      titre1.style.color = "white";
      titre2.style.color = "white";
      break;
  }
}

window.setInterval(slider, 15000);
