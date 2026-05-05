import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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

              <div className="dropdown">
                <a href="#">
                  ABOUT SAAC <span className="arrow">▼</span>
                </a>
                <div className="dropdown-menu">
                  <a href="#">About the Conference</a>
                  <a href="#">Organising Committee</a>
                </div>
              </div>

              <a href="/speakers">Speakers</a>

              <div className="dropdown">
                <a href="#">
                  PROGRAMME DETAILS <span className="arrow">▼</span>
                </a>
                <div className="dropdown-menu">
                  <a href="/program">Technical Programme</a>
                  <a href="/program">Schedule</a>
                </div>
              </div>

              <a href="https://www.eventbrite.com" target="_blank">
                Registration
              </a>

              <a href="#">Call for Abstracts</a>

            </nav>
          </div>
        </header>

        <main className="page-container">{children}</main>

        <footer className="footer">
          © 2026 Southeast Asia Catalysis Conference
        </footer>
      </body>
    </html>
  );
}
