// ============ LOGIN PAGE ============
(function initLogin(){
  const form = document.getElementById('loginForm');
  if(!form) return;

  const togglePw = document.getElementById('togglePw');
  const password = document.getElementById('password');
  const slash = document.getElementById('slash');

  togglePw.addEventListener('click', () => {
    const showing = password.type === 'text';
    password.type = showing ? 'password' : 'text';
    slash.style.display = showing ? 'none' : 'block';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const pass = password.value.trim();
    const errorMsg = document.getElementById('errorMsg');

    if(!username || !pass){
      errorMsg.textContent = 'Username dan kata sandi wajib diisi.';
      return;
    }
    errorMsg.textContent = '';
    window.location.href = 'dashboard.html';
  });
})();

// ============ DASHBOARD PAGE ============
(function initDashboard(){
  const tableBody = document.getElementById('tableBody');
  if(!tableBody) return;

  let shipments = [
    { kode:'01A', nama:'Ahmad',  jumlah:450 },
    { kode:'01B', nama:'Budi',   jumlah:450 },
    { kode:'01C', nama:'Jamila', jumlah:500 },
    { kode:'01D', nama:'Andi',   jumlah:435 },
    { kode:'01E', nama:'Jamal',  jumlah:700 },
    { kode:'01F', nama:'Halima', jumlah:350 },
  ];

  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const shipForm = document.getElementById('shipForm');
  const fKode = document.getElementById('fKode');
  const fNama = document.getElementById('fNama');
  const fJumlah = document.getElementById('fJumlah');
  const btnAdd = document.getElementById('btnAdd');
  const btnCancel = document.getElementById('btnCancel');
  const toast = document.getElementById('toast');

  let editIndex = null; // null = add mode, number = editing that row

  const icons = {
    eye: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8"/></svg>`,
    edit: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17v3z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>`,
    trash: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M9 7V4h6v3m-9 0 1 13h10l1-13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  };

  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  function render(){
    tableBody.innerHTML = '';

    if(shipments.length === 0){
      tableBody.innerHTML = `<tr class="empty-row"><td colspan="4">Belum ada data pengiriman.</td></tr>`;
      return;
    }

    shipments.forEach((row, i) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${row.kode}</td>
        <td>${row.nama}</td>
        <td>${row.jumlah}</td>
        <td>
          <div class="aksi-cell">
            <button class="icon-btn view" data-action="view" data-i="${i}" title="Lihat detail">${icons.eye}</button>
            <button class="icon-btn edit" data-action="edit" data-i="${i}" title="Edit">${icons.edit}</button>
            <button class="icon-btn danger" data-action="delete" data-i="${i}" title="Hapus">${icons.trash}</button>
          </div>
        </td>`;
      tableBody.appendChild(tr);
    });
  }

  tableBody.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if(!btn) return;
    const i = Number(btn.dataset.i);
    const action = btn.dataset.action;
    const row = shipments[i];

    if(action === 'view'){
      showToast(`${row.nama} · Kode ${row.kode} · ${row.jumlah} kerudung`);
    }
    if(action === 'edit'){
      openModal('edit', i);
    }
    if(action === 'delete'){
      if(confirm(`Hapus pengiriman untuk ${row.nama}?`)){
        shipments.splice(i, 1);
        render();
        showToast('Data pengiriman dihapus.');
      }
    }
  });

  function openModal(mode, i){
    editIndex = mode === 'edit' ? i : null;
    modalTitle.textContent = mode === 'edit' ? 'Edit Pengiriman' : 'Tambah Pengiriman';
    if(mode === 'edit'){
      const row = shipments[i];
      fKode.value = row.kode;
      fNama.value = row.nama;
      fJumlah.value = row.jumlah;
    } else {
      shipForm.reset();
    }
    modalOverlay.classList.add('open');
    fKode.focus();
  }

  function closeModal(){
    modalOverlay.classList.remove('open');
  }

  btnAdd.addEventListener('click', () => openModal('add'));
  btnCancel.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if(e.target === modalOverlay) closeModal();
  });

  shipForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      kode: fKode.value.trim(),
      nama: fNama.value.trim(),
      jumlah: Number(fJumlah.value)
    };
    if(!data.kode || !data.nama || !data.jumlah){
      return;
    }
    if(editIndex === null){
      shipments.push(data);
      showToast('Pengiriman baru ditambahkan.');
    } else {
      shipments[editIndex] = data;
      showToast('Data pengiriman diperbarui.');
    }
    closeModal();
    render();
  });

  document.getElementById('btnLogout').addEventListener('click', () => {
    window.location.href = 'login.html';
  });

  render();
})();
