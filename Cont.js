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
    const pop = () => {
      img.style.transition = 'transform 0.35s';
      img.style.transform = 'scale(1.08)';
      setTimeout(() => { img.style.transform = 'scale(1)'; }, 350);
    };
    img.addEventListener('touchstart', pop);
    img.addEventListener('click', pop);
  });

document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', e => {
      if (!confirm(`Contact through ${a.href}?`)) e.preventDefault();
    });
    a.addEventListener('touchstart', () => {
      alert(`Touched contact link: ${a.href}`);
    });
  });

  const guitar = document.createElement('div');
  guitar.textContent = '🎸 Note me!';
  guitar.style.cursor = 'pointer';
  guitar.style.padding = '12px';
  guitar.style.fontSize = '1.4em';
  document.querySelector('footer').appendChild(guitar);

  const playNote = () => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 330;
    osc.connect(ctx.destination);
    osc.start();
    setTimeout(() => osc.stop(), 500);
  };

  guitar.addEventListener('click', playNote);
  guitar.addEventListener('touchstart', playNote);
});
