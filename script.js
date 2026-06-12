// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// Quote form (front-end only demo — no backend wired up yet)
const form = document.getElementById("quoteForm");
const note = document.getElementById("formNote");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const type = form.type.value;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailOk || !type) {
      note.textContent = "Please add your name, a valid email, and what you need covered.";
      note.className = "form-note err";
      return;
    }

    note.textContent = `Thanks, ${name}! Paul will reach out shortly with your ${type.toLowerCase()} quote.`;
    note.className = "form-note ok";
    form.reset();
    // TODO: POST to a backend / email service when one is available.
  });
}
