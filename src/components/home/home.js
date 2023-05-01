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
    "overflow-hidden",
    "transition-all",
    "duration-300"
  );
  container.setAttribute("id", "container");

  const heroContainer = document.createElement("div");

  const heading = document.createElement("h2");
  heading.classList.add("text-6xl", "mb-4", "leading-tight", "animate-[side_1s_ease-in-out_forwards]");
  heading.innerHTML =
    'Spring in <span class="font-bold text-orange-300">WoodFood</span>';

  heroContainer.appendChild(heading);

  const copy = document.createElement("p");
  copy.classList.add("animate-[side_1.3s_ease-in-out_forwards]", "delay-75");
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
    "transition-all",
    "animate-[up_1s_ease-in-out_forwards]"
  );
  btnMenu.innerText = "Explore our menu";
  btnMenu.setAttribute("id", "home-btn-menu");

  heroContainer.appendChild(btnMenu);

  container.appendChild(heroContainer);

  const imageContainer = document.createElement("div");

  const homeDish = new Image();
  homeDish.src = homeImg;
  homeDish.classList.add("pointer-events-none", "animate-[up_0.8s_ease-in-out_forwards]");
  imageContainer.appendChild(homeDish);

  container.appendChild(imageContainer);

  return container;
}
