// =============================================
// LAJES LORD – main.js
// Interações: modal, menu, scroll, WhatsApp
// =============================================

/* -------- MODAL -------- */
function openModal(productKey) {
  const product = products[productKey];
  if (!product) return;

  document.getElementById("modalTitle").textContent = product.title;
  document.getElementById("modalCategory").textContent = product.category;
  document.getElementById("modalDesc").textContent = product.desc;
  document.getElementById("modalImg").src = product.img;
  document.getElementById("modalImg").alt = product.title;

  const specsList = document.getElementById("modalSpecs");
  specsList.innerHTML = "";
  product.specs.forEach(spec => {
    const li = document.createElement("li");
    li.textContent = spec;
    specsList.appendChild(li);
  });

  const waLink = encodeURIComponent(product.waMsg);
  document.getElementById("modalWA").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waLink}`;

  document.getElementById("modalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// Fechar modal com ESC
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

/* -------- HAMBURGER MENU -------- */
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("open");
});

// Fechar menu ao clicar em link
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("open");
  });
});

/* -------- HEADER SCROLL -------- */
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.4)";
  } else {
    header.style.boxShadow = "none";
  }
});

/* -------- SCROLL REVEAL -------- */
const revealElements = document.querySelectorAll(".product-card, .laje-item, .entrega__inner, .stat");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeUp 0.6s ease both";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.style.opacity = "0";
  observer.observe(el);
});

// Inicializar opacidade para animação
document.querySelectorAll(".product-card, .laje-item").forEach((el, i) => {
  el.style.animationDelay = `${i * 0.07}s`;
});
