function validateForm() {
    const namaDepan = document.getElementById('namaDepan').value;
    const namaBelakang = document.getElementById('namaBelakang').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    if (namaDepan === '' || namaBelakang === '' || password === '' || username === '' || email === '') {
      alert('Semua field harus diisi');
      return false;
    }

    return true;
  }