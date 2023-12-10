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
        // Reload the page after successful submission
        location.reload();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to fetch and display testimonials
async function displayTestimonials() {
    try {
        const response = await fetch('https://be-2-surabaya-21-production.up.railway.app/api/getTestimoni');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const testimonials = await response.json();
        const dataTestimoni = testimonials.data;
        const testimonialsContainerLeft = document.getElementById('testimonials-container-left');
        const testimonialsContainerRight = document.getElementById('testimonials-container-right');
        // console.log(dataTestimoni);

        dataTestimoni.sort((a, b) => b.id - a.id);

        // Display the top 4 testimonials
        for (let i = 0; i < Math.min(4, dataTestimoni.length); i++) {
            const testimonialElement = document.createElement('div');
            testimonialElement.innerHTML = `<p>${capitalizeFirstWord(dataTestimoni[i].testimonial)}</p>`;
            testimonialElement.classList.add('testimonial-item'); // Add testimonial-item class

            const namaElement = document.createElement('div');
            namaElement.innerHTML = `<p><strong>- ${capitalizeFirstWord(dataTestimoni[i].nama)}</strong></p>`;
            namaElement.classList.add('name-item'); // Add testimonial-item class

            if (i % 2 === 0) {
                testimonialsContainerLeft.appendChild(testimonialElement);
                testimonialsContainerLeft.appendChild(namaElement);
            } else {
                testimonialsContainerRight.appendChild(testimonialElement);
                testimonialsContainerRight.appendChild(namaElement);
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
window.onload = displayTestimonials;


// Function to capitalize the first word
function capitalizeFirstWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}