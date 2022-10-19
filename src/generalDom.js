const storageControl = (() => {
  window.addEventListener("load", () => {
    const nameImput = document.getElementById("name");
    const userName = localStorage.getItem("userName") || "";

    nameImput.value = userName;

    nameImput.addEventListener("change", (e) => {
      localStorage.setItem("userName", e.target.value);
    });
  });
})();

const generalDomControl = (() => {
  const themeIcon = document.getElementById("icon");

  themeIcon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      themeIcon.src = "../dist/images/sunpixel.png";
    } else {
      themeIcon.src = "../dist/images/half-moon.png";
    }
  };
})();

export { generalDomControl, storageControl };
