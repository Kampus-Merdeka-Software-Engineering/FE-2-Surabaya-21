function scrollToMinuman() {
  document
    .querySelector(".katalog-minuman")
    .scrollIntoView({ behavior: "smooth" });
}

function scrollToMakananRingan() {
  document
    .querySelector(".katalog-makanan")
    .scrollIntoView({ behavior: "smooth" });
}

async function fetchDataMinuman() {
  try {
    const response = await fetch(
      "https://mocki.io/v1/5d2f5b93-2d71-4149-b5ca-ad1fc4456e2d"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jsonData = await response.json();

    // Separate data for minuman and makanan
    const minumanData = jsonData.filter((item) => item.type === "Minuman");

    // Call functions to display or process the separated data
    displayDataMinuman(minumanData);
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}

async function fetchDataMakanan() {
  try {
    const response = await fetch(
      "https://mocki.io/v1/5d2f5b93-2d71-4149-b5ca-ad1fc4456e2d"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jsonData = await response.json();

    // Separate data for minuman and makanan
    const makananData = jsonData.filter(
      (item) => item.type === "Makanan Ringan"
    );

    // Call functions to display or process the separated data
    displayDataMakanan(makananData);
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}

function displayDataMinuman(data) {
  let fotoKatalogMinuman = document.getElementById("jsonDataListMinuman");
  let jsonNumber = 1;

  if (!data || data.length === 0) {
    console.warn("No data to display.");
    return;
  }

  // Loop through the data and create HTML structure
  data.forEach((item) => {
    const menuMinuman = document.createElement("div");
    menuMinuman.className = "col-md-3 mb-md-0 mb-5";

    const img = document.createElement("img");
    img.className = "makanan img-fluid";
    img.src = item.img; // You should replace this with the actual image URL from your JSON data

    const judulMinuman = document.createElement("p");
    judulMinuman.className = "judul-minuman";
    judulMinuman.textContent = item.nama;

    const deskripsiMinuman = document.createElement("p");
    deskripsiMinuman.className = "deskripsi-minuman";
    deskripsiMinuman.textContent = item.deskripsi;

    const detailMinuman = document.createElement("div");
    detailMinuman.className = "detail-minuman";

    const button = document.createElement("button");
    button.className = "button1";
    button.id = "openModalBtn";
    button.textContent = "Lihat Detail";
    button.onclick = function () {
      const formattedHarga = item.harga.toLocaleString("id-ID");
      openModal(item.nama, item.deskripsi, "Rp" + formattedHarga, item.type);
    };

    // Append elements to the menuMinuman
    menuMinuman.appendChild(img);
    menuMinuman.appendChild(judulMinuman);
    menuMinuman.appendChild(deskripsiMinuman);
    menuMinuman.appendChild(detailMinuman);
    detailMinuman.appendChild(button);

    // Append the menuMinuman to the parent container
    if (fotoKatalogMinuman.childElementCount < 4) {
      fotoKatalogMinuman.appendChild(menuMinuman);
    } else {
      jsonNumber++;
      fotoKatalogMinuman = document.getElementById(
        "jsonDataListMinuman" + jsonNumber
      );
      console.log(fotoKatalogMinuman.childElementCount);
    }
  });
}

function displayDataMakanan(data) {
  let fotoKatalogMakanan = document.getElementById("jsonDataListMakanan");
  let jsonNumber = 1;

  if (!data || data.length === 0) {
    console.warn("No data to display.");
    return;
  }

  // Loop through the data and create HTML structure
  data.forEach((item) => {
    const menuMakanan = document.createElement("div");
    menuMakanan.className = "col-md-3 mb-md-0 mb-5";

    const img = document.createElement("img");
    img.className = "makanan img-fluid";
    img.src = item.img;

    const judulMakanan = document.createElement("p");
    judulMakanan.className = "judul-makanan";
    judulMakanan.textContent = item.nama;

    const deskripsiMakanan = document.createElement("p");
    deskripsiMakanan.className = "deskripsi-makanan";
    deskripsiMakanan.textContent = item.deskripsi;

    const detailMakanan = document.createElement("div");
    detailMakanan.className = "detail-makanan";

    const button = document.createElement("button");
    button.className = "button1";
    button.id = "openModalBtn";
    button.textContent = "Lihat Detail";
    button.onclick = function () {
      const formattedHarga = item.harga.toLocaleString("id-ID");
      openModal(item.nama, item.deskripsi, "Rp" + formattedHarga, item.type);
    };

    // Append elements to the menuMakanan
    menuMakanan.appendChild(img);
    menuMakanan.appendChild(judulMakanan);
    menuMakanan.appendChild(deskripsiMakanan);
    menuMakanan.appendChild(detailMakanan);
    detailMakanan.appendChild(button);

    // Append the menuMinuman to the parent container
    if (fotoKatalogMakanan.childElementCount < 4) {
      fotoKatalogMakanan.appendChild(menuMakanan);
    } else {
      jsonNumber++;
      fotoKatalogMakanan = document.getElementById(
        "jsonDataListMakanan" + jsonNumber
      );
      console.log(fotoKatalogMakanan.childElementCount);
    }
  });
}

// Call the fetchData function
fetchDataMinuman();
fetchDataMakanan();
