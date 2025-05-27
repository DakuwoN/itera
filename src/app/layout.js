import "./globals.css";
import Navbar from "./components/Navbar/page";

export const metadata = {
  title: 'Itera',
  description: 'Learn from your decisions, data, Artificial Intelligence, and winning lineups.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body>
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
