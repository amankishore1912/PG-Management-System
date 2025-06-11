const pgData = [
  { name: "Ashiana Residency", location: "Mumbai", price: "₹10,000 – 15,000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { name: "Green Villa", location: "Bangalore", price: "₹12,000 – 18,000", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994" },
  { name: "Shree PG", location: "Pune", price: "₹8,000 – 14,000", image: "https://images.unsplash.com/photo-1600585154084-9fe1fabe7bcb" },
  { name: "Sunrise Homes", location: "Chennai", price: "₹11,000 – 16,000", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914" },
  { name: "Comfort Stay", location: "Hyderabad", price: "₹9,500 – 13,000", image: "https://images.unsplash.com/photo-1565182999561-18d7dc61bbfd" },
  { name: "Happy Living", location: "Delhi", price: "₹10,500 – 14,500", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be" },
  { name: "Elite PG", location: "Ahmedabad", price: "₹8,500 – 12,000", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227" },
  { name: "Blue Nest", location: "Jaipur", price: "₹9,000 – 11,000", image: "https://images.unsplash.com/photo-1600607687796-6c0e3f6b2fcd" },
  { name: "Silver Springs", location: "Noida", price: "₹11,000 – 16,000", image: "https://images.unsplash.com/photo-1627634706772-53e1c2cb8c6f" },
  { name: "Skyline PG", location: "Kolkata", price: "₹7,000 – 10,000", image: "https://images.unsplash.com/photo-1615874959474-d609969a3a7b" },
  { name: "Royal PG", location: "Nagpur", price: "₹9,800 – 13,500", image: "https://images.unsplash.com/photo-1598928506311-201c9f3b1c09" },
  { name: "Urban Nest", location: "Surat", price: "₹8,900 – 12,900", image: "https://images.unsplash.com/photo-1572120360610-d971b9b639cf" },
  { name: "Tranquil Stay", location: "Lucknow", price: "₹9,200 – 13,200", image: "https://images.unsplash.com/photo-1595526114035-8400e4dd0c03" },
  { name: "Crescent PG", location: "Bhopal", price: "₹9,500 – 12,500", image: "https://images.unsplash.com/photo-1585518945020-74a5da3be0d9" },
  { name: "Serenity Homes", location: "Indore", price: "₹10,000 – 14,000", image: "https://images.unsplash.com/photo-1571247865791-9d0e12b1e9ee" },
  { name: "Maple PG", location: "Patna", price: "₹8,000 – 11,500", image: "https://images.unsplash.com/photo-1600585154084-9fe1fabe7bcb" }
];

const pgContainer = document.getElementById("pgCardsContainer");
const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");
const profileIcon = document.getElementById("profileIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

function renderPGCards(data = pgData) {
  pgContainer.innerHTML = "";
  data.forEach(pg => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${pg.image}" alt="${pg.name}">
      <div class="card-content">
        <div class="card-title">${pg.name}</div>
        <div class="card-location">📍 ${pg.location}</div>
        <div class="card-price">${pg.price}</div>
      </div>
    `;
    pgContainer.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  suggestions.innerHTML = "";
  if (keyword) {
    const matches = pgData.filter(pg =>
      pg.name.toLowerCase().includes(keyword) ||
      pg.location.toLowerCase().includes(keyword)
    );
    matches.forEach(match => {
      const li = document.createElement("li");
      li.textContent = `${match.name} (${match.location})`;
      li.onclick = () => {
        searchInput.value = match.name;
        suggestions.innerHTML = "";
        renderPGCards([match]);
      };
      suggestions.appendChild(li);
    });
    if (matches.length === 0) {
      suggestions.innerHTML = "<li>No matches found</li>";
    }
  } else {
    renderPGCards();
  }
});

// Scroll to section (smooth scroll for login/register/explore buttons)
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

profileIcon.addEventListener("click", () => {
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", (e) => {
  if (!profileIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.style.display = "none";
  }
});

renderPGCards();
