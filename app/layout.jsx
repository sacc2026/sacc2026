import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "#0b1f4a", padding: "20px 36px" }}>
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <a href="/" style={{ display: "block" }}>
              <img
                src="/header-logo.png"
                alt="SAAC 2026 Logo"
                style={{ height: "52px" }}
              />
            </a>

           {/* Navigation */}
<nav className="nav">
  {/* ABOUT dropdown */}
  <div className="nav-item dropdown">
    <a href="#">
      ABOUT SAAC <span className="arrow">▼</span>
    </a>
    <div className="dropdown-menu">
      <a href="#">About the Conference</a>
      <a href="#">Organising Committee</a>
    </div>
  </div>

  {/* Speakers */}
  <div className="nav-item">
    <a href="/speakers">SPEAKERS</a>
  </div>

  {/* PROGRAMME dropdown */}
  <div className="nav-item dropdown">
    <a href="#">
      PROGRAMME DETAILS <span className="arrow">▼</span>
    </a>
    <div className="dropdown-menu">
      <a href="/program">Technical Programme</a>
      <a href="/program">Schedule</a>
    </div>
  </div>

  {/* Registration */}
  <div className="nav-item">
    <a href="https://www.eventbrite.com" target="_blank" rel="noreferrer">
      REGISTRATION
    </a>
  </div>

  {/* Call for Abstracts */}
  <div className="nav-item">
    <a href="#">CALL FOR ABSTRACTS</a>
  </div>
</nav>

          </div>
        </header>

        <main style={{ maxWidth: "1100px", margin: "40px auto", background: "white", padding: "40px" }}>
          {children}
        </main>

        <footer
          style={{
            background: "#0b1f4a",
            color: "white",
            textAlign: "center",
            padding: "18px",
          }}
        >
          © 2026 Southeast Asia Catalysis Conference
        </footer>
      </body>
    </html>
  );
}
