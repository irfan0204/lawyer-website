const testimonials = [
  {
    quote: '"When I was wrongly accused, I had nowhere to turn. Adv. Mondal not only secured my bail within 48 hours but dismantled the prosecution\'s case piece by piece. I owe my freedom to his preparation."',
    author: '— Client, Acquitted · Sessions Court, Kolkata'
  },
  {
    quote: '"Facing a cheque bounce case with no understanding of the process was terrifying. Adv. Mondal guided me through every step — the outcome exceeded our best expectations."',
    author: '— Business client · NI Act matter, Bankshal Court'
  },
  {
    quote: '"The anticipatory bail was filed and heard on the same day. That kind of urgency and precision is rare. I recommend Adv. Mondal without hesitation."',
    author: '— Client · Anticipatory bail, Calcutta High Court'
  }
];

let currentT = 0;

function setTestimonial(i) {
  currentT = i;
  const quote = document.getElementById('t-quote');
  const author = document.getElementById('t-author');
  if (quote) quote.textContent = testimonials[i].quote;
  if (author) author.textContent = testimonials[i].author;
  document.querySelectorAll('.t-dot').forEach(function(d, j) {
    d.classList.toggle('active', j === i);
  });
}

setInterval(function() {
  setTestimonial((currentT + 1) % testimonials.length);
}, 5000);

function submitForm() {
  var name = document.getElementById('f-name').value.trim();
  var phone = document.getElementById('f-phone').value.trim();
  var email = document.getElementById('f-email').value.trim();
  var matter = document.getElementById('f-matter').value;
  var brief = document.getElementById('f-brief').value.trim();
  if (!name || !phone || !email || !matter) {
    alert('Please fill in all required fields.');
    return;
  }

  var message =
    '🙏 *New Consultation Request*\n\n' +
    '*Name:* ' + name + '\n' +
    '*Phone:* ' + phone + '\n' +
    '*Email:* ' + email + '\n' +
    '*Matter:* ' + matter + '\n' +
    (brief ? '*Brief:* ' + brief : '');

  var waURL = 'https://wa.me/919330669772?text=' + encodeURIComponent(message);

  document.getElementById('form-container').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';

  window.open(waURL, '_blank');
}

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
