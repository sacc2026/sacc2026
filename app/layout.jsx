import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ===== HEADER ===== */}
        <header className="topbar">
          <div className="topbar-container">

            {/* Logo */}
            <a href="/" className="logo-link">
              <img
                src="/header-logo.png"
                alt="SAAC 2026 Logo"
                className="header-logo"
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
                <a
                  href="https://www.eventbrite.com"
                  target="_blank"
                  rel="noreferrer"
                >
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

        {/* ===== MAIN CONTENT ===== */}
        <main className="page-container">
          {children}
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          © 2026 Southeast Asia Catalysis Conference
        </footer>
      </body>
    </html>
  );
}
``
