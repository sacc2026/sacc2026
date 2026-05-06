import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "20px", background: "#0b1f4a", color: "white" }}>
          <div>SAAC 2026</div>
        </header>

        <main>{children}</main>

        <footer style={{ padding: "20px", textAlign: "center" }}>
          © 2026 Southeast Asia Catalysis Conference
        </footer>
      </body>
    </html>
  );
}
