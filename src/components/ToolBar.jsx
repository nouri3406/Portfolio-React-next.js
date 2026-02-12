import { Link, useLocation } from 'react-router-dom';

export default function Toolbar() {
  const { pathname } = useLocation();

  return (
    <nav style={styles.bar}>
      <Link to="/" style={styles.logo}>
        INCIDENT ROOM
      </Link>

      <div style={styles.links}>
        <NavLink to="/control-room" label="CONTROL ROOM" path={pathname} />
        <NavLink to="/dossier-operateur" label="DOSSIER" path={pathname} />
        <NavLink to="/missions-deployees" label="MISSIONS" path={pathname} />
        <NavLink to="/arsenal-technique" label="ARSENAL" path={pathname} />
        <NavLink to="/case-files" label="CASE FILES" path={pathname} />
        <NavLink to="/canal-direct" label="CONTACT" path={pathname} />
      </div>
    </nav>
  );
}

function NavLink({ to, label, path }) {
  const active = path === to;

  return (
    <Link
      to={to}
      style={{
        ...styles.link,
        ...(active ? styles.active : {})
      }}
    >
      {label}
    </Link>
  );
}

const styles = {
  bar: {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    backgroundColor: '#020617',
    borderBottom: '2px solid #22c55e'
  },
  logo: {
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '0.25em',
    color: '#22c55e',
    textDecoration: 'none'
  },
  links: {
    display: 'flex',
    gap: '20px'
  },
  link: {
    fontSize: '10px',
    color: '#22c55e',
    textDecoration: 'none',
    fontFamily: 'monospace',
    opacity: 0.6,
    letterSpacing: '0.1em'
  },
  active: {
    opacity: 1,
    color: '#22c55e',
    fontWeight: 'bold'
  }
};