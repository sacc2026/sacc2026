import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ===== TOP BAR ===== */}
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

              {/* ABOUT dropdown */}
              <div className="nav-item dropdown">
                <span>
                  ABOUT SAAC <span className="arrow">▼</span>
                </span>
                <div className="dropdown-menu">
                  About the Conference
                  Organising Committee
                </div>
              </div>

              {/* Speakers */}
              Speakers

              {/* Programme dropdown */}
              <div className="nav-item dropdown">
                <span>
                  PROGRAMME DETAILS <span className="arrow">▼</span>
                </span>
                <div className="dropdown-menu">
                  Technical Programme
                  Schedule
                </div>
              </div>

              {/* Registration */}
              Registration

              {/* Call for Abstracts */}
              Call for Abstracts

            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="page-container">{children}</main>

        {/* Footer */}
        <footer className="footer">
          © 2026 Southeast Asia Catalysis Conference
        </footer>
      </body>
    </html>
  );
}
