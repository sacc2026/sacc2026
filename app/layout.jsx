import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{
          background: "#003366",
          color: "white",
          padding: "16px"
        }}>
          <h1>SAAC 2026</h1>

          <nav style={{ marginTop: "8px" }}>
            <a href="/" style={{ color: "white", marginRight: "15px" }}>
              Home
            </a>

            <a href="/speakers" style={{ color: "white", marginRight: "15px" }}>
              Speakers
            </a>

            <a href="/program" style={{ color: "white" }}>
              Program
            </a>
          </nav>
        </header>

        <main style={{ padding: "40px" }}>
          {children}
        </main>

        <footer style={{
          background: "#003366",
          color: "white",
          padding: "20px",
          textAlign: "center"
        }}>
          © 2026 Southeast Asia Catalysis Conference
        </footer>
      </body>
    </html>
  );
}
``
