import homeImg from "./home_dish.png";

export default function Homepage() {
  const container = document.createElement("div");
  container.classList.add(
    "flex",
    "items-center",
    "justify-between",
    "pt-20",
    "pl-24",
    "h-screen",
    "overflow-hidden"
  );

  const heroContainer = document.createElement("div");

  const heading = document.createElement("h2");
  heading.classList.add("text-6xl", "mb-4", "leading-tight");
  heading.innerHTML =
    'Spring in <span class="font-bold text-orange-300">WoodFood</span>';

  heroContainer.appendChild(heading);

  const copy = document.createElement("p");
  copy.innerText = "The most delicious outdoor food";

  heroContainer.appendChild(copy);

  const btnMenu = document.createElement("button");
  btnMenu.classList.add(
    "border",
    "border-slate-300",
    "ml-6",
    "mt-4",
    "px-8",
    "py-4",
    "rounded-full",
    "shadow-sm",
    "hover:shadow-2xl",
    "hover:border-slate-400",
    "transition-all"
  );
  btnMenu.innerText = "Explore our menu";
  btnMenu.setAttribute("id", "home-btn-menu");

  heroContainer.appendChild(btnMenu);

  container.appendChild(heroContainer);

  const imageContainer = document.createElement("div");

  const homeDish = new Image();
  homeDish.src = homeImg;
  homeDish.classList.add("pointer-events-none");
  imageContainer.appendChild(homeDish);

  container.appendChild(imageContainer);

  return container;
}
