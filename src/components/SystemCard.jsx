export default function SystemCard({ title, description, stack }) {
  return (
    <div style={styles.card}>
      <h4 style={styles.title}>{title}</h4>
      <p style={styles.text}>{description}</p>
      <div style={styles.stack}>
        {stack.map((tech) => (
          <span key={tech} style={styles.badge}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: 'transparent',
    padding: '1.2rem',
    border: '1px solid #22c55e',
    borderRadius: '0px',
  },
  title: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#22c55e',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    marginBottom: '0.5rem'
  },
  text: {
    fontSize: '0.85rem',
    color: '#ffffff',
    opacity: 0.9,
    marginBottom: '1rem',
    fontFamily: 'monospace'
  },
  stack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'
  },
  badge: {
    fontSize: '0.7rem',
    padding: '2px 8px',
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    border: '1px solid #22c55e',
    color: '#22c55e',
    fontFamily: 'monospace',
    fontWeight: 'bold'
  }
};