import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import avatar from '../assets/avatar.jpg';

export default function ControlRoom() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dynamicScreenStyle = {
    ...styles.screen,
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
  };

  return (
    <Layout>
      <div style={dynamicScreenStyle}>
              
        <section style={styles.card}>
          <div style={styles.cardHeader}>
            <span style={styles.badge}>OPERATOR-ID</span>
            <span style={styles.headerMeta}>IIoT / IIoT Engineer</span>
          </div>
          <div style={styles.cardBody}>
            <div style={styles.avatar}></div>
            <h2 style={styles.cardTitle}>DOSSIER OPÉRATEUR</h2>
            <div style={styles.infoLine}>STATUS : <span style={styles.greenText}>AVAILABLE</span></div>
            <div style={styles.infoLine}>SKILLS : Terrain · Réseau · Systèmes</div>
            <Link to="/dossier-operateur" style={styles.cardLink}>→ ACCÉDER AU DOSSIER</Link>
          </div>
        </section>
              
        <section style={styles.card}>
          <div style={styles.cardHeader}>
            <span style={styles.badge}>SYS-PROD</span>
            <span style={styles.headerMeta}>Monitoring Temps Réel</span>
          </div>
          <div style={styles.cardBody}>
            <h2 style={styles.cardTitle}>SYSTEMS MONITORING</h2>
            <System title="CHANTIER MONITORING" meta="EDGE · MQTT · DOCKER" link="/missions-deployees" />
            <System title="ENERGY WASTE DETECTOR" meta="INFLUXDB · DASHBOARD" link="/missions-deployees" />
            <System title="PREDICTIVE MAINTENANCE" meta="SENSORS · EDGE · ALERT" link="/missions-deployees" />
          </div>
        </section>
             
        <section style={styles.card}>
          <div style={styles.cardHeader}>
            <span style={styles.badge}>LOG-FILE</span>
            <span style={styles.headerMeta}>Incident Room Logs</span>
          </div>
          <div style={styles.cardBody}>
            <h2 style={styles.cardTitle}>INCIDENT LOG</h2>
            <Incident id="CASE-01" title="PERTE RÉSEAU" status="ANALYSE_COMPLÈTE" link="/case-files/case-01" highlight />
            <Incident id="CASE-02" title="BRUIT CAPTEUR" status="ANALYSE_COMPLÈTE" />
            <Incident id="CASE-03" title="DATA SPIKE" status="RESOLVED" />
            <Link to="/case-files" style={styles.cardLink}>→ VOIR TOUS LES LOGS</Link>
          </div>
        </section>

        <footer style={{...styles.footer, gridColumn: isMobile ? '1' : '1 / span 3'}}>
          VUE D’ENSEMBLE DES MISSIONS - SYSTÈME OPÉRATIONNEL
        </footer>
      </div>
    </Layout>
  );
}

/* ================= SOUS-COMPOSANTS ================= */

function System({ title, meta, link }) {
  return (
    <Link to={link} style={styles.item}>
      <div style={styles.itemTitle}>{title}</div>
      <div style={styles.itemMeta}>{meta}</div>
    </Link>
  );
}

function Incident({ id, title, status, link, highlight }) {
  return (
    <div style={{...styles.item, ...(highlight ? styles.pulse : {})}}>
      <div style={styles.itemTitle}>{id} : {title}</div>
      <div style={styles.itemMeta}>STATUS : {status}</div>
    </div>
  );
}

/* ================= STYLES MISSION STYLE ================= */

const styles = {
  screen: {
    display: 'grid',
    gap: '24px',
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box'
  },
  card: {
    backgroundColor: 'transparent',
    border: '1px solid #22c55e', // Vert Alstom / Cyber
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 12px',
    borderBottom: '1px solid #22c55e',
    backgroundColor: 'rgba(34, 197, 94, 0.05)'
  },
  badge: {
    backgroundColor: '#22c55e',
    color: '#020617',
    fontSize: '10px',
    fontWeight: 'bold',
    padding: '2px 8px',
    fontFamily: 'monospace'
  },
  headerMeta: {
    fontSize: '10px',
    color: '#22c55e',
    fontFamily: 'monospace',
    opacity: 0.8
  },
  cardBody: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  cardTitle: {
    fontSize: '18px',
    color: '#22c55e',
    margin: '0 0 10px 0',
    letterSpacing: '0.05em'
  },
  avatar: {
    height: '100px',
    width: '100px',
    backgroundImage: `url(${avatar})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '1px solid #22c55e',
    marginBottom: '10px'
  },
  infoLine: {
    fontSize: '12px',
    color: '#22c55e',
    fontFamily: 'monospace',
    marginBottom: '4px'
  },
  greenText: { color: '#22c55e' },
  item: {
    display: 'block',
    padding: '10px 0',
    borderBottom: '1px solid rgba(34, 197, 94, 0.2)',
    textDecoration: 'none',
    color: 'inherit'
  },
  itemTitle: { fontSize: '13px', color: '#22c55e', marginBottom: '2px' },
  itemMeta: { fontSize: '10px', color: '#22c55e', opacity: 0.8 },
  cardLink: {
    fontSize: '11px',
    color: '#22c55e',
    textDecoration: 'none',
    marginTop: '15px',
    fontWeight: 'bold',
    letterSpacing: '0.1em'
  },
  footer: {
    textAlign: 'center',
    color: '#22c55e',
    fontSize: '14px',
    letterSpacing: '0.3em',
    padding: '40px 0',
    opacity: 0.9
  },
  pulse: { animation: 'pulse 2s infinite' }
};