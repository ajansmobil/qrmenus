// İletişim modülü JavaScript dosyası
console.log("İletişim modülü çalışıyor...");

// Form gönderimi işlemi
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Form verilerini al
      const formData = new FormData(contactForm);
      const data = {};
      for (let [key, value] of formData.entries()) {
        data[key] = value;
      }
      // Burada verileri API'ye gönderme işlemi yapılabilir
      console.log('Form verileri:', data);
      alert('Mesajınız gönderildi!');
      contactForm.reset();
    });
  }
});