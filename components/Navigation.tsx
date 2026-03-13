"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname.startsWith("/work");
    return pathname === href;
  };

  return (
    <header className="flex justify-center pt-7 pb-2">
      <nav className="flex gap-6 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="pb-0.5 text-ink text-sm font-medium no-underline"
            style={{
              borderBottom: isActive(item.href)
                ? "1.5px solid #1a1a1a"
                : "1.5px solid transparent",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
