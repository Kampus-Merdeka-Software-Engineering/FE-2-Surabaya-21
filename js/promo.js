function generateAndCopyCode() {
  const randomCode = generateRandomCode();
  const tempTextArea = document.createElement("textarea");

  // Select random promo code
  tempTextArea.value = randomCode;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999);

  // Copy the code to the clipboard
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);

  // Pop up notifications
  alert("Selamat! Kode promo " + randomCode + " berhasil di copy");
}

function generateRandomCode() {
  const prefix = "LNDSP";
  const randomDigits = Math.floor(10000 + Math.random() * 90000);
  const randomCode = prefix + randomDigits;

  return randomCode;
}
