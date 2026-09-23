const novaCopy = {
  pt: {
    announcement: "Entrega grátis em compras acima de 4.000 MT", announcement2: "Pagamento seguro · Suporte 7 dias",
    home: "Início", products: "Produtos", benefits: "Vantagens", contact: "Contacto", cart: "Carrinho", close: "Fechar",
    searchPlaceholder: "Pesquisar smartphones, áudio, acessórios...", eyebrow: "TECNOLOGIA SEM COMPLICAÇÕES",
    heroTitle: "O teu próximo upgrade começa aqui.", heroText: "Smartphones, áudio e acessórios escolhidos para quem procura design, desempenho e preço claro.",
    buy: "Comprar agora", highlight: "Ver destaque", processing: "Processamento", returns: "Troca facilitada", rating: "Avaliação média",
    weekOffer: "Oferta da semana", fastShipping: "Envio rápido", secure: "Pagamento seguro", selected: "Produtos selecionados", support: "Atendimento rápido", simple: "Compra simples",
    catalog: "CATÁLOGO", featured: "Produtos em destaque", catalogText: "Explora o catálogo e adiciona os teus favoritos ao carrinho.", all: "Todos", accessories: "Acessórios",
    sortFeatured: "Ordenar: Destaques", sortLow: "Preço: menor", sortHigh: "Preço: maior", empty: "Nenhum produto encontrado", emptyText: "Tenta pesquisar por outro nome ou categoria.",
    productWeek: "PRODUTO DA SEMANA", airCopy: "Auscultadores sem fios com cancelamento de ruído, até 32 horas de autonomia e carregamento USB-C.", noise: "Cancelamento ativo de ruído", dualMic: "Microfone duplo", addCart: "Adicionar ao carrinho",
    why: "PORQUE A NOVA STORE", easy: "Uma compra sem etapas desnecessárias.", organized: "Entrega organizada", service: "Atendimento",
    secureCopy: "Checkout demonstrativo preparado para futura integração com meios de pagamento reais.", deliveryCopy: "Estrutura pronta para cálculo de envio, morada e acompanhamento de pedidos.", serviceCopy: "Área de contacto pensada para integração com WhatsApp, e-mail ou suporte próprio.",
    news: "NOVIDADES", newsTitle: "Recebe ofertas e novos produtos.", subscribe: "Subscrever", store: "Loja", demo: "Projecto demonstrativo de e-commerce criado para portfólio.", how: "Como funciona", demoNote: "Demo de portfólio · Sem pagamentos reais",
    yourCart: "TEU CARRINHO", purchases: "Compras", cartEmpty: "O carrinho está vazio", cartEmptyText: "Adiciona um produto para começar.", checkout: "Finalizar compra", checkoutNote: "Checkout demonstrativo. Nenhum pagamento será processado.",
    checkoutDemo: "CHECKOUT DEMO", fullName: "Nome completo", phone: "Telefone", address: "Morada", city: "Cidade", method: "Método", orderTotal: "Total do pedido", confirm: "Confirmar pedido demonstrativo",
    added: "Produto adicionado ao carrinho.", emptyToast: "O carrinho está vazio.", confirmed: "Pedido demonstrativo confirmado.", subscribed: "E-mail registado na demonstração.", remove: "Remover", details: "Ver detalhes de", add: "Adicionar", reviews: "avaliações"
  },
  en: {
    announcement: "Free delivery on orders over 4,000 MT", announcement2: "Secure payment · Support 7 days a week",
    home: "Home", products: "Products", benefits: "Benefits", contact: "Contact", cart: "Cart", close: "Close",
    searchPlaceholder: "Search smartphones, audio, accessories...", eyebrow: "TECHNOLOGY WITHOUT THE HASSLE",
    heroTitle: "Your next upgrade starts here.", heroText: "Smartphones, audio and accessories selected for people who value design, performance and clear pricing.",
    buy: "Shop now", highlight: "View highlight", processing: "Processing", returns: "Easy returns", rating: "Average rating",
    weekOffer: "Offer of the week", fastShipping: "Fast shipping", secure: "Secure payment", selected: "Selected products", support: "Fast support", simple: "Simple shopping",
    catalog: "CATALOG", featured: "Featured products", catalogText: "Explore the catalog and add your favorites to the cart.", all: "All", accessories: "Accessories",
    sortFeatured: "Sort: Featured", sortLow: "Price: low to high", sortHigh: "Price: high to low", empty: "No products found", emptyText: "Try searching for another name or category.",
    productWeek: "PRODUCT OF THE WEEK", airCopy: "Wireless headphones with noise cancellation, up to 32 hours of battery life and USB-C charging.", noise: "Active noise cancellation", dualMic: "Dual microphone", addCart: "Add to cart",
    why: "WHY NOVA STORE", easy: "Shopping without unnecessary steps.", organized: "Organised delivery", service: "Customer support",
    secureCopy: "Demo checkout ready for future integration with real payment methods.", deliveryCopy: "Structure ready for shipping calculation, addresses and order tracking.", serviceCopy: "Contact area designed for WhatsApp, email or dedicated support integration.",
    news: "UPDATES", newsTitle: "Get offers and new products.", subscribe: "Subscribe", store: "Store", demo: "E-commerce demo project created for a portfolio.", how: "How it works", demoNote: "Portfolio demo · No real payments",
    yourCart: "YOUR CART", purchases: "Purchases", cartEmpty: "Your cart is empty", cartEmptyText: "Add a product to get started.", checkout: "Checkout", checkoutNote: "Demo checkout. No payment will be processed.",
    checkoutDemo: "DEMO CHECKOUT", fullName: "Full name", phone: "Phone", address: "Address", city: "City", method: "Method", orderTotal: "Order total", confirm: "Confirm demo order",
    added: "Product added to cart.", emptyToast: "Your cart is empty.", confirmed: "Demo order confirmed.", subscribed: "Email registered in the demo.", remove: "Remove", details: "View details for", add: "Add", reviews: "reviews"
  }
};

