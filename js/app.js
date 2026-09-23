const products = [
  {
    id: "p1",
    name: "Nova X1",
    category: "smartphones",
    label: "Smartphone",
    price: 25990,
    oldPrice: 27990,
    rating: 4.9,
    reviews: 128,
    badge: "MAIS VENDIDO",
    type: "phone",
    colors: ["#6d4aff", "#a99cff"],
    description: "Smartphone 5G com ecrã AMOLED, 128 GB de armazenamento e câmara principal de 50 MP."
  },
  {
    id: "p2",
    name: "Nova Lite",
    category: "smartphones",
    label: "Smartphone",
    price: 18990,
    oldPrice: null,
    rating: 4.7,
    reviews: 84,
    badge: "NOVO",
    type: "phone",
    colors: ["#111827", "#64748b"],
    description: "Modelo equilibrado para uso diário, com bateria de longa duração e 128 GB de armazenamento."
  },
  {
    id: "p3",
    name: "Pulse Mini",
    category: "audio",
    label: "Áudio",
    price: 3490,
    oldPrice: 3990,
    rating: 4.8,
    reviews: 97,
    badge: "OFERTA",
    type: "speaker",
    colors: ["#f3c548", "#fff2a6"],
    description: "Coluna Bluetooth compacta, resistente a salpicos e com até 12 horas de reprodução."
  },
  {
    id: "p4",
    name: "Nova Air Pro",
    category: "audio",
    label: "Áudio",
    price: 6490,
    oldPrice: 7290,
    rating: 4.9,
    reviews: 142,
    badge: "DESTAQUE",
    type: "headphone",
    colors: ["#191c23", "#6d4aff"],
    description: "Auscultadores sem fios com cancelamento ativo de ruído, Bluetooth 5.3 e autonomia de 32 horas."
  },
  {
    id: "p5",
    name: "Nova Watch S",
    category: "accessories",
    label: "Acessório",
    price: 4990,
    oldPrice: 5590,
    rating: 4.6,
    reviews: 66,
    badge: "POPULAR",
    type: "watch",
    colors: ["#6d4aff", "#b8adff"],
    description: "Smartwatch com monitorização de atividade, notificações, chamadas Bluetooth e ecrã AMOLED."
  },
  {
    id: "p6",
    name: "Charge 65W",
    category: "accessories",
    label: "Acessório",
    price: 2190,
    oldPrice: null,
    rating: 4.8,
    reviews: 74,
    badge: "65W",
    type: "charger",
    colors: ["#6d4aff", "#e8e3ff"],
    description: "Carregador USB-C compacto de 65W preparado para smartphones, tablets e computadores compatíveis."
  },
  {
    id: "p7",
    name: "Nova X1 Max",
    category: "smartphones",
    label: "Smartphone",
    price: 32990,
    oldPrice: 34990,
    rating: 4.9,
    reviews: 53,
    badge: "PREMIUM",
    type: "phone",
    colors: ["#0f766e", "#5eead4"],
    description: "Smartphone premium com ecrã de alta taxa de atualização, 256 GB e sistema de câmara tripla."
  },
  {
    id: "p8",
    name: "Beat Go",
    category: "audio",
    label: "Áudio",
    price: 2790,
    oldPrice: null,
    rating: 4.5,
    reviews: 91,
    badge: "COMPACTO",
    type: "speaker",
    colors: ["#ef4444", "#fecaca"],
    description: "Coluna portátil para uso diário com ligação Bluetooth rápida e controlos físicos simples."
  }
];

let cart = JSON.parse(localStorage.getItem("novaCart") || "[]");
let activeCategory = "all";
let searchTerm = "";
let sortMode = "featured";

const grid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartEmpty = document.getElementById("cartEmpty");
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const checkoutModal = document.getElementById("checkoutModal");
const productModal = document.getElementById("productModal");
const toast = document.getElementById("toast");
const emptyState = document.getElementById("emptyState");
const searchPanel = document.getElementById("searchPanel");
const globalSearch = document.getElementById("globalSearch");

function money(value) {
  return new Intl.NumberFormat("pt-MZ").format(value) + " MT";
}

function productShape(product, extraClass = "") {
  const [c1, c2] = product.colors;
  if (product.type === "phone") {
    return `<div class="product-shape phone-product ${extraClass}" style="--p1:${c1};--p2:${c2}"></div>`;
  }
  if (product.type === "headphone") {
    return `<div class="product-shape headphone-product ${extraClass}" style="--p1:${c1};--p2:${c2}"></div>`;
  }
  if (product.type === "watch") {
    return `<div class="product-shape watch-product ${extraClass}" style="--p1:${c1};--p2:${c2}"><span></span></div>`;
  }
  if (product.type === "speaker") {
    return `<div class="product-shape speaker-product ${extraClass}" style="--p1:${c1};--p2:${c2}"><span></span><span></span></div>`;
  }
  return `<div class="product-shape charger-product ${extraClass}" style="--p1:${c1};--p2:${c2}">⚡</div>`;
}

