// =================== Helper Functions ===================
function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createCards(container, items, getHref, getTitle, getImg) {
  if (!container) return;

  container.innerHTML = "";

  if (!items || items.length === 0) {
    container.innerHTML = `
  <p class="empty-state">No results found.</p>`;
    return;
  }

  items.forEach(item => {
    const card = document.createElement("a");
    card.className = "state-card";
    card.href = getHref(item);

    if (getImg) {
      const img = document.createElement("img");
      img.src = getImg(item);
      img.alt = getTitle(item);
      card.appendChild(img);
    }

    const title = document.createElement("span");
    title.textContent = getTitle(item);
    title.className = "card-title";
    card.appendChild(title);

    // Animation
    card.style.animation = "fadeInUp 0.5s ease";

    // Click feedback
    card.addEventListener("mousedown", () => {
      card.style.transform = "scale(0.98)";
    });

    card.addEventListener("mouseup", () => {
      card.style.transform = "";
    });

    container.appendChild(card);
  });
}

// =================== BREADCRUMB (ONLY SYSTEM USED) ===================
function setBreadcrumb(el, items) {
  if (!el) return;

  el.innerHTML = items
    .map((item, i) => {
      const last = i === items.length - 1;
      if (last || !item.href) return `<span>${item.label}</span>`;
      return `<a href="${item.href}">${item.label}</a>`;
    })
    .join(` <span class="crumb-sep">›</span> `);
}

// =================== CATEGORY LABELS ===================
const categoryLabels = {
  education: "Education",
  healthcare: "Healthcare",
  publictransportation: "Public Transportation",
  employment: "Employment",
  government: "Government Resources",
  community: "Community Resources"
};

// =================== MAIN SCRIPT ===================
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const stateKey = params.get("state");
  const cityKey = params.get("city");
  const categoryKey = params.get("category");
  const subcategoryKey = params.get("subcategory");


   // =================== ACTIVE NAV AUTO ===================
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

// =================== EXPLORE PAGE ===================
const exploreGrid = document.querySelector(".states-grid");
  const searchInput = document.getElementById("stateSearch");

  let states = [];

  if (exploreGrid && typeof DATA !== "undefined") {
    states = Object.keys(DATA).map(key => ({
      key,
      name: DATA[key].name,
      img: DATA[key].img
    }));

    function renderStates(list) {
      createCards(
        exploreGrid,
        list,
        s => `state.html?state=${s.key}`,
        s => s.name,
        s => s.img
      );
    }

     renderStates(states);

    // No results message
    const noResults = document.createElement("p");
    noResults.textContent = "No states found.";
    noResults.className = "empty-state";
    noResults.style.display = "none";
    exploreGrid.parentNode.appendChild(noResults);

    searchInput?.addEventListener("input", () => {
      const filter = searchInput.value.toLowerCase();

      const filtered = states.filter(state =>
        state.name.toLowerCase().includes(filter)
      );

      noResults.style.display = filtered.length === 0 ? "block" : "none";
      renderStates(filtered);
    });
  }

// =================== STATE PAGE ===================
const stateTitle = document.getElementById("stateTitle");
  const stateSidebar = document.getElementById("stateSidebar");
  const stateCardsGrid = document.getElementById("stateCardsGrid");
  const breadcrumbTrail = document.getElementById("breadcrumbTrail");


  if (stateTitle && stateKey && DATA?.[stateKey]) {
    const state = DATA[stateKey];

    document.title = `Neighborhood Navigator - ${state.name}`;
    stateTitle.textContent = state.name;

    // Sidebar
    if (stateSidebar) {
      stateSidebar.innerHTML = "";

      Object.keys(DATA).forEach(key => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = `state.html?state=${key}`;
        a.textContent = DATA[key].name;

        if (key === stateKey) a.classList.add("active");

        li.appendChild(a);
        stateSidebar.appendChild(li);
      });
    }

  // --- Cities / Neighborhoods ---

  if (stateCardsGrid) {
      const cities = Object.keys(state.cities).map(cityKey => ({
        name: state.cities[cityKey].name,
        img: state.cities[cityKey].img,
        href: `city.html?state=${stateKey}&city=${cityKey}`
      }));
      
      createCards(stateCardsGrid, cities, city => city.href, city => city.name, city => city.img);
    }
   
  // --- Breadcrumb ---
  setBreadcrumb(breadcrumbTrail, [
      { label: "Explore", href: "explore.html" },
      { label: state.name }
    ]);
  }


