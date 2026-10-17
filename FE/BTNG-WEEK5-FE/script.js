/**
 * Tugas Pertemuan 5 BTNG 2026: Website Profil Responsif
 * Interaksi JavaScript: Manipulasi DOM & Event Listener
 * 
 * Ketentuan Tugas:
 * 1. Tombol Ubah Teks:
 *    - Mengubah teks deskripsi profil menjadi kalimat lain saat diklik.
 *    - Menggunakan querySelector(), textContent, dan addEventListener().
 * 2. Tombol Ganti Tema:
 *    - Mengubah tampilan website dari tema terang ke gelap atau sebaliknya.
 *    - Menggunakan classList.toggle() untuk mengubah class CSS.
 */

document.addEventListener('DOMContentLoaded', () => {
  // ---------------------------------------------------------------------------
  // 1. Seleksi Elemen DOM menggunakan querySelector()
  // ---------------------------------------------------------------------------
  const profileDesc = document.querySelector('#profileDesc');
  const btnChangeText = document.querySelector('#btnChangeText');
  const btnThemeToggle = document.querySelector('#btnThemeToggle');
  const themeIcon = document.querySelector('.theme-icon');
  const themeText = document.querySelector('.theme-text');

  // ---------------------------------------------------------------------------
  // 2. Data Kalimat Deskripsi Profil untuk Tombol "Ubah Teks"
  // ---------------------------------------------------------------------------
  const descriptions = [
    "Mahasiswa Teknik Informatika Universitas Dian Nuswantoro (UDINUS) berlatar belakang SMK PPLG SMKN 1 Bangsri. Berfokus pada pembelajaran rekayasa aplikasi web modern serta perancangan antarmuka digital yang bersih, fungsional, dan ramah pengguna.",
    "Pengembang antarmuka web dan eksplorasi visual interaktif berbasis di Jepara & Semarang. Senang membedah struktur antarmuka yang rapi, arsitektur responsif, serta menyelaraskan kenyamanan visual dengan performa yang optimal."
  ];

  let currentDescIndex = 0;

  // ---------------------------------------------------------------------------
  // 3. Event Listener: Tombol Ubah Teks
  // ---------------------------------------------------------------------------
  if (btnChangeText && profileDesc) {
    btnChangeText.addEventListener('click', () => {
      // Beralih ke indeks teks berikutnya
      currentDescIndex = (currentDescIndex + 1) % descriptions.length;
      
      // Mengubah teks menggunakan textContent
      profileDesc.textContent = descriptions[currentDescIndex];

      // Efek animasi transisi halus saat teks berganti
      profileDesc.classList.remove('fade-update');
      // Trigger reflow untuk me-restart animasi CSS
      void profileDesc.offsetWidth;
      profileDesc.classList.add('fade-update');
    });
  }

  // ---------------------------------------------------------------------------
  // 4. Event Listener: Tombol Ganti Tema (Light <-> Dark Mode)
  // ---------------------------------------------------------------------------
  if (btnThemeToggle && themeIcon && themeText) {
    btnThemeToggle.addEventListener('click', () => {
      // Mengubah class CSS pada body menggunakan classList.toggle()
      const isDarkMode = document.body.classList.toggle('dark-theme');

      // Mengubah teks dan ikon tombol secara dinamis menggunakan textContent
      if (isDarkMode) {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Mode Terang';
      } else {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Mode Gelap';
      }
    });
  }
});
