function scrollToMinuman() {
    document.querySelector('.katalog-minuman').scrollIntoView({ behavior: 'smooth' });
}

function scrollToMakananRingan() {
    document.querySelector('.katalog-makanan').scrollIntoView({ behavior: 'smooth' });
}

async function fetchDataMinuman() {
    try {
        const response = await fetch('https://mocki.io/v1/e49c52a2-5a6d-45af-b017-75a15a7832e5');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();

        // Separate data for minuman and makanan
        const minumanData = jsonData.filter(item => item.type === 'Minuman');

        // Call functions to display or process the separated data
        displayDataMinuman(minumanData);
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

async function fetchDataMakanan() {
    try {
        const response = await fetch('https://mocki.io/v1/e49c52a2-5a6d-45af-b017-75a15a7832e5');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();

        // Separate data for minuman and makanan
        const makananData = jsonData.filter(item => item.type === 'Makanan Ringan');

        // Call functions to display or process the separated data
        displayDataMakanan(makananData);
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

function displayDataMinuman(data) {
    // const data = dataAll.filter(item => item.id >= 16 && item.id <= 30);
    let fotoKatalogMinuman = document.getElementById('jsonDataListMinuman');
    let jsonNumber = 1;

    // Check if there is data
    if (!data || data.length === 0) {
      console.warn('No data to display.');
      return;
    }

    // Loop through the data and create HTML structure
    data.forEach(item => {
        const menuMinuman = document.createElement('div');
        menuMinuman.className = 'menu-minuman';

        const img = document.createElement('img');
        img.className = 'list-minuman';
        img.src = 'img/makanan-1.png'; // You should replace this with the actual image URL from your JSON data

        const judulMinuman = document.createElement('div');
        judulMinuman.className = 'judul-minuman';
        judulMinuman.textContent = item.nama;

        const deskripsiMinuman = document.createElement('p');
        deskripsiMinuman.className = 'deskripsi-minuman';
        deskripsiMinuman.textContent = item.deskripsi;

        const detailMinuman = document.createElement('div');
        detailMinuman.className = 'detail-minuman';

        const button = document.createElement('button');
        button.className = 'button';
        button.textContent = 'Lihat Detail';

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
            fotoKatalogMinuman = document.getElementById('jsonDataListMinuman' + jsonNumber);
            console.log(fotoKatalogMinuman.childElementCount)
        }   
    });
}

function displayDataMakanan(data) {
    // const data = dataAll.filter(item => item.id >= 1 && item.id <= 15);
    let fotoKatalogMakanan = document.getElementById('jsonDataListMakanan');
    let jsonNumber = 1;

    // Check if there is data
    if (!data || data.length === 0) {
      console.warn('No data to display.');
      return;
    }

    // Loop through the data and create HTML structure
    data.forEach(item => {
        const menuMakanan = document.createElement('div');
        menuMakanan.className = 'menu-makanan';

        const img = document.createElement('img');
        img.className = 'list-makanan';
        img.src = 'img/makanan-1.png'; // You should replace this with the actual image URL from your JSON data

        const judulMakanan = document.createElement('div');
        judulMakanan.className = 'judul-makanan';
        judulMakanan.textContent = item.nama;

        const deskripsiMakanan = document.createElement('p');
        deskripsiMakanan.className = 'deskripsi-makanan';
        deskripsiMakanan.textContent = item.deskripsi;

        const detailMakanan = document.createElement('div');
        detailMakanan.className = 'detail-makanan';

        const button = document.createElement('button');
        button.className = 'button';
        button.textContent = 'Lihat Detail';

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
            fotoKatalogMakanan = document.getElementById('jsonDataListMakanan' + jsonNumber);
            console.log(fotoKatalogMakanan.childElementCount)
        }   
    });
}

// Call the fetchData function
fetchDataMinuman();
fetchDataMakanan();