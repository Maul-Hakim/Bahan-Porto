// mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  // ============ LANGUAGE SWITCH (ID / EN) ============
  const translations = {
    id: {
      'meta.title': 'Muhammad Mauli Al Hakim — IT Support & Web Developer',
      'nav.about': 'Tentang', 'nav.experience': 'Pengalaman', 'nav.organization': 'Organisasi',
      'nav.skills': 'Keahlian', 'nav.certifications': 'Sertifikasi', 'nav.contact': 'Kontak',
      'nav.toggleAria': 'Buka menu',
      'hero.eyebrow': 'Tersedia untuk peluang baru',
      'hero.role': 'IT Support & Implementation Specialist — Web Developer — UI/UX Designer',
      'hero.desc': 'Lulusan Teknik Informatika (IPK 3,48/4,00) dengan pengalaman langsung menangani implementasi perangkat lunak dan dukungan teknis pada sistem informasi rumah sakit. Terbiasa menyusun dokumentasi teknis, menelusuri akar masalah, dan menutup setiap kendala sampai tuntas — pendekatan yang sama saya bawa ke pengembangan web dan pengelolaan bisnis sendiri.',
      'hero.cvBtn': '↓ Unduh CV',
      'hero.contactBtn': 'Hubungi Saya',
      'about.secnum': '01 · Profil', 'about.title': 'Tentang Saya',
      'about.p1': 'Saya menyelesaikan studi Teknik Informatika di Universitas Pasundan, Bandung, dan langsung terjun menangani implementasi sistem informasi rumah sakit — mulai dari konfigurasi perangkat lunak, pemecahan masalah teknis, hingga penyusunan dokumentasi untuk audit internal dan transfer pengetahuan.',
      'about.p2': 'Di luar pekerjaan formal, saya menjalankan Mauli Pet Shop sejak awal 2025: mengelola stok, keuangan, dan hubungan pemasok sekaligus menerapkan keputusan berbasis data untuk harga dan pengadaan produk. Pengalaman ini melatih saya berpikir sistematis, baik saat men-debug sistem maupun menjalankan operasional bisnis sehari-hari.',
      'about.p3': 'Saya juga aktif membangun antarmuka web (HTML, CSS, PHP, JavaScript) dan merancang UI di Figma, serta pernah memimpin Himpunan Mahasiswa Teknik Informatika (HMTIF) UNPAS selama satu periode kepengurusan.',
      'about.stat.location.k': 'Lokasi', 'about.stat.education.k': 'Pendidikan',
      'about.stat.education.v': 'S1 Teknik Informatika, IPK 3,48',
      'about.stat.campus.k': 'Kampus', 'about.stat.focus.k': 'Fokus',
      'about.stat.status.k': 'Status', 'about.stat.status.v': 'Siap kontribusi manufaktur skala besar',
      'experience.secnum': '02 · Log Sistem', 'experience.title': 'Pengalaman Kerja',
      'experience.sub': 'Dicatat seperti tiket layanan — setiap peran punya status, cakupan tugas, dan hasil yang bisa ditelusuri.',
      'exp1.status': 'Status: Berjalan', 'exp1.role': 'Pemilik & Manajer Operasional Bisnis',
      'exp1.meta': 'Mauli Pet Shop · Karawang, Indonesia · Februari 2025 – Sekarang',
      'exp1.li1': 'Mengelola operasional menyeluruh: pengendalian stok, pelaporan keuangan, dan koordinasi pemasok untuk layanan grooming, penitipan, dan penjualan eceran.',
      'exp1.li2': 'Menerapkan alat digital untuk memantau stok, mencatat arus kas, dan mengoptimalkan harga berdasarkan analisis pasar.',
      'exp1.li3': 'Menjaga standar layanan pelanggan yang konsisten dan menyelesaikan kendala operasional harian.',
      'exp1.li4': 'Mengambil keputusan berbasis data untuk pengadaan produk dan penetapan harga layanan.',
      'exp2.status': 'Status: Selesai', 'exp2.role': 'Staf Teknologi Informasi',
      'exp2.meta': 'PT. Evolusi Teknologi Indonesia · Sidoarjo, Indonesia · Juni 2024 – September 2024',
      'exp2.li1': 'Mengimplementasikan dan mengonfigurasi solusi perangkat lunak untuk sistem informasi rumah sakit (SIR), memastikan ketersediaan sistem sesuai kebutuhan bisnis.',
      'exp2.li2': 'Melakukan analisis akar masalah atas kendala implementasi, mengurangi eskalasi insiden lewat identifikasi masalah yang terstruktur.',
      'exp2.li3': 'Menyusun dokumentasi teknis: laporan implementasi, catatan aktivitas, dan rekam jejak penyelesaian masalah untuk audit internal.',
      'exp2.li4': 'Berkoordinasi dengan tim pengembang internal dan pemangku kepentingan eksternal untuk kelancaran penerapan dan dukungan pasca-implementasi.',
      'exp2.li5': 'Melaksanakan evaluasi sistem dan analisis kinerja untuk mendukung peningkatan layanan TI berkelanjutan.',
      'org.secnum': '03 · Rekam Jejak', 'org.title': 'Organisasi & Pendidikan',
      'org1.yr': 'Jul 2021 – Jun 2022', 'org1.role': 'Ketua Umum — HMTIF UNPAS',
      'org1.li1': 'Memimpin penyusunan program kerja tahunan, mencakup anggaran, jadwal, dan koordinasi antar divisi.',
      'org1.li2': 'Mengelola SDM dan pengembangan anggota untuk keberlangsungan organisasi.',
      'org1.li3': 'Membangun hubungan dengan pemangku kepentingan kampus dan organisasi eksternal.',
      'org2.yr': 'Jul 2020 – Jun 2021', 'org2.role': 'Anggota, Divisi Sosial dan Politik — HMTIF UNPAS',
      'org2.li1': 'Berkoordinasi dengan pihak kampus terkait kebijakan universitas.',
      'org2.li2': 'Mengadvokasi kepentingan mahasiswa dan memfasilitasi komunikasi dengan lembaga institusi.',
      'edu.yr': 'Sep 2018 – Jun 2023', 'edu.role': 'S1 Teknik Informatika — IPK 3,48/4,00',
      'skills.secnum': '04 · Modul', 'skills.title': 'Keahlian',
      'skills.technical': 'Teknis', 'skills.general': 'Umum',
      'chip.itsupport': 'Dukungan & Troubleshooting TI', 'chip.swimpl': 'Implementasi Perangkat Lunak',
      'chip.sysdoc': 'Dokumentasi Sistem', 'chip.dataanalysis': 'Analisis Data',
      'chip.teamlead': 'Kepemimpinan Tim', 'chip.crossfunc': 'Koordinasi Lintas Fungsi',
      'chip.analytical': 'Pemecahan Masalah Analitis', 'chip.timemgmt': 'Manajemen Waktu',
      'chip.hrmgmt': 'Manajemen Sumber Daya Manusia', 'chip.projdoc': 'Dokumentasi Proyek',
      'chip.videoedit': 'Penyuntingan Video',
      'certs.secnum': '05 · Arsip', 'certs.title': 'Sertifikasi',
      'cert1.name': 'TOEPS — Tes Kemahiran Bahasa Inggris', 'cert1.date': 'Juli 2023',
      'cert2.name': 'Sertifikat Analis Data — Ousean', 'cert2.date': 'Juli 2025',
      'cert3.name': 'Sertifikat Analis Data — RevoU', 'cert3.date': 'Juli 2025',
      'projects.secnum': '06 · Studi Kasus', 'projects.title': 'Proyek',
      'project.desc': 'Perancangan antarmuka untuk platform distribusi hijab, dibangun sepenuhnya di Figma — mencakup alur login dan struktur halaman yang berfokus pada kemudahan penggunaan.',
      'project.link': 'Lihat Detail Proyek →',
      'contact.secnum': '07 · Kontak', 'contact.title': 'Mari Terhubung',
      'contact.sub': 'Terbuka untuk peran IT support, implementasi sistem, maupun pengembangan web di lingkungan manufaktur skala besar.',
      'contact.phone.k': 'Telepon', 'contact.location.k': 'Lokasi',
      'footer.text': '© 2026 Muhammad Mauli Al Hakim. Dibangun dengan HTML, CSS & sedikit kesabaran.'
    },
    en: {
      'meta.title': 'Muhammad Mauli Al Hakim — IT Support & Web Developer',
      'nav.about': 'About', 'nav.experience': 'Experience', 'nav.organization': 'Organization',
      'nav.skills': 'Skills', 'nav.certifications': 'Certifications', 'nav.contact': 'Contact',
      'nav.toggleAria': 'Open menu',
      'hero.eyebrow': 'Available for new opportunities',
      'hero.role': 'IT Support & Implementation Specialist — Web Developer — UI/UX Designer',
      'hero.desc': 'Informatics Engineering graduate (GPA 3.48/4.00) with hands-on experience implementing software and providing technical support for hospital information systems. Used to writing technical documentation, tracing issues back to their root cause, and closing every ticket properly — the same approach I bring to web development and running my own business.',
      'hero.cvBtn': '↓ Download CV',
      'hero.contactBtn': 'Contact Me',
      'about.secnum': '01 · Profile', 'about.title': 'About Me',
      'about.p1': 'I completed my degree in Informatics Engineering at Universitas Pasundan, Bandung, and went straight into implementing hospital information systems — from software configuration and technical troubleshooting to writing documentation for internal audits and knowledge transfer.',
      'about.p2': 'Outside my formal job, I\'ve been running Mauli Pet Shop since early 2025: managing stock, finances, and supplier relationships while applying data-driven decisions for pricing and procurement. This experience trained me to think systematically, whether debugging a system or running day-to-day operations.',
      'about.p3': 'I\'m also active in building web interfaces (HTML, CSS, PHP, JavaScript) and designing UI in Figma, and previously led the Informatics Engineering Student Association (HMTIF) at UNPAS for one term.',
      'about.stat.location.k': 'Location', 'about.stat.education.k': 'Education',
      'about.stat.education.v': 'B.Eng. Informatics Engineering, GPA 3.48',
      'about.stat.campus.k': 'Campus', 'about.stat.focus.k': 'Focus',
      'about.stat.status.k': 'Status', 'about.stat.status.v': 'Ready to contribute to large-scale manufacturing',
      'experience.secnum': '02 · System Log', 'experience.title': 'Work Experience',
      'experience.sub': 'Logged like service tickets — every role has a status, a scope of work, and a traceable outcome.',
      'exp1.status': 'Status: Ongoing', 'exp1.role': 'Owner & Business Operations Manager',
      'exp1.meta': 'Mauli Pet Shop · Karawang, Indonesia · February 2025 – Present',
      'exp1.li1': 'Manage end-to-end operations: stock control, financial reporting, and supplier coordination for grooming, boarding, and retail sales.',
      'exp1.li2': 'Implement digital tools to monitor stock levels, track cash flow, and optimize pricing based on market analysis.',
      'exp1.li3': 'Maintain consistent customer service standards and resolve day-to-day operational issues.',
      'exp1.li4': 'Apply data-driven decision-making for product procurement and service pricing.',
      'exp2.status': 'Status: Completed', 'exp2.role': 'IT Staff',
      'exp2.meta': 'PT. Evolusi Teknologi Indonesia · Sidoarjo, Indonesia · June 2024 – September 2024',
      'exp2.li1': 'Implemented and configured software solutions for a hospital information system (SIR), ensuring system availability met business needs.',
      'exp2.li2': 'Performed root-cause analysis on implementation issues, reducing incident escalation through structured problem identification.',
      'exp2.li3': 'Prepared technical documentation: implementation reports, activity logs, and resolution records for internal audits.',
      'exp2.li4': 'Coordinated with internal development teams and external stakeholders to ensure smooth rollout and post-implementation support.',
      'exp2.li5': 'Carried out system evaluation and performance analysis to support continuous IT service improvement.',
      'org.secnum': '03 · Track Record', 'org.title': 'Organization & Education',
      'org1.yr': 'Jul 2021 – Jun 2022', 'org1.role': 'President — HMTIF UNPAS',
      'org1.li1': 'Led the annual work program planning, covering budgeting, scheduling, and cross-division coordination.',
      'org1.li2': 'Managed human resources and member development to sustain the organization.',
      'org1.li3': 'Built and maintained relationships with campus stakeholders and external organizations.',
      'org2.yr': 'Jul 2020 – Jun 2021', 'org2.role': 'Member, Social & Political Affairs Division — HMTIF UNPAS',
      'org2.li1': 'Coordinated with campus authorities regarding university policies.',
      'org2.li2': 'Advocated for student interests and facilitated communication with institutional bodies.',
      'edu.yr': 'Sep 2018 – Jun 2023', 'edu.role': 'B.Eng. Informatics Engineering — GPA 3.48/4.00',
      'skills.secnum': '04 · Modules', 'skills.title': 'Skills',
      'skills.technical': 'Technical', 'skills.general': 'General',
      'chip.itsupport': 'IT Support & Troubleshooting', 'chip.swimpl': 'Software Implementation',
      'chip.sysdoc': 'System Documentation', 'chip.dataanalysis': 'Data Analysis',
      'chip.teamlead': 'Team Leadership', 'chip.crossfunc': 'Cross-functional Coordination',
      'chip.analytical': 'Analytical Problem-Solving', 'chip.timemgmt': 'Time Management',
      'chip.hrmgmt': 'Human Resource Management', 'chip.projdoc': 'Project Documentation',
      'chip.videoedit': 'Video Editing',
      'certs.secnum': '05 · Archive', 'certs.title': 'Certifications',
      'cert1.name': 'TOEPS — English Proficiency Test', 'cert1.date': 'July 2023',
      'cert2.name': 'Data Analyst Certificate — Ousean', 'cert2.date': 'July 2025',
      'cert3.name': 'Data Analyst Certificate — RevoU', 'cert3.date': 'July 2025',
      'projects.secnum': '06 · Case Study', 'projects.title': 'Project',
      'project.desc': 'Interface design for a hijab distribution platform, built entirely in Figma — covering the login flow and page structure with a focus on ease of use.',
      'project.link': 'View Project Details →',
      'contact.secnum': '07 · Contact', 'contact.title': "Let's Connect",
      'contact.sub': 'Open to IT support, system implementation, and web development roles in large-scale manufacturing environments.',
      'contact.phone.k': 'Phone', 'contact.location.k': 'Location',
      'footer.text': '© 2026 Muhammad Mauli Al Hakim. Built with HTML, CSS & a bit of patience.'
    }
  };

  const langButtons = document.querySelectorAll('.lang-btn');
  const i18nEls = document.querySelectorAll('[data-i18n]');
  const ariaEls = document.querySelectorAll('[data-i18n-aria]');

  function setLanguage(lang){
    const dict = translations[lang];
    if(!dict) return;

    i18nEls.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if(dict[key] !== undefined){
        if(el.tagName === 'TITLE'){
          document.title = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    ariaEls.forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if(dict[key] !== undefined){
        el.setAttribute('aria-label', dict[key]);
      }
    });

    document.documentElement.lang = lang;

    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
