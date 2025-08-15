"use client";

import { useEffect, useRef } from "react";
import { responsiveClasses } from "@/shared";
import Image from "next/image";
import Logo from "../../public/logo.png";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLUListElement | null>(null);
  const btnRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (navRef.current) navRef.current.style.opacity = "1";

    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power3.out",
      });

      if (linksRef.current) {
        gsap.from(linksRef.current.children, {
          opacity: 0,
          y: -20,
          stagger: 0.08,
          duration: 0.6,
          delay: 0.28,
          ease: "power2.out",
        });
      }

      gsap.from(btnRef.current, {
        opacity: 0,
        duration: 0.6,
        delay: 0.6,
        ease: "power1.out",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const menuItems = [
    { id: "why", label: "چرا همسفر؟" },
    { id: "steps", label: "مراحل استفاده" },
    { id: "drivers", label: "رانندگان" },
    { id: "security", label: "امنیت" },
    { id: "faq", label: "سوالات متداول" },
    { id: "contact", label: "تماس باما" },
  ];

  return (
    <header
      dir="rtl"
      className="fixed top-0 left-0 w-full z-50  bg-background/16 backdrop-blur-2xl shadow-lg border-b border-background/20  transition-all duration-300"
    >
      <div
        ref={navRef}
        style={{ opacity: 0 }}
        className={`${responsiveClasses}`}
      >
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            ref={logoRef}
            className="flex flex-col items-start gap-1 select-none group"
          >
            <div className="flex items-center gap-4">
              <Image
                src={Logo}
                width={50}
                alt="Hamsafar Logo"
                className="drop-shadow-lg"
              />
              <span className="relative text-primary font-extrabold text-lg tracking-tight cursor-pointer">
                Hamsafar
                <span className="absolute -bottom-1 right-0 w-0 h-[3px] bg-gradient-to-l from-primary to-secondary rounded-full transition-all duration-300 group-hover:w-full"></span>
              </span>
            </div>
          </div>
          <nav>
            <ul
              ref={linksRef}
              className="flex gap-6 text-accent font-medium text-md"
            >
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="relative cursor-pointer hover:text-primary transition-colors duration-300 border-gray-300 border-r-2 py-1 pr-4 first:border-0 group"
                  style={{ paddingRight: "1rem" }} 
                >
                  {item.label}
                  <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-gradient-to-l from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </nav>
          <div
            ref={btnRef}
            className="flex transition-colors hover:bg-secondary items-center gap-2 cursor-pointer bg-primary text-tertiary-accent py-2 px-5 rounded-xl font-semibold shadow-md"
          >
            ورود / ثبت نام
          </div>
        </div>
      </div>

 
    </header>
  );
}
