async function categories(categoriesContainer, dishesContainer) {
  const categories = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  )
    .then((response) => response.json())
    .then((categories) => categories.categories);

  for (let category of categories) {
    const title = document.createElement("button");
    title.classList.add(
      "btn-category",
      "border",
      "rounded",
      "px-2",
      "py-1",
      "text-sm",
      "hover:bg-slate-200"
    );
    title.innerText = category.strCategory;

    title.setAttribute("id", `btn-${category.strCategory}`);

    categoriesContainer.appendChild(title);

    const htmlCategoryButton = document.querySelector(
      `#btn-${category.strCategory}`
    );

    const dishes = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`
    )
      .then((response) => response.json())
      .then((dishes) => dishes.meals);

    htmlCategoryButton.addEventListener("click", () => {
      const buttons = document.querySelectorAll(".btn-category");
      for (let button of buttons) {
        button.classList.remove("bg-slate-200", "border-slate-300");
      }
      htmlCategoryButton.classList.add("bg-slate-200", "border-slate-300");

      dishesContainer.innerHTML = "";
      for (let dish of dishes.slice(-10)) {
        const article = document.createElement("article");
        article.classList.add(
          "text-center",
          "bg-white",
          "border",
          "border-slate-300",
          "rounded-lg",
          "shadow"
        );

        const img = new Image();
        img.src = dish.strMealThumb;
        img.classList.add("w-full", "h-dish", "object-cover");
        article.appendChild(img);

        const title = document.createElement("h3");
        title.classList.add("mt-6", "font-bold", "line-clamp-1");
        title.textContent = dish.strMeal;
        article.appendChild(title);

        const price = document.createElement("p");
        price.classList.add(
          "inline-block",
          "before:content-['$']",
          "before:not-italic",
          "text-slate-500",
          "mt-6",
          "text-sm",
          "italic"
        );
        price.textContent = (Math.ceil(Math.random() * 30) + 9.99).toFixed(2);
        article.appendChild(price);
        dishesContainer.appendChild(article);
      }
    });
  }

  const btnStarter = document.querySelector("#btn-Starter");
  btnStarter.click();
}

export default function Menu() {
  const container = document.createElement("div");
  container.classList.add("pt-24", "px-24", "transition-all", "duration-300");
  container.setAttribute("id", "container");

  const title = document.createElement("h2");
  title.classList.add("text-lg", "font-bold");
  title.innerText = "Categories";

  container.appendChild(title);

  const categoriesContainer = document.createElement("div");
  categoriesContainer.classList.add(
    "flex",
    "items-center",
    "gap-2",
    "mt-2",
    "flex-wrap"
  );

  const dishesContainer = document.createElement("div");
  dishesContainer.classList.add(
    "mt-4",
    "grid",
    "grid-cols-[repeat(auto-fill,_minmax(200px,1fr))]",
    "auto-rows-[minmax(200px,_1fr)]",
    "gap-6"
  );

  categories(categoriesContainer, dishesContainer);

  container.appendChild(categoriesContainer);
  container.appendChild(dishesContainer);

  for (let i = 0; i < 10; i++) {
    const article = document.createElement("article");
    article.classList.add(
      "pb-6",
      "flex",
      "flex-col",
      "items-center",
      "text-center",
      "bg-white",
      "border",
      "border-slate-300",
      "rounded-lg",
      "shadow",
      "animate-pulse"
    );

    const img = document.createElement("div");
    img.classList.add("w-full", "h-4/5", "bg-slate-300");
    article.appendChild(img);

    const title = document.createElement("div");
    title.classList.add(
      "h-4",
      "w-3/4",
      "mt-6",
      "font-bold",
      "line-clamp-1",
      "bg-slate-300",
      "rounded"
    );
    article.appendChild(title);

    const price = document.createElement("div");
    price.classList.add(
      "h-4",
      "w-6",
      "before:not-italic",
      "text-slate-500",
      "mt-6",
      "text-sm",
      "italic",
      "bg-slate-300",
      "rounded"
    );
    article.appendChild(price);
    dishesContainer.appendChild(article);
  }

  return container;
}
