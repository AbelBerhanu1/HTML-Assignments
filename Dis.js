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

document.querySelectorAll('audio, video').forEach(media => {
    const glow = () => {
      media.style.transition = 'box-shadow 0.6s';
      media.style.boxShadow = '0 0 25px rgba(0, 255, 100, 0.9)';
      setTimeout(() => { media.style.boxShadow = 'none'; }, 1200);
    };
    media.addEventListener('play', glow);
    media.addEventListener('touchstart', glow);
  });

  document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', e => {
      if (!confirm(`Listen to more? → ${a.href}`)) e.preventDefault();
    });
    a.addEventListener('touchstart', () => {
      alert(`Touched music link: ${a.href}`);
    });
  });
