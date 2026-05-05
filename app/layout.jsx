import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "#003366", color: "white", padding: "15px" }}>
          <h1>SAAC 2026</h1>
          <nav>
            Home | Speakers | Program
          </nav>
        </header>

        <main style={{ padding: "40px" }}>
          {children}
        </main>

        <footer style={{ background: "#003366", color: "white", padding: "20px", textAlign: "center" }}>
          © 2026 Southeast Asia Catalysis Conference
        </footer>
      </body>
    </html>
  );
}
