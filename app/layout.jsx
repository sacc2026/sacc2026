import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header
          style={{
            background: "#0b1f4a",
            padding: "20px",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Site title */}
          <div style={{ fontWeight: "bold" }}>SAAC 2026</div>

          {/* Navigation (Step 2: ONE link only) */}
          <nav>
            <a
              href="/call-for-abstracts"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Call for Abstracts
            </a>
          </nav>
        </header>

        {/* Page content */}
        <main style={{ maxWidth: "1100px", margin: "40px auto" }}>
          {children}
        </main>

        {/* Footer */}
        <footer
          style={{
            textAlign: "center",
            padding: "20px",
            marginTop: "40px",
          }}
        >
          © 2026 Southeast Asia Catalysis Conference
        </footer>
      </body>
    </html>
  );
}
