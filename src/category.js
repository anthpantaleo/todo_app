// Categories

class Category {
  constructor(categoryname) {
    this.categoryname = categoryname;
  }
}

const categoryDisplay = document.querySelector(".category-display");
const categoriesInStorage = localStorage.getItem("categories") || [
  { categoryname: "all tasks" },
];

const categoryModule = (() => {
  window.addEventListener("load", () => {
    const categoryInput = document.getElementById("category");
    categoryInput.addEventListener("change", (e) => {
      let current = new Category(e.target.value);
      let currentCategoriesInStorage = JSON.parse(
        localStorage.getItem("categories")
      );
      let categories = currentCategoriesInStorage;
      categories.push(current);
      categoryInput.value = "";
      localStorage.setItem("categories", JSON.stringify(categories));
      addCategories(categories);
    });
  });

  function loadCategories() {
    if (localStorage.getItem("categories")) {
      console.log("Loaded Categories...");
    } else {
      localStorage.setItem(
        "categories",
        JSON.stringify([{ categoryname: "all tasks" }])
      );
    }
  }

  loadCategories();

  function addCategories(categories) {
    categories.forEach((category) => {
      console.log(category.categoryname);
    });
  }
})();

export { categoryModule };
