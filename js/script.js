document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Sayfanın yenilenmesini engeller

  // Form verilerini al
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const body = document.getElementById('body').value;

  // Verileri konsola yazdır
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Subject:", subject);
  console.log("Message:", body);

  // Kullanıcıya bilgi ver
  alert("Form başarıyla gönderildi!");
});
