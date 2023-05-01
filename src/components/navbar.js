function btn(title) {
  const btn = document.createElement("button");
  btn.classList.add(
    "nav-btn",
    "font-semibold",
    "text-sm",
    "hover:border-b",
    "hover:border-b-slate-400",
    "transition-all"
  );
  btn.innerHTML = title;
  btn.setAttribute("id", `btn-${title}`);

  return btn;
}

export default function navbar() {
  const container = document.createElement("div");
  container.classList.add(
    "flex",
    "items-center",
    "justify-between",
    "pt-10",
    "pb-5",
    "px-24",
    "w-full",
    "fixed"
  );

  const header = document.createElement("h1");
  header.classList.add("text-2xl", "font-bold", "cursor-pointer");
  header.innerHTML = 'Wood<span class="text-slate-300">Food</span>';
  container.appendChild(header);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("flex", "px-8", "gap-8");

  const btnHome = btn("Home");
  btnContainer.appendChild(btnHome);

  const btnMenu = btn("Menu");
  btnContainer.appendChild(btnMenu);

  const btnContact = btn("Contact");
  btnContainer.appendChild(btnContact);

  container.appendChild(btnContainer);

  const btnSocialContainer = document.createElement("div");
  btnSocialContainer.classList.add("flex", "px-8", "gap-8");

  const btnSocialFacebook = btn(
    '<i class="fa-brands fa-facebook-f text-lg pb-1"></i>'
  );
  btnSocialContainer.appendChild(btnSocialFacebook);

  const btnSocialInstagram = btn(
    '<i class="fa-brands fa-instagram text-lg pb-1"></i>'
  );
  btnSocialContainer.appendChild(btnSocialInstagram);

  container.appendChild(btnSocialContainer);

  return container;
}
