// app/components/Footer.js

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
        {/* SVG icon */}
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path
            d="M22.672 15.226l-2.432.811... (complete path data)"
          ></path>
        </svg>
        <p>
          Playquip Ltd.
          <br />
          Registered Company Number: 2826786 - VAT Registration Number: 623166067
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link href="/services" className="link link-hover">
          Design
        </Link>
        <Link href="/services" className="link link-hover">
          Manufacturing
        </Link>
        <Link href="/services" className="link link-hover">
          Inspection
        </Link>
        <Link href="/services" className="link link-hover">
          Consultation
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href="/about" className="link link-hover">
          About Us
        </Link>
        <Link href="/contact" className="link link-hover">
          Contact
        </Link>
        <Link href="/news" className="link link-hover">
          News
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href="/terms" className="link link-hover">
          Terms of Use
        </Link>
        <Link href="/privacy" className="link link-hover">
          Privacy Policy
        </Link>
        <Link href="/cookies" className="link link-hover">
          Cookie Policy
        </Link>
      </nav>
    </footer>
  );
}
