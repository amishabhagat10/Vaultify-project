import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotificationBell from "../components/NotificationBell";
import "./Dashboard.css";

export default function Dashboard() {
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    try {
      const name = localStorage.getItem("vaultifyCurrentUserName");
      if (name) setDisplayName(name);
    } catch {
      // ignore read errors
    }
  }, []);

  const firstName = (displayName || "").trim().split(/\s+/)[0] || "User";

  return (
    <div className="dashboard">
      {/* Background Effects */}
      <div className="dashboard-background">
        <div className="blur-effect blur-green-1"></div>
        <div className="blur-effect blur-purple-1"></div>
        <div className="blur-effect blur-dark-1"></div>
        <div className="blur-effect blur-dark-2"></div>
      </div>

      {/* Background Pattern */}
      <div className="background-pattern">
        <div className="pattern-container">
          {[
            "HSHX1+}]#+X>SK+SP",
            "NBFLGO#+X>SK+SPOZ",
            "E0SHG6WVGO#+X>S>S",
            "NC\\L25BFLGOFLGD>K",
            "AXJ{AE0SHG6NBFLGO",
            "AXJ{AE0SHG6NBFLGO",
            "AXJ{AE0SHG6NBFLGO",
            "C\\L2NBFGO#+X>S6N+",
            "VGO#+X>HG6NBGHZ9+",
            "D>KSO?AG6NBFLGO#+",
            "D>KSO?A30MSAPWVGO",
            "C\\L2NBFGO#+X>S6N+",
            "PXJ/AX0SH8TNH00GO",
            "#SKD9B2K0NX1+}ASN",
            "AXJ{AE0SHG6NBFLGO",
            "X1+DASNC\\L25BFLGO",
            "NC\\L25BFLGOFLGD>K",
            "E0SHG6WVGO#+X>S>S",
            "NBFLGO#+X>SK+SPOZ",
            "4SUSO5N1JGHZ9+D>K",
            "NBFLGO#+X>SK+SPOZ",
            "E0SHG6WVGO#+X>S>S",
            "PXJ{AX0SHG6NH0LGO",
            "AXJ{AE0SHG6NBFLGO",
            "E0SHG6WVGO#+X>S>S",
            "AXJ{AE0SHG6NBFLGO",
            "#SKD9B2K0NX1+}ASN",
            "C\\L2NBFGO#+X>S6N+",
          ].map((text, index) => (
            <div key={index} className="pattern-text">
              {text.split("").map((char, charIndex) => {
                const isHighlight = [
                  "N",
                  "A",
                  "+",
                  "F",
                  "G",
                  "C",
                  "H",
                  "9",
                  "?",
                  "L",
                  "0",
                  "X",
                  "O",
                  "#",
                  "U",
                ].includes(char);
                return (
                  <span
                    key={charIndex}
                    className={isHighlight ? "highlight-char" : "normal-char"}
                  >
                    {char}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Header */}
      <header className="dashboard-header">
        <nav className="dashboard-nav">
          <div className="nav-container">
            <Link to="/documents" className="nav-button">
              <svg
                className="nav-icon"
                width="24"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M8 6.75H21.5M8 12H21.5M8 17.25H21.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.25 7.5C4.66421 7.5 5 7.16421 5 6.75C5 6.33579 4.66421 6 4.25 6C3.83579 6 3.5 6.33579 3.5 6.75C3.5 7.16421 3.83579 7.5 4.25 7.5Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.25 12.75C4.66421 12.75 5 12.4142 5 12C5 11.5858 4.66421 11.25 4.25 11.25C3.83579 11.25 3.5 11.5858 3.5 12C3.5 12.4142 3.83579 12.75 4.25 12.75Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.25 18C4.66421 18 5 17.6642 5 17.25C5 16.8358 4.66421 16.5 4.25 16.5C3.83579 16.5 3.5 16.8358 3.5 17.25C3.5 17.6642 3.83579 18 4.25 18Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>My Documents</span>
            </Link>
            <Link to="/add-document" className="nav-button">
              <svg
                className="nav-icon"
                width="24"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5 3.75C12.6989 3.75 12.8897 3.82902 13.0303 3.96967C13.171 4.11032 13.25 4.30109 13.25 4.5V11.25H20C20.1989 11.25 20.3897 11.329 20.5303 11.4697C20.671 11.6103 20.75 11.8011 20.75 12C20.75 12.1989 20.671 12.3897 20.5303 12.5303C20.3897 12.671 20.1989 12.75 20 12.75H13.25V19.5C13.25 19.6989 13.171 19.8897 13.0303 20.0303C12.8897 20.171 12.6989 20.25 12.5 20.25C12.3011 20.25 12.1103 20.171 11.9697 20.0303C11.829 19.8897 11.75 19.6989 11.75 19.5V12.75H5C4.80109 12.75 4.61032 12.671 4.46967 12.5303C4.32902 12.3897 4.25 12.1989 4.25 12C4.25 11.8011 4.32902 11.6103 4.46967 11.4697C4.61032 11.329 4.80109 11.25 5 11.25H11.75V4.5C11.75 4.30109 11.829 4.11032 11.9697 3.96967C12.1103 3.82902 12.3011 3.75 12.5 3.75Z"
                  fill="white"
                />
              </svg>
              <span>Add Document</span>
            </Link>
            <Link to="/requests" className="nav-button">
              <svg
                className="nav-icon"
                width="24"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M16.25 6C16.25 6.99456 15.8549 7.94839 15.1516 8.65165C14.4484 9.35491 13.4945 9.75 12.5 9.75C11.5054 9.75 10.5516 9.35491 9.84833 8.65165C9.14506 7.94839 8.74998 6.99456 8.74998 6C8.74998 5.00544 9.14506 4.05161 9.84833 3.34835C10.5516 2.64509 11.5054 2.25 12.5 2.25C13.4945 2.25 14.4484 2.64509 15.1516 3.34835C15.8549 4.05161 16.25 5.00544 16.25 6ZM5.00098 20.118C5.03311 18.1504 5.83731 16.2742 7.24015 14.894C8.64299 13.5139 10.5321 12.7405 12.5 12.7405C14.4679 12.7405 16.357 13.5139 17.7598 14.894C19.1626 16.2742 19.9668 18.1504 19.999 20.118C17.6464 21.1968 15.0881 21.7535 12.5 21.75C9.82398 21.75 7.28398 21.166 5.00098 20.118Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Requests</span>
            </Link>
          </div>
          <div className="nav-divider"></div>
          <NotificationBell />
        </nav>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <h1 className="dashboard-title">Welcome, {firstName}<br />To Your Vault</h1>

        {/* Document Cards */}
        <div className="document-cards">
          <div className="document-card">
            <div className="card-background"></div>
            <div className="card-content">
              <div className="card-visual">
                <div className="document-icon aadhar-icon">
                  <div className="document-paper">
                    <div className="fingerprint"></div>
                    <span className="document-label">AADHAR CARD</span>
                  </div>
                  <div className="floating-elements">
                    <div className="sphere sphere-1"></div>
                    <div className="sphere sphere-2"></div>
                    <div className="geometric-1"></div>
                    <div className="geometric-2"></div>
                  </div>
                </div>
              </div>
              <div className="card-info">
                <h3 className="card-title">Aadhar</h3>
                <p className="card-description">
                  It's the document which would help you on every corner.
                </p>
              </div>
            </div>
          </div>

          <div className="document-card">
            <div className="card-background"></div>
            <div className="card-content">
              <div className="card-visual">
                <div className="document-icon license-icon">
                  <div className="document-paper">
                    <div className="license-photo"></div>
                    <div className="license-lines">
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                    </div>
                    <span className="document-label">DRIVER'S LICENSE</span>
                  </div>
                  <div className="floating-elements">
                    <div className="sphere sphere-1"></div>
                    <div className="sphere sphere-2"></div>
                    <div className="ring ring-1"></div>
                    <div className="geometric-3"></div>
                  </div>
                </div>
              </div>
              <div className="card-info">
                <h3 className="card-title">Driving License</h3>
                <p className="card-description">
                  An only license that would help you to drive legally.
                </p>
              </div>
            </div>
          </div>

          <div className="document-card">
            <div className="card-background"></div>
            <div className="card-content">
              <div className="card-visual">
                <div className="document-icon add-icon">
                  <div className="document-paper">
                    <div className="plus-icon">+</div>
                  </div>
                  <div className="floating-elements">
                    <div className="sphere sphere-1"></div>
                    <div className="sphere sphere-2"></div>
                    <div className="ring ring-2"></div>
                    <div className="geometric-4"></div>
                  </div>
                </div>
              </div>
              <div className="card-info">
                <h3 className="card-title">Add documents</h3>
                <p className="card-description">
                  Add your own documents into the chain!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/about" className="footer-link">
              About
            </Link>
            <Link to="/concept" className="footer-link">
              Concept
            </Link>
            <Link to="/rent" className="footer-link">
              Rent
            </Link>
            <Link to="/mission" className="footer-link">
              Mission
            </Link>
            <Link to="/resources" className="footer-link">
              Resources
            </Link>
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
          </div>

          <div className="footer-bottom">
            <p className="copyright">© 2025 Houzie Proptech OPC PVT LTD</p>
            <div className="legal-links">
              <Link to="/legal" className="legal-link">
                Legal Notices
              </Link>
              <Link to="/privacy" className="legal-link">
                Confidentiality
              </Link>
              <Link to="/credits" className="legal-link">
                Credits
              </Link>
            </div>
          </div>

          <div className="social-links">
            <div className="social-icon"></div>
            <div className="social-icon"></div>
            <div className="social-icon"></div>
            <div className="social-icon"></div>
            <div className="social-icon"></div>
          </div>
        </div>
      </footer>

      {/* VAULTIFY Watermark */}
      <div className="vaultify-watermark">
        <span>VAULTIFY</span>
      </div>
    </div>
  );
}
