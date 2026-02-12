export default function IncidentList() {
  return (
    <section>
      <h3 style={styles.title}>LOGS D'INCIDENTS RÉSOLUS</h3>

      <ul style={styles.list}>
        <li style={styles.item}>[CASE 01] — PERTE RÉSEAU : RECONNEXION AUTO OK</li>
        <li style={styles.item}>[CASE 02] — CAPTEUR BRUITÉ : FILTRE KALMAN APPLIQUÉ</li>
        <li style={styles.item}>[CASE 03] — OVERCOST DATA : OPTIMISATION PAYLOAD MQTT</li>
      </ul>

      <p style={styles.signature}>
        "Un système n'est pas sérieux quand il marche.
        Il est sérieux quand il tombe, et qu'il se relève proprement."
      </p>
    </section>
  );
}

const styles = {
  title: {
    fontSize: '0.75rem',
    color: '#22c55e',
    fontWeight: 'bold',
    letterSpacing: '0.1em',
    marginBottom: '10px'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 15px 0',
    fontFamily: 'monospace',
    fontSize: '0.75rem',
    color: '#ffffff',
    opacity: 0.9
  },
  item: {
    marginBottom: '6px',
    borderLeft: '2px solid #22c55e',
    paddingLeft: '10px'
  },
  signature: {
    fontSize: '0.7rem',
    color: '#22c55e',
    fontStyle: 'italic',
    opacity: 0.6,
    borderTop: '1px solid rgba(34, 197, 94, 0.2)',
    paddingTop: '8px'
  }
};