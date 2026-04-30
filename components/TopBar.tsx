"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const workActive = pathname === "/" || pathname.startsWith("/work");
  const aboutActive = pathname === "/about";
  const resumeActive = pathname === "/resume";

  return (
    <div className="topbar">
      <div className="topbar-inner">
        {isHome ? (
          <div className="brand-block">
            <Link className="brand" href="/">
              razacontent<span className="dot">.</span>
            </Link>
            <span className="open-chip">
              <span className="live" />
              Open · senior IC + lead
            </span>
          </div>
        ) : (
          <Link className="brand" href="/">
            razacontent<span className="dot">.</span>
          </Link>
        )}
        <nav className="nav">
          <Link className={workActive ? "active" : ""} href="/">
            Work
          </Link>
          <Link className={aboutActive ? "active" : ""} href="/about">
            About
          </Link>
          <Link className={resumeActive ? "active" : ""} href="/resume">
            Resume
          </Link>
          <a href="mailto:mohammed@razacontent.com">Contact</a>
        </nav>
      </div>
    </div>
  );
}
