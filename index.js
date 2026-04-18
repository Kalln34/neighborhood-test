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

});

 // =================== HAMBURGER ===================

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger?.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});