// =================== Helper Functions ===================
function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createCards(container, items, getHref, getTitle, getImg) {
  if (!container) return;

  container.innerHTML = "";

  if (!items || items.length === 0) {
    container.innerHTML = `<p class="empty-state">No results found.</p>`;
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

    card.addEventListener("mousedown", () => card.style.transform = "scale(0.98)");
    card.addEventListener("mouseup", () => card.style.transform = "");

    container.appendChild(card);
  });
}

// =================== Breadcrumb ===================
function setBreadcrumb(el, items) {
  if (!el) return;

  el.innerHTML = items.map((item, i) => {
    const isLast = i === items.length - 1;
    if (isLast || !item.href) return `<span>${item.label}</span>`;
    return `<a href="${item.href}">${item.label}</a>`;
  }).join(` <span class="crumb-sep">›</span> `);
}

// =================== MAIN ===================
document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const stateKey = params.get("state");
  const cityKey = params.get("city");
  const categoryKey = params.get("category");
  const subcategoryKey = params.get("subcategory");

  const currentPage = window.location.pathname.split("/").pop();

  // ACTIVE NAV
  document.querySelectorAll(".nav-links a").forEach(link => {
    const linkPage = link.getAttribute("href").split("?")[0];
    if (linkPage === currentPage) link.classList.add("active");
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

    const renderStates = (list) => {
      createCards(
        exploreGrid,
        list,
        s => `state.html?state=${s.key}`,
        s => s.name,
        s => s.img
      );
    };

    renderStates(states);

    searchInput?.addEventListener("input", () => {
      const filter = searchInput.value.toLowerCase();

      const filtered = states.filter(s =>
        s.name.toLowerCase().includes(filter)
      );

      renderStates(filtered);
    });
  }

  // =================== STATE PAGE ===================
  const stateTitle = document.getElementById("stateTitle");
  const stateSidebar = document.getElementById("stateSidebar");
  const stateCardsGrid = document.getElementById("stateCardsGrid");
  const breadcrumbTrail = document.getElementById("breadcrumbTrail");

  const state = DATA?.[stateKey];

  if (stateTitle && state) {

    document.title = `Neighborhood Navigator - ${state.name}`;
    stateTitle.textContent = state.name;

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

    if (stateCardsGrid) {
      const cities = Object.keys(state.cities || {}).map(cityKey => ({
        key: cityKey,
        name: state.cities[cityKey].name,
        img: state.cities[cityKey].img
      }));

      createCards(
        stateCardsGrid,
        cities,
        c => `city.html?state=${stateKey}&city=${c.key}`,
        c => c.name,
        c => c.img
      );
    }

    setBreadcrumb(breadcrumbTrail, [
      { label: "Explore", href: "explore.html" },
      { label: state.name }
    ]);
  }

  // =================== CITY PAGE ===================
  const cityTitle = document.getElementById("cityTitle");
  const categoryGrid = document.getElementById("categoryGrid");

  const city = state?.cities?.[cityKey];

  console.log(stateKey, cityKey, state, city);
  if (cityTitle && city) {

    document.title = `Neighborhood Navigator - ${city.name}`;
    cityTitle.textContent = city.name;

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

        const subs = Object.entries(category.subcategories || {}).map(([subKey, sub]) => ({
          key: subKey,
          label: sub.label,
          catKey
        }));

        createCards(
          subGrid,
          subs,
          i => `subcategory.html?state=${stateKey}&city=${cityKey}&category=${i.catKey}&subcategory=${i.key}`,
          i => i.label
        );

        section.appendChild(subGrid);
        categoryGrid.appendChild(section);
      });
    }

    const cityBreadcrumb = document.getElementById("breadcrumbTrail");

    setBreadcrumb(cityBreadcrumb, [
      { label: "Explore", href: "explore.html" },
      { label: state.name, href: `state.html?state=${stateKey}` },
      { label: city.name }
    ]);
  }

  // =================== SAVE CITY FEATURE ===================
const saveBtn = document.getElementById("saveCityBtn");

if (saveBtn && city && stateKey && cityKey) {

  saveBtn.addEventListener("click", () => {

    let saved = JSON.parse(localStorage.getItem("savedLocations") || "[]");

    // prevent duplicates
    const exists = saved.some(
      item => item.cityKey === cityKey && item.stateKey === stateKey
    );

    if (!exists) {
      saved.push({
        stateKey,
        cityKey,
        name: city.name,
        stateName: state.name
      });

      localStorage.setItem("savedLocations", JSON.stringify(saved));

      alert("City saved!");
    } else {
      alert("Already saved!");
    }
  });
}

  // =================== SUBCATEGORY PAGE ===================
  const subTitle = document.getElementById("subcategoryTitle");
  const content = document.getElementById("subcategoryContent");
  

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

    if (normal.length === 0) {
      content.innerHTML += `<p class="empty-state">No items found.</p>`;
    } else {
      normal.forEach(place => {
        const card = document.createElement("div");
        card.className = "detail-card";

        card.innerHTML = `
          <img src="${place.img || "Images/default.jpg"}" alt="${place.name}">
          <div class="detail-info">
            <h3>${place.name}</h3>
            ${place.description ? `<p>${place.description}</p>` : ""}
            ${place.address ? `<p><strong>Address:</strong> ${place.address}</p>` : ""}
            ${place.link ? `<a href="${place.link}" target="_blank">Visit Website</a>` : ""}
          </div>
        `;

        content.appendChild(card);
      });
    }

    const subBreadcrumb = document.getElementById("breadcrumbTrail");

    setBreadcrumb(subBreadcrumb, [
      { label: "Explore", href: "explore.html" },
      { label: state.name, href: `state.html?state=${stateKey}` },
      { label: city.name, href: `city.html?state=${stateKey}&city=${cityKey}` },
      { label: subcategory.label }
    ]);
  }



 // =================== HAMBURGER ===================
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

});


