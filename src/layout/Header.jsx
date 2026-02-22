import React, { useEffect, useRef, useState } from "react";
import burger from "../assets/burger-bar.png";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home",       href: "#",           num: "01" },
  { label: "Experience", href: "#experience", num: "02" },
  { label: "Projects",   href: "#projects",   num: "03" },
  { label: "About",      href: "#about",      num: "04" },
  { label: "Contact",    href: "#contact",    num: "05" },
];

const Header = () => {
  const [show, setShow]   = useState(true);
  const [modal, setModal] = useState(false);
  const lastScrollY       = useRef(0);

  // Hide header + close modal on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY.current && current > 60) {
        setShow(false);
        setModal(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close modal on outside click
  useEffect(() => {
    if (!modal) return;
    const handler = (e) => {
      if (!e.target.closest("#nav-panel") && !e.target.closest("#burger-btn")) {
        setModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [modal]);

  return (
    <>
      {/* ─── Navbar ─── */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-[9999]
          h-16 flex items-center justify-between px-6 md:px-10
          bg-primary backdrop-blur-md
          border-b border-white/[0.07]
          
          transition-transform duration-300 ease-in-out
          ${show ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Logo */}
        <a href="#">
          <img src={logo} alt="logo" className="h-20 w-20" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                relative text-sm font-bold tracking-wide
                text-black hover:text-black/70
                transition-colors duration-200
                after:absolute after:-bottom-0.5 after:left-0
                after:h-[1.5px] after:w-full after:bg-tertiary
                after:scale-x-0 after:origin-left
                after:transition-transform after:duration-300
                hover:after:scale-x-100
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Hamburger — mobile only */}
        <button
          id="burger-btn"
          onClick={() => setModal(!modal)}
          aria-label="Toggle menu"
          className="
            lg:hidden flex items-center justify-center
            w-9 h-9 rounded-lg cursor-pointer
            hover:bg-white/10 transition-colors duration-150
          "
        >
          <img src={burger} alt="menu" className="w-5 h-5" />
        </button>
      </header>

      {/* ─── Backdrop ─── */}
      <div
        onClick={() => setModal(false)}
        className={`
          lg:hidden fixed inset-0 top-16 z-[9997]
          bg-black/60 backdrop-blur-sm
          transition-opacity duration-300
          ${modal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* ─── Mobile slide-down panel ─── */}
      <div
        id="nav-panel"
        className={`
          lg:hidden fixed top-16 left-0 right-0 z-[9998]
          bg-neutral-900 border-b border-white/[0.07]
          transition-all duration-300 ease-in-out
          ${modal
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
          }
        `}
      >
        {navItems.map((item, i) => (
          <React.Fragment key={item.label}>
            <a
              href={item.href}
              onClick={() => setModal(false)}
              className="group relative flex items-center gap-4 px-7 py-4 hover:bg-white/[0.04] transition-colors duration-150"
            >
      

              {/* Number */}
              <span className="text-[10px] font-medium tracking-[1.5px] w-5 text-white/20 group-hover:text-tertiary transition-colors duration-200">
                {item.num}
              </span>

              {/* Label */}
              <span className="text-xl font-bold tracking-tight text-white/80 group-hover:text-tertiary transition-colors duration-200">
                {item.label}
              </span>

              {/* Arrow */}
              <span className="ml-auto text-white/20 group-hover:text-tertiary group-hover:translate-x-1 transition-all duration-200">
                →
              </span>
            </a>

            {i < navItems.length - 1 && (
              <div className="h-px mx-7 bg-white/[0.05]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Header;