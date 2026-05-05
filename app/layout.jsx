import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ===== TOP HEADER ===== */}
        <header className="topbar">
          <div className="topbar-container">

            {/* LOGO PLACEHOLDER (IMAGE CAN BE ADDED LATER) */}
            <div className="logo-placeholder">
              {/* Intentionally empty */}
            </div>

            {/* NAVIGATION (SICC-style) */}
            <nav className="nav">

              {/* ABOUT dropdown */}
              <div className="nav-item dropdown">
                <span>ABOUT SAAC ▾</span>
                <div className="dropdown-menu">
                  About the Conference
                  Organising Committee
                </div>
              </div>

              {/* Speakers */}
              Speakers

              {/* Programme dropdown */}
              <div className="nav-item dropdown">
                <span>PROGRAMME DETAILS ▾</span>
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

        {/* PAGE CONTENT */}
        <main className="page-container">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="footer">
          © 2026 Southeast Asia Catalysis Conference
        </footer>
      </body>
    </html>
  );
}
