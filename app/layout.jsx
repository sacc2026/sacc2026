import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <div className="container">
            <h1>SAAC 2026</h1>

            <nav>
  Home</Link>
  Speakers</Link>
  Program</Link>
</nav>

          </div>
        </header>

        <main className="container">
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
