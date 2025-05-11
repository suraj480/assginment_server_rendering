"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          EduHub
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/courses" ? "active" : ""
                }`}
                href="/courses"
              >
                Courses
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/dashboard" ? "active" : ""
                }`}
                href="/dashboard"
              >
                Dashboard
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/announcements" ? "active" : ""
                }`}
                href="/announcements"
              >
                Announcements
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/featured-blog" ? "active" : ""
                }`}
                href="/featured-blog"
              >
                Featured Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
       
    </nav>
  );
}
