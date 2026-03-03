const styles = {
  page: {
    flex: 1,
    maxWidth: '1100px',
    margin: '0 auto',
    width: '100%',
    padding: '48px 24px',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '56px',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#FDF0EF',
    color: '#C0392B',
    fontSize: '12px',
    fontWeight: '600',
    padding: '6px 16px',
    borderRadius: '20px',
    marginBottom: '20px',
    border: '1px solid rgba(192,57,43,0.2)',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: "'Sora', sans-serif",
    fontSize: '42px',
    fontWeight: '700',
    color: '#1A1F2E',
    lineHeight: '1.2',
    marginBottom: '16px',
  },
  titleAccent: {
    color: '#C0392B',
  },
  subtitle: {
    fontSize: '17px',
    color: '#8A9BB0',
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: '1.6',
    fontWeight: '400',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    marginBottom: '48px',
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '28px 24px',
    boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
    border: '1px solid #E2E8F0',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  statIcon: {
    fontSize: '28px',
    marginBottom: '4px',
  },
  statValue: {
    fontFamily: "'Sora', sans-serif",
    fontSize: '32px',
    fontWeight: '700',
    color: '#1A1F2E',
  },
  statLabel: {
    fontSize: '14px',
    color: '#8A9BB0',
    fontWeight: '400',
  },
  statDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#C0392B',
    display: 'inline-block',
    marginRight: '6px',
  },
  sectionTitle: {
    fontFamily: "'Sora', sans-serif",
    fontSize: '20px',
    fontWeight: '700',
    color: '#1A1F2E',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
    border: '1px solid #E2E8F0',
    overflow: 'hidden',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#F4F6F9',
    padding: '14px 20px',
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: '600',
    color: '#8A9BB0',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    borderBottom: '1px solid #E2E8F0',
  },
  td: {
    padding: '16px 20px',
    fontSize: '14px',
    color: '#2C3E50',
    borderBottom: '1px solid #F4F6F9',
  },
  statusChip: (status) => ({
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    backgroundColor: status === 'atendida' ? '#EAF7F0' : '#FDF0EF',
    color: status === 'atendida' ? '#27AE60' : '#C0392B',
  }),
}

const stats = [
  { icon: '👤', value: '0', label: 'Donantes registrados' },
  { icon: '💉', value: '0', label: 'Donaciones realizadas' },
  { icon: '🏥', value: '0', label: 'Hospitales activos' },
  { icon: '📋', value: '0', label: 'Solicitudes pendientes' },
]

const sampleData = [
  { id: 1, donante: 'Ana García',  tipo: 'O+',  fecha: '2025-03-01', estado: 'atendida' },
  { id: 2, donante: 'Luis Pérez',  tipo: 'A-',  fecha: '2025-03-02', estado: 'pendiente' },
  { id: 3, donante: 'María López', tipo: 'B+',  fecha: '2025-03-02', estado: 'pendiente' },
]

const Home = () => {
  return (
    <main style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <span style={styles.badge}>🩸 Sistema activo</span>
        <h1 style={styles.title}>
          Gestión de <span style={styles.titleAccent}>Donantes</span><br />de Sangre
        </h1>
        <p style={styles.subtitle}>
          Plataforma para registrar donantes, donaciones y solicitudes hospitalarias en tiempo real.
        </p>
      </section>

      {/* Stats */}
      <div style={styles.statsGrid}>
        {stats.map(({ icon, value, label }) => (
          <div key={label} style={styles.statCard}>
            <span style={styles.statIcon}>{icon}</span>
            <span style={styles.statValue}>{value}</span>
            <span style={styles.statLabel}>
              <span style={styles.statDot}></span>{label}
            </span>
          </div>
        ))}
      </div>

      {/* Recent donations table */}
      <h2 style={styles.sectionTitle}>Donaciones recientes</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>#</th>
            <th style={styles.th}>Donante</th>
            <th style={styles.th}>Tipo de sangre</th>
            <th style={styles.th}>Fecha</th>
            <th style={styles.th}>Estado</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map(row => (
            <tr key={row.id}>
              <td style={styles.td}>{row.id}</td>
              <td style={styles.td}>{row.donante}</td>
              <td style={styles.td}>{row.tipo}</td>
              <td style={styles.td}>{row.fecha}</td>
              <td style={styles.td}>
                <span style={styles.statusChip(row.estado)}>{row.estado}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default Home