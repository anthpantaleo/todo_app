const generalDomControl = (() => {
  let themeIcon = document.getElementById("icon");

  themeIcon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      themeIcon.src = "../dist/images/sun.png";
    } else {
      themeIcon.src = "../dist/images/moon.png";
    }
  };
})();

export { generalDomControl };
