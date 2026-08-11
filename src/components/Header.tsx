"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled || open || !isHome ? "site-header--solid" : ""}`}>
        <button className="menu-toggle" type="button" onClick={() => setOpen(true)} aria-label="Mở menu" aria-expanded={open}>
          <span />
          <span />
          <span />
        </button>
        <a className="wordmark" href="/#trang-chu" aria-label="Tài Trần HTG - Trang chủ">
          <strong>TAI TRAN</strong>
          <span>HTG</span>
        </a>
        <a className="header-cta" href="/#lien-he">Kết nối với tôi</a>
      </header>

      <div className={`menu-overlay ${open ? "menu-overlay--open" : ""}`} aria-hidden={!open}>
        <div className="menu-overlay__top">
          <span className="menu-overline">TAI TRAN HTG</span>
          <button type="button" className="menu-close" onClick={() => setOpen(false)} aria-label="Đóng menu">×</button>
        </div>
        <nav aria-label="Điều hướng chính" className="menu-overlay__nav">
          {siteConfig.menu.map(([label, href], index) => (
            <a key={href} href={isHome ? href : `/${href}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="menu-overlay__footer">
          {siteConfig.assistants.map((a) => (
            <a key={a.zalo} href={a.zalo} target="_blank" rel="noreferrer">{a.name} ↗</a>
          ))}
        </div>
      </div>
    </>
  );
}
