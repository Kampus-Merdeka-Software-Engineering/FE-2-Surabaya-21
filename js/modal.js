const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");
const modalContent = document.getElementById("modalContent");

// Function to open the modal with dynamic content
function openModal(title, description, price, type) {
  modalContent.innerHTML = `
    <h2>${title}</h2>
    <p>Deskripsi Produk: ${description}<p>
    <p>Kategori: ${type}<p>
    <h3>${price}</h3>
  `;

  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
