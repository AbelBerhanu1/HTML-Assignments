document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggle = document.createElement('button');
  toggle.textContent = 'Toggle Mode';
  toggle.style.position = 'fixed';
  toggle.style.top = '10px';
  toggle.style.right = '10px';
  toggle.style.zIndex = '999';

  document.body.appendChild(toggle);

  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
  }
  
  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
  });

document.querySelectorAll('img').forEach(img => {
    const animate = () => {
      img.style.transition = 'transform 0.4s';
      img.style.transform = 'rotate(5deg)';
      setTimeout(() => { img.style.transform = 'rotate(0deg)'; }, 400);
    };
    img.addEventListener('touchstart', animate);
    img.addEventListener('click', animate);
  });

document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', e => {
      if (!confirm(`Explore more about Mac at ${a.href}?`)) e.preventDefault();
    });
    a.addEventListener('touchstart', () => {
      alert(`Touched bio link: ${a.href}`);
    });
  });

const guitar = document.createElement('div');
  guitar.textContent = '🎸 Strum me!';
  guitar.style.cursor = 'pointer';
  guitar.style.padding = '12px';
  guitar.style.fontSize = '1.4em';
  document.querySelector('footer').appendChild(guitar);

  const playStrum = () => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [330, 392, 440, 523].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.value = freq;
      osc.connect(ctx.destination);
      setTimeout(() => osc.start(), i * 50);
      setTimeout(() => osc.stop(), i * 50 + 300);
    });
  };
