// Categories

class Category {
  constructor(categoryname) {
    this.categoryname = categoryname;
  }
}

let categories = [{ categoryname: "all" }, { categoryname: "work" }];

const categoryDisplay = document.querySelector(".category-display");

const categoryModule = (() => {
  window.addEventListener("load", () => {
    const categoriesInStorage = localStorage.getItem("categories") || [];
    const categoryInput = document.getElementById("category");

    categoryInput.addEventListener("change", (e) => {
      let current = new Category(e.target.value);
      categories.push(current);
      categoryInput.value = "";
      localStorage.setItem("category", JSON.stringify(categories));
      addCategories();
    });
  });

  function addCategories() {
    categories.forEach((category) => {
      console.log(category.categoryname);
    });
  }
})();

export { categoryModule, categories };
