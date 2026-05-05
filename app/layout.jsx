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
            <nav
              style={{
                display: "flex",
                gap: "36px",
                fontSize: "14px",
                fontWeight: "700",
                letterSpacing: "0.6px",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              <a href="#" style={{ color: "white", textDecoration: "none" }}>
                ABOUT SAAC ▼
              </a>

              <a href="/speakers" style={{ color: "white", textDecoration: "none" }}>
                Speakers
              </a>

              <a href="#" style={{ color: "white", textDecoration: "none" }}>
                PROGRAMME DETAILS ▼
              </a>

              <a
                href="https://www.eventbrite.com"
                style={{ color: "white", textDecoration: "none" }}
              >
                Registration
              </a>

              <a href="#" style={{ color: "white", textDecoration: "none" }}>
                Call for Abstracts
              </a>
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
