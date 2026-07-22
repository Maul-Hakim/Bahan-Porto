Taruh gambar kamu di folder ini, misalnya:
  - profile.png       (foto profil di bagian Hero)
  - project-login.png (screenshot proyek UI Hijab Distribution)

Sandbox ini tidak punya akses internet untuk mengunduh gambar dari
my-gilt-omega.vercel.app secara otomatis, jadi index.html untuk sementara
masih memuat gambar tersebut langsung dari situs lama kamu (URL penuh).

Kalau kamu taruh file gambar di sini dengan nama di atas, tinggal ganti
src-nya di index.html menjadi:
  assets/images/profile.png
  assets/images/project-login.png
