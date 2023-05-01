export default function Contact() {
  const container = document.createElement("div");
  container.classList.add("pt-28", "px-80");

  const content = document.createElement("div");
  content.classList.add(
    "flex",
    "items-center",
    "justify-center",
    "gap-6",
    "relative"
  );

  const fieldContainer = document.createElement("form");
  fieldContainer.classList.add("w-1/2");

  const title = document.createElement("h2");
  title.classList.add("text-2xl", "font-bold");
  title.innerHTML = `Contact us <hr class="w-14 border-2 border-orange-300"/>`;
  fieldContainer.appendChild(title);

  const paragraph = document.createElement("p");
  paragraph.innerText = "We'd love to hear from you!";
  paragraph.classList.add("text-sm", "text-slate-400", "mt-2", "mb-4");
  fieldContainer.appendChild(paragraph);

  const lblName = document.createElement("label");
  lblName.classList.add("text-sm", "text-slate-400");
  lblName.innerText = "Full Name";
  lblName.setAttribute("for", "input-name");
  fieldContainer.appendChild(lblName);

  const inputName = document.createElement("input");
  inputName.classList.add(
    "w-full",
    "block",
    "border",
    "border-slate-300",
    "outline-none",
    "px-1",
    "mb-2",
    "focus:border-slate-400"
  );
  inputName.setAttribute("type", "text");
  inputName.setAttribute("id", "input-name");
  fieldContainer.appendChild(inputName);

  const lblEmail = document.createElement("label");
  lblEmail.classList.add("text-sm", "text-slate-400");
  lblEmail.innerText = "Email";
  lblEmail.setAttribute("for", "input-email");
  fieldContainer.appendChild(lblEmail);

  const inputEmail = document.createElement("input");
  inputEmail.classList.add(
    "w-full",
    "block",
    "border",
    "border-slate-300",
    "outline-none",
    "px-1",
    "mb-2",
    "focus:border-slate-400"
  );
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("id", "input-email");
  fieldContainer.appendChild(inputEmail);

  const lblMessage = document.createElement("label");
  lblMessage.classList.add("text-sm", "text-slate-400");
  lblMessage.innerText = "Message";
  lblMessage.setAttribute("for", "input-message");
  fieldContainer.appendChild(lblMessage);

  const inputMessage = document.createElement("textarea");
  inputMessage.classList.add(
    "w-full",
    "h-20",
    "block",
    "border",
    "border-slate-300",
    "outline-none",
    "p-1",
    "mb-2",
    "resize-none",
    "focus:border-slate-400"
  );
  inputMessage.setAttribute("for", "input-message");
  fieldContainer.appendChild(inputMessage);

  const btnSubmit = document.createElement("button");
  btnSubmit.classList.add(
    "bg-orange-300",
    "text-white",
    "text-sm",
    "px-8",
    "py-2",
    "w-full",
    "rounded",
    "shadow"
  );
  btnSubmit.innerText = "Submit";
  fieldContainer.appendChild(btnSubmit);

  content.appendChild(fieldContainer);

  const location = document.createElement("div");
  location.classList.add("w-1/2");
  location.innerHTML = `<div style="width: 100%"><iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe></div>`;

  content.appendChild(location);

  const frame = document.createElement("div");
  frame.classList.add(
    "absolute",
    "bg-orange-300",
    "w-48",
    "h-52",
    "-right-8",
    "-top-4",
    "-z-50"
  );
  content.appendChild(frame);

  container.appendChild(content);

  const infoContainer = document.createElement("div");
  infoContainer.classList.add(
    "flex",
    "items-center",
    "justify-between",
    "mt-8"
  );

  const addressCard = document.createElement("div");
  addressCard.classList.add("flex", "items-center", "gap-2", "px-4");

  const addressIcon = document.createElement("div");
  addressIcon.classList.add("text-orange-300", "text-4xl");
  addressIcon.innerHTML = `<i class="fa-solid fa-map-location"></i>`;
  addressCard.appendChild(addressIcon);

  const addressText = document.createElement("div");
  addressText.innerHTML = `<h3 class="text-lg">Location</h3><p class="text-sm text-slate-400">1 Grafton Street, Dublin, Ireland</p>`;
  addressCard.appendChild(addressText);

  infoContainer.appendChild(addressCard);

  const emailCard = document.createElement("div");
  emailCard.classList.add("flex", "items-center", "gap-2", "px-4");

  const emailIcon = document.createElement("div");
  emailIcon.classList.add("text-orange-300", "text-4xl");
  emailIcon.innerHTML = `<i class="fa-solid fa-envelope-open-text"></i>`;
  emailCard.appendChild(emailIcon);

  const emailText = document.createElement("div");
  emailText.innerHTML = `<h3 class="text-lg">Email</h3><p class="text-sm text-slate-400">wood@food.com</p>`;
  emailCard.appendChild(emailText);

  infoContainer.appendChild(emailCard);

  const phoneCard = document.createElement("div");
  phoneCard.classList.add("flex", "items-center", "gap-2", "px-4");

  const phoneIcon = document.createElement("div");
  phoneIcon.classList.add("text-orange-300", "text-4xl");
  phoneIcon.innerHTML = `<i class="fa-solid fa-phone-volume"></i>`;
  phoneCard.appendChild(phoneIcon);

  const phoneText = document.createElement("div");
  phoneText.innerHTML = `<h3 class="text-lg">Phone</h3><p class="text-sm text-slate-400">202-555-0152</p>`;
  phoneCard.appendChild(phoneText);

  infoContainer.appendChild(phoneCard);

  container.appendChild(infoContainer);

  return container;
}
