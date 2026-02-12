import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SPEECH =
  " Futur ingénieur des systèmes SI, actuellement à EPITECH en 3ème année, je suis passioné des nouvelles technologies ainsi que de leurs applications.Je suis à la recherche d'une alternance de 32 mois dans IT/IoT/IIoT.Je concois des applications et crais des projets sous divers languages. ";

export default function Home() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  /* Typing effect en boucle */
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < SPEECH.length) {
        setText((prev) => prev + SPEECH[index]);
        setIndex(index + 1);
      } else {
        setTimeout(() => {
          setText('');
          setIndex(0);
        }, 2000);
      }
    }, 80);

    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        ...styles.wrapper,
        backgroundPosition: `center ${offsetY * 0.15}px`
      }}
    >
     
      <section style={styles.intro}>
  <h1 style={styles.title}>
    Nouri FOUDIL-BEY
    </h1>
  <p style={styles.speech}>
    {text}
    <span style={styles.cursor}>▋</span>
  </p>
</section>
      
      <section className="home-grid" style={styles.grid}>
        <Tile title="Control Room" image={`${import.meta.env.BASE_URL}home-control.jpg`} link="/control-room" />
        <Tile title="Dossier Opérateur" image={`${import.meta.env.BASE_URL}home-dossier.jpg`} link="/dossier-operateur" />
        <Tile title="Missions Déployées" image={`${import.meta.env.BASE_URL}home-missions.jpg`} link="/missions-deployees" />
        <Tile title="Arsenal Technique" image={`${import.meta.env.BASE_URL}home-arsenal.jpg`} link="/arsenal-technique" />
        <Tile title="Case Files" image={`${import.meta.env.BASE_URL}home-cases.jpg`} link="/case-files" />
        <Tile title="Canal Direct" image={`${import.meta.env.BASE_URL}home-contact.jpg`} link="/canal-direct" />
      </section>
    </div>
  );
}

/* ---------- TILE ---------- */

function Tile({ title, image, link }) {
  return (
    <Link to={link} className="tile" style={styles.tile}>
      <div
        className="tile-image"
        style={{
          ...styles.image,
          backgroundImage: `url(${image})`
        }}
      />
      <div className="tile-overlay" style={styles.overlay}>
        <span style={styles.tileTitle}>{title}</span>
      </div>
    </Link>
  );
}

/* ---------- STYLES ---------- */

const styles = {
  
  wrapper: {
    minHeight: '100%',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',

    backgroundColor: '#020617',

    border: '2px solid #0f172a',
    borderRadius: '14px',

    boxShadow: `
      inset 0 0 40px rgba(34,197,94,0.08),
      0 0 30px rgba(0,0,0,0.9)
    `
  },
  
  intro: {
    textAlign: 'center',
    maxWidth: '720px',
    margin: '0 auto'
  },

  title: {
    fontSize: '2rem',
    fontWeight: '600',
    letterSpacing: '0.1em',
    color: '#22c55e'
  },

  subtitle: {
    display: 'block',
    marginTop: '8px',
    fontSize: '0.85rem',
    letterSpacing: '0.18em',
    color: '#16a34a'
  },

  speech: {
    marginTop: '16px',
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#22c55e',
    fontFamily: 'monospace',
    minHeight: '3.5em'
  },

  cursor: {
    marginLeft: '4px',
    animation: 'blink 1s step-start infinite'
  },

  
  grid: {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px'
  },
  
  tile: {
    position: 'relative',
    height: '240px',
    overflow: 'hidden',

    borderRadius: '10px',
    border: '1px solid #0f172a',
    textDecoration: 'none',

    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  },

  image: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 0.4s ease'
  },

  overlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(to top, rgba(2,6,23,0.85), rgba(2,6,23,0.2))',

    display: 'flex',
    alignItems: 'flex-end',
    padding: '16px'
  },

  tileTitle: {
    fontSize: '0.9rem',
    letterSpacing: '0.12em',
    color: '#22c55e'
  }
};