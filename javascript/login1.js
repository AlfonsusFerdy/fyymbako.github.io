 // Mendapatkan elemen input email
 var emailInput = document.getElementById('email');

 // Menambahkan event listener pada saat input email berubah
 emailInput.addEventListener('input', function() {
   // Mendapatkan nilai email yang dimasukkan
   var emailValue = emailInput.value;
 
   // Membuat pola regex untuk validasi email
   var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
   // Memeriksa apakah email valid
   if (emailPattern.test(emailValue)) {
     // Email valid, menghilangkan pesan validasi dan mengubah tampilan input
     emailInput.style.border = '2px solid green';
     validationMessage.style.display = 'block';
   } else {
     // Email tidak valid, menampilkan pesan validasi dan mengubah tampilan input
     emailInput.style.border = '2px solid red';
     validationMessage.style.display = 'block';
   }
 });