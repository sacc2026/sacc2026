import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <div className="topbar-container">

             <a href="/">
              <img
                src="/header-logo.png"
                alt="SAAC 2026 Logo"
                className="header-logo"
              />
            </a

            {/* Navigation */}
            <nav className="nav">
              <div className="dropdown">
                <a href="#">
                  ABOUT SAAC <span className="arrow">▼</span>
                </a>
                <div className="dropdown-menu">
                  About the Conference
                  Organising Committee
                </div>
              </div>

              Speakers

              <div className="dropdown">
                <a href="#">
                  PROGRAMME DETAILS <span className="arrow">▼</span>
                </a>
                <div className="dropdown-menu">
                  Technical Programme
                  Schedule
                </div>
              </div>

              Registration

              Call for Abstracts
            </nav>

          </div>
        </header>

        <main className="page-container">
          {children}
        </main>

        <footer className="footer">
          © 2026 Southeast Asia Catalysis Conference
        </footer>
      </body>
    </html>
  );
}
``