const productEnglish = {
  p1: ["Smartphone", "BEST SELLER", "5G smartphone with AMOLED display, 128 GB storage and a 50 MP main camera."],
  p2: ["Smartphone", "NEW", "Balanced everyday model with long battery life and 128 GB storage."],
  p3: ["Audio", "DEAL", "Compact Bluetooth speaker, splash resistant and with up to 12 hours of playback."],
  p4: ["Audio", "FEATURED", "Wireless headphones with active noise cancellation, Bluetooth 5.3 and 32-hour battery life."],
  p5: ["Accessory", "POPULAR", "Smartwatch with activity tracking, notifications, Bluetooth calls and AMOLED display."],
  p6: ["Accessory", "65W", "Compact 65W USB-C charger for compatible smartphones, tablets and computers."],
  p7: ["Smartphone", "PREMIUM", "Premium smartphone with high-refresh display, 256 GB and a triple-camera system."],
  p8: ["Audio", "COMPACT", "Portable everyday speaker with fast Bluetooth pairing and simple physical controls."]
};
const productPortuguese = Object.fromEntries(products.map(p => [p.id, [p.label, p.badge, p.description]]));
let novaLanguage = localStorage.getItem("nova-language") === "en" ? "en" : "pt";

function novaSet(selector, value, all = false) {
  const nodes = all ? document.querySelectorAll(selector) : [document.querySelector(selector)];
  nodes.forEach(node => { if (node && value !== undefined) node.textContent = value; });
}
function applyNovaLanguage(lang) {
  novaLanguage = lang; localStorage.setItem("nova-language", lang); document.documentElement.lang = lang;
  const t = novaCopy[lang];
  const nav = document.querySelectorAll(".desktop-nav a, #mobileMenu a");
  [t.home,t.products,t.benefits,t.contact,t.home,t.products,t.benefits,t.contact].forEach((v,i)=>{ if(nav[i]) nav[i].textContent=v; });
  novaSet(".announcement span:first-child",t.announcement); novaSet(".announcement-hide",t.announcement2);
  novaSet("#openCart > span:nth-child(2)",t.cart); document.getElementById("globalSearch").placeholder=t.searchPlaceholder; novaSet("#closeSearch",t.close);
  novaSet(".hero-copy .eyebrow",t.eyebrow); novaSet(".hero-copy h1",t.heroTitle); novaSet(".hero-copy > p",t.heroText); novaSet(".hero-actions .btn-primary",t.buy); novaSet(".hero-actions .btn-secondary",t.highlight);
  [t.processing,t.returns,t.rating].forEach((v,i)=>novaSet(`.hero-stats > div:nth-child(${i+1}) span`,v)); novaSet(".price-card span",t.weekOffer); novaSet(".shipping-card strong",t.fastShipping);
  [t.secure,t.selected,t.support,t.simple].forEach((v,i)=>novaSet(`.trust-grid span:nth-child(${i+1})`,v));
  novaSet("#produtos .section-heading .eyebrow",t.catalog); novaSet("#produtos .section-heading h2",t.featured); novaSet("#produtos .section-heading > p",t.catalogText);
  novaSet('[data-category="all"]',t.all); novaSet('[data-category="accessories"]',t.accessories); const opts=document.querySelectorAll("#sortSelect option"); [t.sortFeatured,t.sortLow,t.sortHigh,"Name: A-Z"].forEach((v,i)=>{if(opts[i])opts[i].textContent=v}); novaSet("#emptyState h3",t.empty); novaSet("#emptyState p",t.emptyText);
  novaSet("#destaque .eyebrow",t.productWeek); novaSet("#destaque .featured-copy > p",t.airCopy); novaSet("#destaque li:nth-child(1)",t.noise); novaSet("#destaque li:nth-child(3)",t.dualMic); novaSet("#destaque [data-featured-add]",t.addCart);
  novaSet("#vantagens .eyebrow",t.why); novaSet("#vantagens h2",t.easy); [t.secure,t.organized,t.service].forEach((v,i)=>novaSet(`.benefit-grid article:nth-child(${i+1}) h3`,v)); [t.secureCopy,t.deliveryCopy,t.serviceCopy].forEach((v,i)=>novaSet(`.benefit-grid article:nth-child(${i+1}) p`,v));
  novaSet(".newsletter .eyebrow",t.news); novaSet(".newsletter h2",t.newsTitle); novaSet("#newsletterForm button",t.subscribe); novaSet("footer .footer-grid > div:first-child p",t.demo); novaSet("footer .footer-grid > div:nth-child(2) h4",t.store); novaSet("footer .footer-grid > div:nth-child(2) a:nth-of-type(3)",t.how); novaSet(".footer-bottom span:last-child",t.demoNote);
  novaSet("#cartDrawer .eyebrow",t.yourCart); novaSet("#cartDrawer h2",t.purchases); novaSet("#cartEmpty h3",t.cartEmpty); novaSet("#cartEmpty p",t.cartEmptyText); novaSet("#checkoutBtn",t.checkout); novaSet(".cart-footer small",t.checkoutNote);
  novaSet("#checkoutModal .eyebrow",t.checkoutDemo); novaSet("#checkoutModal h2",t.checkout); const labels=document.querySelectorAll("#checkoutForm label"); [t.fullName,t.phone,"E-mail",t.address,t.city,t.method].forEach((v,i)=>{if(labels[i]&&labels[i].firstChild)labels[i].firstChild.textContent=`${v}\n`}); novaSet(".checkout-summary span",t.orderTotal); novaSet('#checkoutForm button[type="submit"]',t.confirm);
  products.forEach(p=>{const values=lang==="en"?productEnglish[p.id]:productPortuguese[p.id]; [p.label,p.badge,p.description]=values;});
  document.querySelectorAll(".lang-btn").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang)); renderProducts(); renderCart();
}
document.querySelectorAll(".lang-btn").forEach(button=>button.addEventListener("click",()=>applyNovaLanguage(button.dataset.lang)));
applyNovaLanguage(novaLanguage);