// =================== Local Insights Page ===================

(function() {
  const tipForm = document.getElementById("tipForm");
  if (!tipForm) return;

  const userTipInput = document.getElementById("userTip");
  const tipCategory = document.getElementById("tipCategory");
  const tipState = document.getElementById("tipState");

  const tipsList = document.getElementById("tipsList");
  const submitMessage = document.getElementById("submitMessage");

  const filterCategory = document.getElementById("filterCategory");
  const filterState = document.getElementById("filterState");

  let savedTips = JSON.parse(localStorage.getItem("communityTips") || "[]");

  function saveTips() {
    localStorage.setItem("communityTips", JSON.stringify(savedTips));
  }

  function renderTips() {
    const categoryFilter = filterCategory?.value || "All";
    const stateFilter = filterState?.value || "All";

    tipsList.innerHTML = "";

    // SORT by votes (highest first)
    const sortedTips = [...savedTips].sort((a, b) => b.votes - a.votes);

    sortedTips.forEach((tip, index) => {
      if (categoryFilter !== "All" && tip.category !== categoryFilter) return;
      if (stateFilter !== "All" && tip.state !== stateFilter) return;

      const li = document.createElement("li");
      li.className = "tip-card";

      li.innerHTML = `
        <div class="vote-column">
          <button data-action="upvote" data-index="${index}">▲</button>
          <div>${tip.votes}</div>
          <button data-action="downvote" data-index="${index}">▼</button>
        </div>

        <div class="tip-content">
          <div class="tip-meta">
            <span class="tag">${tip.state}</span>
            <span class="tag">${tip.category}</span>
          </div>

          <p>${tip.text}</p>
        </div>

        <button class="delete-btn" data-index="${index}">Delete</button>
      `;

      tipsList.appendChild(li);
    });
  }

  //Submit tip
  tipForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const text = userTipInput.value.trim();
    if (!text) return alert("Please enter a tip");

    const newTip = {
      text,
      category: tipCategory.value,
      state: tipState.value,
      votes: 0,
      date: Date.now()
    };

    savedTips.push(newTip);
    saveTips();
    renderTips();

    userTipInput.value = "";
    submitMessage.style.display = "block";
    setTimeout(() => submitMessage.style.display = "none", 2000);
  });

  // Click handling (vote + delete)
  tipsList.addEventListener("click", function(e) {
    const index = e.target.dataset.index;
    if (index === undefined) return;

    if (e.target.dataset.action === "upvote") {
      savedTips[index].votes++;
    }

    if (e.target.dataset.action === "downvote") {
      savedTips[index].votes--;
    }

    if (e.target.classList.contains("delete-btn")) {
      savedTips.splice(index, 1);
    }

    saveTips();
    renderTips();
  });

  //  Filters
  filterCategory?.addEventListener("change", renderTips);
  filterState?.addEventListener("change", renderTips);

  renderTips();
  });


// =================== PROFILE PAGE ===================
document.addEventListener("DOMContentLoaded", () => {

  const savedContainer = document.getElementById("savedLocationsList");
  const savedCount = document.getElementById("savedCount");

  if (!savedContainer) return;

  function renderSaved() {
    const saved = JSON.parse(localStorage.getItem("savedLocations") || "[]");

    savedContainer.innerHTML = "";
    savedCount.textContent = saved.length;

    if (saved.length === 0) {
      savedContainer.innerHTML = `<p class="empty-state">No saved locations yet.</p>`;
      return;
    }

    saved.forEach(item => {
      const card = document.createElement("div");
      card.className = "saved-card";

      card.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.stateName}</p>
        <button>View</button>
      `;

      card.querySelector("button").addEventListener("click", () => {
        window.location.href = `city.html?state=${item.stateKey}&city=${item.cityKey}`;
      });

      savedContainer.appendChild(card);
    });
  }

  renderSaved();

  window.addEventListener("focus", renderSaved);

});

const clearBtn = document.getElementById("clearAllBtn");

clearBtn?.addEventListener("click", () => {
  localStorage.removeItem("savedLocations");
  location.reload();
});