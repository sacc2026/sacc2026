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
          Singapore · 10–11 December 2026
        </p>
      </section>

      {/* ===== HOSTED BY ===== */}
      <section className="home-section">
        <div className="content">
          <h2>Hosted By</h2>
          <div className="logo-row">
            <img
              src="/logos/scs.png"
              alt="Singapore Catalysis Society"
            />
          </div>
        </div>
      </section>

      {/* ===== SUPPORTED BY ===== */}
      <section className="home-section">
        <div className="content">
          <h2>Supported By</h2>
          <div className="logo-row">
            <img src="/logos/isce2.png" alt="ISCE²" />
            <img src="/logos/nus.png" alt="National University of Singapore" />
            <img src="/logos/ntu.png" alt="Nanyang Technological University" />
          </div>
        </div>
      </section>

      {/* ===== IMPORTANT DATES ===== */}
      <section className="home-dates">
        <div className="content">
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
        </div>
      </section>

      {/* ===== CONFERENCE INFORMATION ===== */}
      <section className="home-section">
        <div className="content">
          <h2>Conference Information</h2>

          <ul className="info-list">
            <li>
              <div>
                <strong>Location</strong>
                Singapore
              </div>
            </li>

            <li>
              <div>
                <strong>Dates</strong>
                10–11 December 2026
              </div>
            </li>

            <li>
              <div>
                <strong>Email</strong>
                TBC
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
