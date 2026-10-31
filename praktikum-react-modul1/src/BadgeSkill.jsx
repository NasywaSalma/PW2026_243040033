import React from 'react';

// Komponen BadgeSkill menerima props namaSkill dan level
function BadgeSkill({ namaSkill, level }) {

  // Menentukan warna berdasarkan level keahlian
  const warnaLevel = {
    'Pemula': '#E3F2FD',
    'Menengah': '#FFF3CD',
    'Mahir': '#D4EDDA'
  };

  return (
    <span style={{
      display: 'inline-block',
      padding: '6px 12px',
      margin: '5px',
      borderRadius: '20px',
      backgroundColor: warnaLevel[level] || '#EEEEEE',
      color: '#333333',
      fontSize: '13px',
      fontWeight: 'bold'
    }}>
      {namaSkill} - {level}
    </span>
  );
}

export default BadgeSkill;