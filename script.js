const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
nav?.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "☰";
  }),
);
document.querySelector("#year").textContent = new Date().getFullYear();

const whatsappNumber = '+2348119258962'; 

const enquiryForm = document.querySelector('#enquiry-form');

enquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(enquiryForm);

  const name = data.get('name') || '';
  const interest = data.get('interest') || '';
  const message = data.get('message') || '';

  const enquiry = `Hello Winds Supermarket!

My name is ${name}.

Enquiry: ${interest}

Message: ${message}`;

  const whatsappURL =
    `https://wa.me/${+2348119258962}?text=${encodeURIComponent(enquiry)}`;

  window.open(whatsappURL, '_blank');
});

