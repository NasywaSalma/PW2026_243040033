
import React from 'react';

function ProjectCard({ judul, deskripsi, teknologi, github }) {
  return (
    <div style={{
      border: '1px solid #D0D7DE',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{
        color: '#1B365D',
        marginTop: '0'
      }}>
        {judul}
      </h3>

      <p style={{
        color: '#555',
        fontSize: '14px',
        lineHeight: '1.6'
      }}>
        {deskripsi}
      </p>

      <div style={{
        marginBottom: '15px'
      }}>
        {teknologi.map((tech, index) => (
          <span key={index} style={{
            display: 'inline-block',
            backgroundColor: '#E3F2FD',
            color: '#1B365D',
            padding: '5px 10px',
            borderRadius: '15px',
            fontSize: '12px',
            margin: '3px'
          }}>
            #{tech}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#1B365D',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}
      >
        Lihat Projek →
      </a>
    </div>
  );
}

export default ProjectCard;
