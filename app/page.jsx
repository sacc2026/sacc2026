export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="home-hero">
        <h1>SAAC 2026</h1>
        <p className="hero-subtitle">
          Southeast Asia Catalysis Conference
        </p>
        <p className="hero-info">
          Singapore · December 2026
        </p>
      </section>

      {/* ===== HOSTED BY ===== */}
      <section className="home-section">
        <h2>Hosted By</h2>
        <div className="logo-row">
          <img src="/logos/scs.png" alt="Singapore Catalysis Society" />
        </div>
      </section>

      {/* ===== SUPPORTED BY ===== */}
      <section className="home-section">
        <h2>Supported By</h2>
        <div className="logo-row">   
          <img src="/logos/isce2.png" alt="ISCE²" />
          <img src="/logos/nus.png" alt="National University of Singapore" />
          <img src="/logos/ntu.png" alt="Nanyang Technological University" />
        </div>
      </section>

      {/* ===== IMPORTANT DATES ===== */}
      <section className="home-dates">
        <h2>Important Dates</h2>
        <table>
          <tbody>
            <tr>
              <td>Abstract Submission</td>
              <td>TBC</td>
            </tr>
            <tr>
              <td>Notification of Acceptance</td>
              <td>TBC</td>
            </tr>
            <tr>
              <td>Conference Dates</td>
              <td>December 2026</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ===== CONFERENCE INFO ===== */}
      <section className="home-section">
        <h2>Conference Information</h2>
        <ul className="info-list">
          <li><strong>Location:</strong> Singapore</li>
          <li><strong>Dates:</strong> December 2026</li>
          <li>
            <strong>Email:</strong>{" "}
            saac2026@singapore-catalysis-society.com
          </li>
        </ul>
      </section>
    </>
  );
}
