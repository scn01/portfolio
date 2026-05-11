function openModal(id) {
  const d = modalData[id];
  if (!d) return;

  const el = document.getElementById('modal-content');
  el.innerHTML = `
    <h2>${d.title}</h2>
    <div class="modal-meta">${d.meta} // STATUS: ${d.status}</div>
    <p>${d.desc}</p>
    <ul style="padding-left:1.2rem;margin-bottom:1rem">
      ${d.details.map(x => `
        <li style="font-size:14px;color:#888;margin-bottom:8px;font-weight:300;line-height:1.6">${x}</li>
      `).join('')}
    </ul>
    <div class="modal-tech">
      ${d.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
    </div>
  `;

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (
    e &&
    e.target !== document.getElementById('modal-overlay') &&
    !e.target.classList.contains('modal-close')
  ) return;

  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }
});