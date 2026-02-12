export default function OperatorCard() {
  return (
    <aside style={styles.container}>
      <img
        src="/photo-identite.jpg" 
        alt="Operator"
        style={styles.avatar}
      />

      <h2 style={styles.h2}>IoT / IIoT Engineer</h2>

      <p style={styles.baseline}>
        Je transforme le terrain en décisions fiables.
      </p>

      <p style={styles.layers}>
        Électronique • Terrain • Réseau • Logiciel
      </p>

      <span style={styles.badge}>
        Disponible en alternance — Février 2026
      </span>
    </aside>
  );
}

const styles = {
  container: {
    backgroundColor: 'transparent',
    padding: '1.5rem',
    border: '1px solid #22c55e',
    borderRadius: '0px',
  },
  avatar: {
    width: '100%',
    filter: 'grayscale(1) contrast(1.2)',
    border: '1px solid #22c55e',
    marginBottom: '1rem',
    display: 'block'
  },
  h2: {
    fontSize: '1.2rem',
    color: '#22c55e',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    margin: '0 0 0.5rem 0'
  },
  baseline: {
    fontSize: '0.9rem',
    color: '#ffffff',
    fontFamily: 'monospace',
    lineHeight: '1.4'
  },
  layers: {
    fontSize: '0.75rem',
    color: '#22c55e',
    opacity: 0.8,
    marginTop: '0.5rem',
    fontFamily: 'monospace',
    fontWeight: 'bold'
  },
  badge: {
    display: 'inline-block',
    marginTop: '1.5rem',
    padding: '0.4rem 0.8rem',
    backgroundColor: 'rgba(34, 197, 94, 0.15)',
    border: '1px solid #22c55e',
    color: '#22c55e',
    fontSize: '0.7rem',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
};