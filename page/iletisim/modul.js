
console.log("İletişim modülü çalışıyor...");

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = {};
      for (let [key, value] of formData.entries()) {
        data[key] = value;
      }

      console.log('Form verileri:', data);
      alert('Mesajınız gönderildi!');
      contactForm.reset();
    });
  }
});