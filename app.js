document.querySelector(".glow-btn").addEventListener("click", () => {
  alert("Welcome to TravelEarn India 🌏 Start your journey now!");
});



// Get elements
const modal = document.getElementById("loginModal");
const btn = document.getElementById("signInBtn");
const closeBtn = document.querySelector(".modal .close");

// Open modal
btn.onclick = () => {
  modal.style.display = "flex";
}

// Close modal on X click
closeBtn.onclick = () => {
  modal.style.display = "none";
}

// Close modal on outside click
window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

