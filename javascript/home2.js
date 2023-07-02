window.addEventListener('load', function() {
    var loading = document.getElementById('loading');
    var content = document.getElementById('content');
  
    setTimeout(function() {
      loading.style.display = 'none';
      content.style.display = 'block';
    }, 3000); // 3000 milidetik = 3 detik
  });