function filteredProducts() {
  let result = products.filter(p => {
    const categoryMatch = activeCategory === "all" || p.category === activeCategory;
    const searchMatch = `${p.name} ${p.label} ${p.description}`.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  if (sortMode === "price-low") result.sort((a, b) => a.price - b.price);
  if (sortMode === "price-high") result.sort((a, b) => b.price - a.price);
  if (sortMode === "name") result.sort((a, b) => a.name.localeCompare(b.name));

  return result;
}

function renderProducts() {
  const list = filteredProducts();

  grid.innerHTML = list.map(p => `
    <article class="product-card">
      <div class="product-visual" style="background: linear-gradient(145deg, ${p.colors[1]}40, #f8f8fb)">
        <span class="product-badge">${p.badge}</span>
        ${productShape(p)}
      </div>
      <div class="product-info">
        <span class="product-category">${p.label}</span>
        <h3>${p.name}</h3>
        <div class="rating">★★★★★ <span>${p.rating} · ${p.reviews}</span></div>
        <div class="product-bottom">
          <div class="price">
            <strong>${money(p.price)}</strong>
            ${p.oldPrice ? `<del>${money(p.oldPrice)}</del>` : ""}
          </div>
          <button class="add-btn" data-add="${p.id}" aria-label="Adicionar ${p.name} ao carrinho">+</button>
        </div>
      </div>
      <button class="product-open" data-open-product="${p.id}" aria-label="Ver detalhes de ${p.name}"></button>
    </article>
  `).join("");

  emptyState.classList.toggle("hidden", list.length > 0);
}

function saveCart() {
  localStorage.setItem("novaCart", JSON.stringify(cart));
}

function cartQuantity() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartValue() {
  return cart.reduce((sum, item) => {
    const p = products.find(product => product.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function renderCart() {
  cartCount.textContent = cartQuantity();
  cartTotal.textContent = money(cartValue());
  document.getElementById("checkoutTotal").textContent = money(cartValue());

  if (!cart.length) {
    cartItems.innerHTML = "";
    cartEmpty.classList.remove("hidden");
    return;
  }

  cartEmpty.classList.add("hidden");
  cartItems.innerHTML = cart.map(item => {
    const p = products.find(product => product.id === item.id);
    return `
      <div class="cart-item">
        <div class="cart-thumb" style="background:${p.colors[1]}55">◈</div>
        <div>
          <h4>${p.name}</h4>
          <p>${money(p.price)}</p>
          <div class="qty-row">
            <button data-qty="${p.id}" data-change="-1">−</button>
            <strong>${item.qty}</strong>
            <button data-qty="${p.id}" data-change="1">+</button>
          </div>
        </div>
        <button class="remove-item" data-remove="${p.id}">Remover</button>
      </div>
    `;
  }).join("");
}

function addToCart(id) {
  const existing = cart.find(item => item.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id, qty: 1 });

  saveCart();
  renderCart();
  showToast("Produto adicionado ao carrinho.");
}

function changeQty(id, delta) {
  const item = cart.find(item => item.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  overlay.classList.add("open");
  document.body.classList.add("no-scroll");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  overlay.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

function openModal(modal) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function openProduct(id) {
  const p = products.find(product => product.id === id);
  const content = document.getElementById("productModalContent");
  content.innerHTML = `
    <div class="product-modal-layout">
      <div class="product-modal-visual" style="background:linear-gradient(145deg, ${p.colors[1]}70, #f7f7fb)">
        ${productShape(p)}
      </div>
      <div class="product-modal-info">
        <span class="eyebrow">${p.label.toUpperCase()}</span>
        <h2>${p.name}</h2>
        <div class="rating">★★★★★ <span>${p.rating} · ${p.reviews} avaliações</span></div>
        <p>${p.description}</p>
        <div class="modal-price">${money(p.price)}</div>
        <button class="btn btn-primary btn-full" data-modal-add="${p.id}">Adicionar ao carrinho</button>
      </div>
    </div>
  `;
  openModal(productModal);
}

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.addEventListener("click", event => {
  const add = event.target.closest("[data-add]");
  if (add) {
    event.stopPropagation();
    addToCart(add.dataset.add);
  }

  const open = event.target.closest("[data-open-product]");
  if (open) openProduct(open.dataset.openProduct);

  const qty = event.target.closest("[data-qty]");
  if (qty) changeQty(qty.dataset.qty, Number(qty.dataset.change));

  const remove = event.target.closest("[data-remove]");
  if (remove) removeFromCart(remove.dataset.remove);

  const modalAdd = event.target.closest("[data-modal-add]");
  if (modalAdd) {
    addToCart(modalAdd.dataset.modalAdd);
    closeModal(productModal);
  }

  const featuredAdd = event.target.closest("[data-featured-add]");
  if (featuredAdd) addToCart(featuredAdd.dataset.featuredAdd);

  const close = event.target.closest("[data-close-modal]");
  if (close) closeModal(document.getElementById(close.dataset.closeModal));
});

document.querySelectorAll(".category-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    renderProducts();
  });
});

document.getElementById("sortSelect").addEventListener("change", e => {
  sortMode = e.target.value;
  renderProducts();
});

globalSearch.addEventListener("input", e => {
  searchTerm = e.target.value;
  renderProducts();
  document.getElementById("produtos").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("searchToggle").addEventListener("click", () => {
  searchPanel.classList.add("open");
  setTimeout(() => globalSearch.focus(), 100);
});

document.getElementById("closeSearch").addEventListener("click", () => {
  searchPanel.classList.remove("open");
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("open");
});

document.querySelectorAll("#mobileMenu a").forEach(a => {
  a.addEventListener("click", () => document.getElementById("mobileMenu").classList.remove("open"));
});

document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (!cart.length) {
    showToast("O carrinho está vazio.");
    return;
  }
  closeCart();
  openModal(checkoutModal);
});

document.getElementById("checkoutForm").addEventListener("submit", e => {
  e.preventDefault();
  cart = [];
  saveCart();
  renderCart();
  closeModal(checkoutModal);
  e.target.reset();
  showToast("Pedido demonstrativo confirmado.");
});

document.getElementById("newsletterForm").addEventListener("submit", e => {
  e.preventDefault();
  e.target.reset();
  showToast("E-mail registado na demonstração.");
});

[productModal, checkoutModal].forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal(modal);
  });
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeCart();
    closeModal(productModal);
    closeModal(checkoutModal);
    searchPanel.classList.remove("open");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
renderCart();
