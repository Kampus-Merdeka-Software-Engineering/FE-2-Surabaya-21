// document.getElementById('submitBtn').addEventListener('click', async () => {
//     const namaLengkap = document.getElementById('namaLengkap').value;
//     const email = document.getElementById('email').value;
//     const nomorTelepon = document.getElementById('nomorTelepon').value;
//     const testimoni = document.getElementById('testimoni').value;
  
//     // Create an object with the form data
//     const testimonialData = {
//       nama_lengkap: namaLengkap,
//       email: email,
//       nomor_telepon: nomorTelepon,
//       testimoni: testimoni,
//     };
  
//     try {
//       // Send a POST request to the backend API endpoint
//       const response = await fetch('https://be-2-surabaya-21-production.up.railway.app/api/testimoni'); //fetch data

//       console.log(response);
//       if (response.ok) {
//         const result = await response.json();
//         console.log(result);
//       } else {
//         console.error('Error:', response.status);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
// });  

function submitTestimoni() {
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const notelp = document.getElementById('notelp').value;
    const testimonial = document.getElementById('testimonial').value;
    const formData = {
      nama,
      email,
      notelp,
      testimonial,
    };

    sendTestimoni(formData);
}

async function sendTestimoni(formData) {
    try {
      const response = await fetch('https://be-2-surabaya-21-production.up.railway.app/api/CreateTestimoni', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
} 

// Function to fetch and display testimonials
async function displayTestimonials() {
    try {
        const response = await fetch('https://be-2-surabaya-21-production.up.railway.app/api/testimoni');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const testimonials = await response.json();
        const testimonialsContainer = document.getElementById('testimonials-container');

        for (let i = 0; i < Math.min(5, testimonials.length); i++) {
            const testimonialElement = document.createElement('div');
            testimonialElement.innerHTML = `<p>Testimoni: ${testimonials[i].testimonial} (Oleh: ${testimonials[i].nama})</p>`;
            testimonialsContainer.appendChild(testimonialElement);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
window.onload = displayTestimonials;