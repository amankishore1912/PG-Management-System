// Set Tenant Name
document.getElementById("tenantName").textContent =
  localStorage.getItem("tenantName") || "Tenant";

// PG Data
const pgs = [
  { name: "Sunrise PG", location: "Delhi", price: "₹5000 - ₹8000", image: "https://source.unsplash.com/300x200/?hostel" },
  { name: "Green Stay", location: "Mumbai", price: "₹5500 - ₹8500", image: "https://source.unsplash.com/300x200/?apartment" },
  { name: "Happy Homes", location: "Pune", price: "₹4000 - ₹7000", image: "https://source.unsplash.com/300x200/?pg,room" },
  { name: "Elite PG", location: "Bangalore", price: "₹6500 - ₹9000", image: "https://source.unsplash.com/300x200/?hostel,interior" },
  { name: "Urban Nest", location: "Hyderabad", price: "₹6000 - ₹8500", image: "https://source.unsplash.com/300x200/?residence" },
  { name: "Comfort Stay", location: "Chennai", price: "₹5500 - ₹8000", image: "https://source.unsplash.com/300x200/?pg,house" },
  { name: "Blue Skies PG", location: "Ahmedabad", price: "₹4500 - ₹7500", image: "https://source.unsplash.com/300x200/?shared,room" },
  { name: "Dream PG", location: "Jaipur", price: "₹5000 - ₹7800", image: "https://source.unsplash.com/300x200/?student,hostel" },
  { name: "Royal Stay", location: "Lucknow", price: "₹5200 - ₹7700", image: "https://source.unsplash.com/300x200/?room,bed" },
  { name: "Smart Living", location: "Indore", price: "₹5000 - ₹7500", image: "https://source.unsplash.com/300x200/?apartment,room" },
  { name: "Skyline PG", location: "Nagpur", price: "₹4900 - ₹7200", image: "https://source.unsplash.com/300x200/?skyline,building" },
  { name: "Zen Hostel", location: "Noida", price: "₹4700 - ₹7100", image: "https://source.unsplash.com/300x200/?dormitory,interior" },
  { name: "Shree Sai PG", location: "Kolkata", price: "₹4800 - ₹7000", image: "https://source.unsplash.com/300x200/?pg,bunkbed" },
  { name: "Pearl PG", location: "Surat", price: "₹5100 - ₹7900", image: "https://source.unsplash.com/300x200/?room,interior" },
  { name: "BrightNest", location: "Patna", price: "₹4950 - ₹7500", image: "https://source.unsplash.com/300x200/?modern,hostel" },
  { name: "Maple Stay", location: "Bhopal", price: "₹5050 - ₹7700", image: "https://source.unsplash.com/300x200/?hostel,accommodation" },
  { name: "Palm Heights PG", location: "Ranchi", price: "₹4900 - ₹7600", image: "https://source.unsplash.com/300x200/?pg,balcony" },
  { name: "Silverline PG", location: "Dehradun", price: "₹4750 - ₹7400", image: "https://source.unsplash.com/300x200/?residence,dorm" },
  { name: "Blue Lotus PG", location: "Guwahati", price: "₹4600 - ₹7200", image: "https://source.unsplash.com/300x200/?college,pg" },
  { name: "Lush Life PG", location: "Visakhapatnam", price: "₹5000 - ₹7800", image: "https://source.unsplash.com/300x200/?comfort,room" }
];

// Render PG Cards
const pgCards = document.getElementById("pgCards");

function renderPGs(data) {
  pgCards.innerHTML = "";
  data.forEach(pg => {
    const card = document.createElement("div");
    card.className = "pg-card";
    card.innerHTML = `
      <img src="${pg.image}" alt="${pg.name}">
      <div class="pg-card-content">
        <h4>${pg.name}</h4>
        <p>${pg.location}</p>
        <p>${pg.price}</p>
      </div>
    `;
    pgCards.appendChild(card);
  });
}

renderPGs(pgs);

// Search Suggestion + Filter
const searchInput = document.getElementById("searchBar");
const suggestionsBox = document.getElementById("suggestions");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  suggestionsBox.innerHTML = "";

  if (!query) {
    suggestionsBox.style.display = "none";
    renderPGs(pgs);
    return;
  }

  const matches = pgs.filter(pg =>
    pg.name.toLowerCase().includes(query) || pg.location.toLowerCase().includes(query)
  );

  matches.forEach(pg => {
    const li = document.createElement("li");
    li.textContent = `${pg.name} - ${pg.location}`;
    li.addEventListener("click", () => {
      searchInput.value = pg.name;
      renderPGs([pg]);
      suggestionsBox.innerHTML = "";
      suggestionsBox.style.display = "none";
    });
    suggestionsBox.appendChild(li);
  });

  suggestionsBox.style.display = matches.length ? "block" : "none";
});

// Optional search button click
document.getElementById("searchBtn").addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = pgs.filter(pg =>
    pg.name.toLowerCase().includes(query) || pg.location.toLowerCase().includes(query)
  );
  renderPGs(filtered);
});
