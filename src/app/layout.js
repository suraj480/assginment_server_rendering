import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {" "}
      <body>
        {" "}
        <Navbar /> <main className="container mt-4"> {children} </main>{" "}
      </body>
       
    </html>
  );
}
