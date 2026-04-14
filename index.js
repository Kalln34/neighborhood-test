// =================== Helper Functions ===================
function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createCards(container, items, getHref, getTitle, getImg) {
  if (!container) return;

  container.innerHTML = "";

  if (!items || items.length === 0) {
    container.innerHTML = "<p style='color:white'>No results found.</p>";
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
    card.appendChild(title);

    container.appendChild(card);
  });
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

    if (searchInput) {
      searchInput.addEventListener("input", () => {
        const filter = searchInput.value.toLowerCase();

        const filtered = states.filter(state =>
          state.name.toLowerCase().includes(filter)
        );

        renderStates(filtered);
      });
    }

    // =================== SEARCH ===================
    // No results message
    const noResults = document.createElement("p");
    noResults.textContent = "No states found.";
    noResults.style.textAlign = "center";
    noResults.style.display = "none";
    noResults.style.color = "#a0a64a";
    noResults.style.fontWeight = "600";
    noResults.style.marginTop = "20px";

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
  const breadcrumb = document.getElementById("breadcrumbTrail");
    if (breadcrumb) {
      breadcrumb.innerHTML = `<a href="explore.html" style="color:white;text-decoration:underline;">Explore</a> &gt; <span>${state.name}</span>`;
    }
  }


// =================== CITY PAGE ===================
const cityTitle = document.getElementById("cityTitle");

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
    const cityBreadcrumb = document.getElementById("cityBreadcrumb");
    if (cityBreadcrumb) {
      cityBreadcrumb.innerHTML = `
        <a href="explore.html">Explore</a> &gt;
        <a href="state.html?state=${stateKey}">${DATA[stateKey].name}</a> &gt; 
        <span>${city.name}</span>
      `;
    }
  }

  // =================== SUBCATEGORY PAGE ===================
const subcategoryTitleEl = document.getElementById("subcategoryTitle");

  if (
    subcategoryTitleEl &&
    stateKey &&
    cityKey &&
    categoryKey &&
    subcategoryKey &&
    DATA?.[stateKey]?.cities?.[cityKey]?.categories?.[categoryKey]?.subcategories?.[subcategoryKey]
  ) {
    const subcategory =
      DATA[stateKey].cities[cityKey].categories[categoryKey].subcategories[subcategoryKey];

      // split intro vs normal items
    const allItems = subcategory.items || []; // this defines all items from data js

    const introItems = allItems.filter(i => i.type === "intro");
    const normalItems = allItems.filter(i => i.type !== "intro");

    subcategoryTitleEl.textContent =
      `${subcategory.label} in ${DATA[stateKey].cities[cityKey].name}`;

    const content = document.getElementById("subcategoryContent");

    if (content) {
      content.innerHTML = "";

    // =================== INTRO SECTION ===================
    if (introItems.length > 0) {
      const introSection = document.createElement("div");
      introSection.className = "intro-section";

      introItems.forEach(item => {
        const introCard = document.createElement("div");
        introCard.className = "intro-card";

        introCard.innerHTML = `
          <h2>${item.name}</h2>
          <p>${item.description || ""}</p>
        `;

        introSection.appendChild(introCard);
      });

      content.appendChild(introSection);
    }

    // =================== NORMAL CARDS ===================
    if (normalItems.length === 0) {
      content.innerHTML += "<p>No items found.</p>";
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
  const subBreadcrumb = document.getElementById("subcategoryBreadcrumb");
    if (subBreadcrumb) {
      subBreadcrumb.innerHTML = `
        <a href="explore.html">Explore</a> &gt;
        <a href="state.html?state=${stateKey}">${DATA[stateKey].name}</a> &gt;
        <a href="city.html?state=${stateKey}&city=${cityKey}">
          ${DATA[stateKey].cities[cityKey].name}
        </a> &gt;
        <span>${subcategory.label}</span>
      `;
    }
  }
});

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
