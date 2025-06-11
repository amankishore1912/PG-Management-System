// Fetch data from localStorage
const tenantName = localStorage.getItem("tenantName");
const tenantEmail = localStorage.getItem("tenantEmail");

// Generate a random PG ID for this example
const userId = "PG" + Math.floor(Math.random() * 90000 + 10000);

// Populate the page
document.getElementById("tenantName").textContent = tenantName || "Tenant";
document.getElementById("tenantEmail").textContent = tenantEmail || "N/A";
document.getElementById("userId").textContent = userId;

// Redirect to login page
function redirectToLogin() {
  window.location.href = "login.html";
}
