import "./footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} CampusConnect. All Rights Reserved.</p>

      <div className="footer-links">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
}
