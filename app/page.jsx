export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="home-hero">
        <h1>Southeast Asia Catalysis Conference 2026</h1>
        <p className="hero-subtitle">
          Southeast Asia Catalysis Conference
        </p>
        <p className="hero-info">
          Singapore · 10 – 11 December 2026
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
                <td>10 – 11 December 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== CONFERENCE INFORMATION ===== */}
      <section className="home-section">
        <div className="content">

          {/* Heading spanning cards + map */}
          <h2>Conference Information</h2>

          {/* Two-column layout */}
          <div className="conference-info">

            {/* Left: Information cards */}
            <div className="conference-details">
              <ul className="info-list">
                <li>
                  <div>
                    <strong>
                      National University of Singapore, University Town (UTown)
                    </strong>
                    <br />
                    2 College Ave W, Singapore 138607
                  </div>
                </li>

                <li>
                  <div>
                    <strong>Dates</strong>
                    <br />
                    10 – 11 December 2026
                  </div>
                </li>

                <li>
                  <div>
                    <strong>Contact Information</strong>
                    <br />
                    TBC
                  </div>
                </li>
              </ul>
            </div>

            {/* Right: Google Map */}
            <div className="conference-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1185.8720313082829!2d103.77232306057886!3d1.3058217211365872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1af575f7ff17%3A0x1056d4b4bd4641c8!2sUniversity%20Town%20(UTown)!5e0!3m2!1sen!2ssg!4v1778055592973!5m2!1sen!2ssg"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=University+Town+NUS+Singapore"
                target="_blank"
                rel="noreferrer"
                className="map-cta"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
