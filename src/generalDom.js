const generalDomControl = (() => {
  let themeIcon = document.getElementById("icon");

  themeIcon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      themeIcon.src = "../dist/images/sunpixel.png";
    } else {
      themeIcon.src = "../dist/images/half-moon.png";
    }
  };
})();

export { generalDomControl };