// =================== CITY PAGE ===================
const cityTitle = document.getElementById("cityTitle");
const cityBreadcrumb = document.getElementById("breadcrumbTrail");

  if (cityTitle && stateKey && cityKey && DATA?.[stateKey]?.cities?.[cityKey]) {
    const city = DATA[stateKey].cities[cityKey];

    document.title = `Neighborhood Navigator - ${city.name}`;
    cityTitle.textContent = city.name;

    const categoryGrid = document.getElementById("categoryGrid");

    if (categoryGrid) {
      categoryGrid.innerHTML = "";

      Object.entries(city.categories || {}).forEach(([catKey, category]) => {

        const section = document.createElement("div");
        section.className = "category-section";

        const title = document.createElement("h2");
        title.textContent = category.label;
        section.appendChild(title);

        const subGrid = document.createElement("div");
        subGrid.className = "subcategory-grid";

        const subcategories = Object.entries(category.subcategories || {}).map(([subKey, sub]) => ({
          key: subKey,
          label: sub.label,
          categoryKey: catKey
        }));

        createCards(
          subGrid,
          subcategories,
          item => `subcategory.html?state=${stateKey}&city=${cityKey}&category=${item.categoryKey}&subcategory=${encodeURIComponent(item.key)}`,
          item => item.label
        );

        section.appendChild(subGrid);
        categoryGrid.appendChild(section);
      });
    }

// --- Breadcrumb ---
    setBreadcrumb(cityBreadcrumb, [
      { label: "Explore", href: "explore.html" },
      { label: state.name, href: `state.html?state=${stateKey}` },
      { label: city.name }
    ]);

  }

  // =================== SUBCATEGORY PAGE ===================
const subTitle = document.getElementById("subcategoryTitle");
  const content = document.getElementById("subcategoryContent");
  const subBreadcrumb = document.getElementById("breadcrumbTrail");

  const state = DATA?.[stateKey];
  const city = state?.cities?.[cityKey];
  const category = city?.categories?.[categoryKey];
  const subcategory = category?.subcategories?.[subcategoryKey];

  if (subTitle && content && subcategory) {

    document.title = `Neighborhood Navigator - ${subcategory.label}`;
    subTitle.textContent = `${subcategory.label} in ${city.name}`;

    const items = subcategory.items || [];

    const intro = items.filter(i => i.type === "intro");
    const normal = items.filter(i => i.type !== "intro");

    content.innerHTML = "";

    if (intro.length) {
      const introDiv = document.createElement("div");
      introDiv.className = "intro-section";

      intro.forEach(i => {
        const div = document.createElement("div");
        div.className = "intro-card";
        div.innerHTML = `<h2>${i.name}</h2><p>${i.description || ""}</p>`;
        introDiv.appendChild(div);
      });

      content.appendChild(introDiv);
    }

    // =================== NORMAL CARDS ===================
    if (normalItems.length === 0) {
      content.innerHTML += `<p class="empty-state">No items found.</p>`;
    } else {
      content.innerHTML += normalItems.map(place => `
        <div class="detail-card">
          <img src="${place.img || "Images/default.jpg"}" alt="${place.name}">
          
          <div class="detail-info">
            <h3>${place.name}</h3>
            ${place.description ? `<p>${place.description}</p>` : ""}
            ${place.address ? `<p><strong>Address:</strong> ${place.address}</p>` : ""}
            ${place.link && place.link !== "#" ? `<a href="${place.link}" target="_blank">Visit Website</a>` : ""}
          </div>
        </div>
      `).join("");
    }
  }

  // Breadcrumb
  setBreadcrumb(subBreadcrumb, [
      { label: "Explore", href: "explore.html" },
      { label: state.name, href: `state.html?state=${stateKey}` },
      { label: city.name, href: `city.html?state=${stateKey}&city=${cityKey}` },
      { label: subcategory.label }
    ]);
  }
)

// =================== Local Insights Page ===================

(function() {
  const tipForm = document.getElementById("tipForm");
  if (!tipForm) return;

  const userTipInput = document.getElementById("userTip");
  const tipCategory = document.getElementById("tipCategory");
  const tipsList = document.getElementById("tipsList");
  const submitMessage = document.getElementById("submitMessage");
  const filterCategory = document.getElementById("filterCategory");

  // Load saved tips from localStorage
  const savedTips = JSON.parse(localStorage.getItem("communityTips") || "[]");

  function renderTips(filter = "All") {
    tipsList.innerHTML = "";

    savedTips.forEach((tip, index) => {
      if (filter !== "All" && tip.category !== filter) return;

      const li = document.createElement("li");
      li.className = "tip-card";

      li.innerHTML = `
        <strong>${tip.category}</strong><br>
        <p>${tip.text}</p>
        <button class="delete-btn" data-index="${index}">Delete</button>
      `;
      tipsList.appendChild(li);
    });

    if (tipsList.children.length === 0) {
      tipsList.innerHTML = `<p class="empty-state">No tips yet. Be the first to share!</p>`;
    }
  }


  // Initial render
  renderTips();

  // Form submission
  tipForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const tipText = userTipInput.value.trim();
    const category = tipCategory.value.toLowerCase();

    if (!tipText) {
      alert("Please enter a tip before submitting");
      return;
    }

    savedTips.push({ text: tipText, category });
      localStorage.setItem("communityTips", JSON.stringify(savedTips));

      renderTips(filterCategory?.value || "All");

      userTipInput.value = "";
      tipCategory.value = "general";
      
      if (submitMessage) { submitMessage.style.display = "block"; setTimeout(() => { submitMessage.style.display = "none"; }, 2000); }
    });

  // Delete tip
  tipsList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
      const index = event.target.dataset.index;
      savedTips.splice(index, 1);
      localStorage.setItem("communityTips", JSON.stringify(savedTips));
      renderTips(filterCategory?.value || "All");
    }
  });

  // Filter tips
  filterCategory?.addEventListener("change", function() {
    renderTips(filterCategory.value);
    });

})();
