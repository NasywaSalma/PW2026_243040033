
import React from 'react';
import KartuProfil from './KartuProfile.jsx';
import BadgeSkill from './BadgeSkill.jsx';
import ItemMatkul from './ItemMatkul.jsx';
import ProjectCard from './ProjectCard.jsx';
import fotoProfil from './assets/myfoto.jpeg';

function App() {
  // 1. Data daftar mata kuliah praktikum semester ini
  const daftarPraktikum = [
    {
      id: 101,
      kode: 'IF21W0506',
      nama: 'Pemrograman Web (E)',
      sks: 2,
      hari: 'Selasa'
    },
    {
      id: 102,
      kode: 'IF21W0507',
      nama: 'Sistem Berorientasi Objek (A)',
      sks: 2,
      hari: 'Selasa'
    },
    {
      id: 103,
      kode: 'IF21W0508',
      nama: 'Pemograman II (A)',
      sks: 2,
      hari: 'Senin'
    },

  ];

  // 2. Fungsi penanganan interaksi event tombol
  const notifikasiSapaan = () => {
    alert('Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.');
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '40px auto',
      padding: '0 24px',
      fontFamily: 'Arial, sans-serif'
    }}>

      <header style={{
        textAlign: 'center',
        marginBottom: '32px'
      }}>
        <h1 style={{
          color: '#1B365D',
          margin: '0 0 8px 0'
        }}>
          Praktikum Pemrograman Web
        </h1>

        <p style={{
          color: '#666',
          fontSize: '15px'
        }}>
          Laboratorium Informatika - Modul 1:
          Pengenalan React JS & Vite
        </p>
      </header>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{
          color: '#2C3E50',
          borderBottom: '2px solid #E1E4E8',
          paddingBottom: '8px'
        }}>
          Profil Mahasiswa Praktikan
        </h2>

        <KartuProfil
          nama="Nasywa Nur Afiffah Salma"
          npm="233040033"
          kelas="IF - Praktikum WEB"
          status="Aktif"
          fotoUrl={fotoProfil}
        />
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{
          color: '#2C3E50',
          borderBottom: '2px solid #E1E4E8',
          paddingBottom: '8px'
        }}>
          Keahlian Mahasiswa
        </h2>

        <BadgeSkill namaSkill="Java" level="Pemula" />
        <BadgeSkill namaSkill="HTML & CSS" level="Menengah" />
        <BadgeSkill namaSkill="React JS" level="Mahir" />
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{
          color: '#2C3E50',
          borderBottom: '2px solid #E1E4E8',
          paddingBottom: '8px'
        }}>
          Daftar Rencana Praktikum Semester (List Rendering)
        </h2>

        <div style={{
          display: 'grid',
          gap: '12px'
        }}>
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul
              key={matkul.id}
              kode={matkul.kode}
              nama={matkul.nama}
              sks={matkul.sks}
              hari={matkul.hari}
            />
          ))}
        </div>
      </section>

      
<section style={{ marginBottom: '32px' }}>
  <h2 style={{
    color: '#2C3E50',
    borderBottom: '2px solid #E1E4E8',
    paddingBottom: '8px'
  }}>
    Mini Portfolio Showcase
  </h2>

  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px'
  }}>
    <ProjectCard
      judul="Personal Portfolio"
      deskripsi="Website pribadi untuk menampilkan profil, keahlian, dan pengalaman mahasiswa."
      teknologi={['HTML', 'CSS']}
      github="https://github.com/NasywaSalma/itw2023_project2_243040033/"
    />

    <ProjectCard
      judul="Website Restoran"
      deskripsi="Website restoran dengan konsep soft pinky palace yang menampilkan menu, harga, dan informasi lainnya."
      teknologi={['HTML', 'CSS', 'PHP', 'phpMyadmin']}
      github="https://github.com/NasywaSalma/IPA2025"
    />

    <ProjectCard
      judul="Prototipe Aplikasi Hotel"
      deskripsi="Prototipe aplikasi hotel yang dirancang menggunakan Figma, yang menjual budaya lokal (Balinese)."
      teknologi={['Figma']}
      github="https://www.figma.com/design/MSAtPaKSB9CZmc7NkWVDR3/Balinese-Resort?node-id=0-1&p=f&t=5QdfJOpZL1plJaIA-0"
    />

    <ProjectCard
      judul="Projek Tubes Matakuliah Web"
      deskripsi="Website edukasi literasi keuangan untuk meningkatkan pemahaman masyarakat mengenai risiko judi online dan pinjaman ilegal."
      teknologi={['HTML', 'CSS', 'PHP', 'MySQL']}
      github="https://github.com/NasywaSalma/PW2025_tubes_243040033"
    />
  </div>
</section>


      <div style={{
        textAlign: 'center',
        marginTop: '40px'
      }}>
        <button onClick={notifikasiSapaan} style={{
          backgroundColor: '#1B365D',
          color: '#FFFFFF',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '14px'
        }}>
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>

    </div>
  );
}

export default App;
