"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CustomButton } from "@/components/ui/custom-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { aiProducts } from "./common/Products";
import AiProductsMegaMenu from "./common/AiProductsMegaMenu";
import ServicesMegaMenu from "./common/ServicesMegaMenu";
import ResourcesMegaMenu from "./common/ResourcesMegaMenu";



if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}



type NavLink = {
  href?: string;
  label: string;
  hasAiDropdown?: boolean;
  hasResourcesDropdown?: boolean;
  children?: { href: string; label: string }[];
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/ai-products/chatbot", label: "AI Products", hasAiDropdown: true },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/ai-services", label: "AI Services" },
      { href: "/services/ai-solutions", label: "AI Solutions" },
      { href: "/services/iot-development", label: "IoT Development" },
      { href: "/services/software-development", label: "Software Development" },
      { href: "/services/software-solutions", label: "Software Solutions" },
    ],
  },
  { href: "/industries", label: "Industries" },
  { href: "/case-study", label: "Resources", hasResourcesDropdown: true },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "About Us" },
      { href: "/teams", label: "Our Team" },
    ],
  },
];

export default function Header() {
  const [mobileMenuState, setMobileMenuState] = useState({ open: false, route: "" });
  const [dropdownState, setDropdownState] = useState({ open: false, route: "" });
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [servicesMenuMounted, setServicesMenuMounted] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [aiMenuOpen, setAiMenuOpen] = useState(false);
  const [aiMenuMounted, setAiMenuMounted] = useState(false);
  const [aiMenuTop, setAiMenuTop] = useState(0);
  const [mobileAiOpen, setMobileAiOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const [resourcesMenuMounted, setResourcesMenuMounted] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [aboutMenuMounted, setAboutMenuMounted] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const aiHoverCount = useRef(0);
  const aiMenuCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesHoverCount = useRef(0);
  const servicesMenuCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resourcesHoverCount = useRef(0);
  const resourcesMenuCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const aboutHoverCount = useRef(0);
  const aboutMenuCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const mobileMenuOpen = mobileMenuState.open && mobileMenuState.route === pathname;
  const dropdownOpen = dropdownState.open && dropdownState.route === pathname;

  const isHomePage = pathname === "/";
  const isAiProductActive = pathname.startsWith("/ai-products");
  const isResourcesActive = pathname.startsWith("/blog");

  const navHoverClass = isHomePage ? "hover:bg-white/10" : "hover:bg-slate-100";
  const navInactiveClass =
    isScrolled || !isHomePage
      ? "text-slate-600 hover:text-slate-900"
      : "text-white/85 hover:text-white";
  const navActiveClass = isScrolled
    ? "text-black font-bold"
    : isHomePage
      ? "text-white font-bold"
      : "text-black font-bold";
  const navTextClass = isScrolled || !isHomePage ? "text-black" : "text-white";

  useEffect(() => {
    const threshold = isHomePage ? 120 : 40;
    const handleScroll = () => setIsScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;
      if (headerRef.current && !headerRef.current.contains(target)) {
        setServicesMenuOpen(false);
        setAiMenuOpen(false);
        setResourcesMenuOpen(false);
        setAboutMenuOpen(false);
        setDropdownState({ open: false, route: "" });
        setMobileMenuState({ open: false, route: "" });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  useGSAP(
    () => {
      const showAnim = gsap
        .from(headerRef.current, { yPercent: -100, paused: true, duration: 0.3, ease: "power2.out" })
        .progress(1);
      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          if (self.direction === -1) showAnim.play();
          else showAnim.reverse();
        },
      });
    },
    { scope: headerRef },
  );

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const handleAiEnter = () => {
    if (aiMenuCloseTimeout.current) {
      clearTimeout(aiMenuCloseTimeout.current);
      aiMenuCloseTimeout.current = null;
    }
    aiHoverCount.current += 1;
    setAiMenuTop(headerRef.current?.getBoundingClientRect().bottom ?? 0);
    setAiMenuMounted(true);
    setAiMenuOpen(true);
  };
  const handleAiLeave = () => {
    aiHoverCount.current -= 1;
    if (aiMenuCloseTimeout.current) {
      clearTimeout(aiMenuCloseTimeout.current);
    }
    aiMenuCloseTimeout.current = setTimeout(() => {
      if (aiHoverCount.current <= 0) {
        aiHoverCount.current = 0;
        setAiMenuOpen(false);
        window.setTimeout(() => setAiMenuMounted(false), 220);
      }
    }, 140);
  };

  const handleServicesEnter = () => {
    if (servicesMenuCloseTimeout.current) {
      clearTimeout(servicesMenuCloseTimeout.current);
      servicesMenuCloseTimeout.current = null;
    }
    servicesHoverCount.current += 1;
    setAiMenuTop(headerRef.current?.getBoundingClientRect().bottom ?? 0);
    setServicesMenuMounted(true);
    setServicesMenuOpen(true);
  };

  const handleServicesLeave = () => {
    servicesHoverCount.current -= 1;
    if (servicesMenuCloseTimeout.current) {
      clearTimeout(servicesMenuCloseTimeout.current);
    }
    servicesMenuCloseTimeout.current = setTimeout(() => {
      if (servicesHoverCount.current <= 0) {
        servicesHoverCount.current = 0;
        setServicesMenuOpen(false);
        window.setTimeout(() => setServicesMenuMounted(false), 220);
      }
    }, 140);
  };

  const handleResourcesEnter = () => {
    if (resourcesMenuCloseTimeout.current) {
      clearTimeout(resourcesMenuCloseTimeout.current);
      resourcesMenuCloseTimeout.current = null;
    }
    resourcesHoverCount.current += 1;
    setAiMenuTop(headerRef.current?.getBoundingClientRect().bottom ?? 0);
    setResourcesMenuMounted(true);
    setResourcesMenuOpen(true);
  };

  const handleResourcesLeave = () => {
    resourcesHoverCount.current -= 1;
    if (resourcesMenuCloseTimeout.current) {
      clearTimeout(resourcesMenuCloseTimeout.current);
    }
    resourcesMenuCloseTimeout.current = setTimeout(() => {
      if (resourcesHoverCount.current <= 0) {
        resourcesHoverCount.current = 0;
        setResourcesMenuOpen(false);
        window.setTimeout(() => setResourcesMenuMounted(false), 220);
      }
    }, 140);
  };

  const handleAboutEnter = () => {
    if (aboutMenuCloseTimeout.current) {
      clearTimeout(aboutMenuCloseTimeout.current);
      aboutMenuCloseTimeout.current = null;
    }
    aboutHoverCount.current += 1;
    setAboutMenuMounted(true);
    setAboutMenuOpen(true);
  };

  const handleAboutLeave = () => {
    aboutHoverCount.current -= 1;
    if (aboutMenuCloseTimeout.current) {
      clearTimeout(aboutMenuCloseTimeout.current);
    }
    aboutMenuCloseTimeout.current = setTimeout(() => {
      if (aboutHoverCount.current <= 0) {
        aboutHoverCount.current = 0;
        setAboutMenuOpen(false);
        window.setTimeout(() => setAboutMenuMounted(false), 220);
      }
    }, 140);
  };

  useEffect(
    () => () => {
      if (aiMenuCloseTimeout.current) {
        clearTimeout(aiMenuCloseTimeout.current);
      }
      if (servicesMenuCloseTimeout.current) {
        clearTimeout(servicesMenuCloseTimeout.current);
      }
      if (resourcesMenuCloseTimeout.current) {
        clearTimeout(resourcesMenuCloseTimeout.current);
      }
      if (aboutMenuCloseTimeout.current) {
        clearTimeout(aboutMenuCloseTimeout.current);
      }
    },
    [],
  );

  const headerPositionClass = isHomePage
    ? "absolute top-0 left-0 right-0"
    : "fixed top-0 left-0 right-0";

  return (
    <header
      ref={headerRef}
      className={`${headerPositionClass} z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm shadow-black/5" : "bg-transparent"
      }`}
    >
      <div className={`container-premium flex items-center justify-between ${isHomePage ? "pt-6" : "py-4"}`}>
        {/* Logo */}
{isHomePage ? (
  <div className="flex items-center gap-2.5 shrink-0">
    <Image
      src="/Logo-1.png"
      alt="Network Handlers Logo"
      width={220}
      height={55}
      className="object-contain"
      priority
    />
  </div>
) : (
  <Link href="/" className="flex items-center gap-2.5 shrink-0">
    <Image
      src="/Logo-2.png"
      alt="Network Handlers Logo"
      width={220}
      height={55}
      className="object-contain"
      priority
    />
  </Link>
)}


        {/* Desktop Nav */}
        <nav className={`hidden lg:flex items-center gap-0.5 ${navTextClass}`}>
          {navLinks.map((link) => {
            if (link.hasAiDropdown) {
              return (
                <div
                  key="ai-products"
                  className="relative"
                  onMouseEnter={handleAiEnter}
                  onMouseLeave={handleAiLeave}
                >
                  <button
                    className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-200 ${
                      isAiProductActive ? navActiveClass : navInactiveClass
                    } ${navHoverClass}`}
                  >
                    {link.label}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${aiMenuOpen ? "rotate-180" : ""}`} />
                  </button>

                  {aiMenuMounted && (
                    <div
                      className={`fixed left-0 right-0 pt-1 transition-all duration-300 ease-out origin-top ${
                        aiMenuOpen ? "pointer-events-auto opacity-100 translate-y-0 scale-100" : "pointer-events-none opacity-0 -translate-y-3 scale-[0.985]"
                      }`}
                      style={{ top: aiMenuTop }}
                      onMouseEnter={handleAiEnter}
                      onMouseLeave={handleAiLeave}
                    >
                      <div className="w-full">
                        <AiProductsMegaMenu
                          products={aiProducts}
                          onNavigate={() => setAiMenuOpen(false)}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (link.hasResourcesDropdown) {
              return (
                <div
                  key="resources"
                  className="relative"
                  onMouseEnter={handleResourcesEnter}
                  onMouseLeave={handleResourcesLeave}
                >
                  <button
                    className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-200 ${
                      isResourcesActive ? navActiveClass : navInactiveClass
                    } ${navHoverClass}`}
                  >
                    {link.label}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${resourcesMenuOpen ? "rotate-180" : ""}`} />
                  </button>

                  {resourcesMenuMounted && (
                    <div
                      className={`fixed left-0 right-0 pt-1 transition-all duration-300 ease-out origin-top ${
                        resourcesMenuOpen ? "pointer-events-auto opacity-100 translate-y-0 scale-100" : "pointer-events-none opacity-0 -translate-y-3 scale-[0.985]"
                      }`}
                      style={{ top: aiMenuTop }}
                      onMouseEnter={handleResourcesEnter}
                      onMouseLeave={handleResourcesLeave}
                    >
                      <div className="w-full">
                        <ResourcesMegaMenu
                          onNavigate={() => setResourcesMenuOpen(false)}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (link.children) {
              const isServices = link.label === "Services";
              const isAbout = link.label === "About";
              const isDropdownActive = isServices
                ? pathname.startsWith("/services")
                : isAbout
                  ? (pathname.startsWith("/about") || pathname.startsWith("/teams"))
                  : (dropdownState.open && dropdownState.route === pathname);

              if (isServices) {
                return (
                  <div
                    key="services-mega"
                    className="relative"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    <button
                      className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-200 ${
                        isDropdownActive ? navActiveClass : navInactiveClass
                      } ${navHoverClass}`}
                    >
                      {link.label}
                      <ChevronDown size={13} className={`transition-transform duration-200 ${servicesMenuOpen ? "rotate-180" : ""}`} />
                    </button>

                    {servicesMenuMounted && (
                      <div
                        className={`fixed left-0 right-0 pt-1 transition-all duration-300 ease-out origin-top ${
                          servicesMenuOpen ? "pointer-events-auto opacity-100 translate-y-0 scale-100" : "pointer-events-none opacity-0 -translate-y-3 scale-[0.985]"
                        }`}
                        style={{ top: aiMenuTop }}
                        onMouseEnter={handleServicesEnter}
                        onMouseLeave={handleServicesLeave}
                      >
                        <div className="w-full">
                          <ServicesMegaMenu
                            onNavigate={() => setServicesMenuOpen(false)}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (isAbout) {
                return (
                  <div
                    key="about-dropdown"
                    className="relative"
                    onMouseEnter={handleAboutEnter}
                    onMouseLeave={handleAboutLeave}
                  >
                    <button
                      className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-200 ${
                        isDropdownActive ? navActiveClass : navInactiveClass
                      } ${navHoverClass}`}
                    >
                      {link.label}
                      <ChevronDown size={13} className={`transition-transform duration-200 ${aboutMenuOpen ? "rotate-180" : ""}`} />
                    </button>
                    {aboutMenuMounted && (
                      <div
                        className={`absolute top-full left-1/2 mt-2 w-52 -translate-x-1/2 p-2 flex flex-col gap-1 rounded-3xl border border-slate-200 bg-white/95 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] backdrop-blur-xl z-50 transition-all duration-300 ease-out origin-top ${
                          aboutMenuOpen ? "pointer-events-auto opacity-100 translate-y-0 scale-100" : "pointer-events-none opacity-0 -translate-y-3 scale-[0.985]"
                        }`}
                        onMouseEnter={handleAboutEnter}
                        onMouseLeave={handleAboutLeave}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setAboutMenuOpen(false)}
                            className="block px-4 py-3 text-sm font-bold text-slate-700 transition-colors rounded-2xl hover:bg-slate-100/60 hover:text-cyan-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isOpen = dropdownState.open && dropdownState.route === pathname;
              return (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setDropdownState({ open: !dropdownOpen, route: pathname })}
                    className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-200 ${
                      isDropdownActive ? navActiveClass : navInactiveClass
                    } ${navHoverClass}`}
                  >
                    {link.label}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="absolute top-full left-1/2 mt-2 w-52 -translate-x-1/2 p-2 flex flex-col gap-1 rounded-3xl border border-slate-200 bg-white/95 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] backdrop-blur-xl z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setDropdownState({ open: false, route: "" })}
                          className="block px-4 py-3 text-sm font-bold text-slate-700 transition-colors rounded-2xl hover:bg-slate-100/60 hover:text-cyan-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href!}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 uppercase tracking-wide ${
                  isActive(link.href!) ? navActiveClass : navInactiveClass
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <Link href="/contact">
            <CustomButton variant="cyan" uppercase showArrow className="px-8 shadow-lg shadow-cyan-500/20">
              Get in Touch
            </CustomButton>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-full transition-colors ${
            isScrolled ? "text-slate-800" : isHomePage ? "text-white" : "text-[#131313]"
          }`}
          onClick={() => setMobileMenuState({ open: !mobileMenuOpen, route: pathname })}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-slate-100 shadow-xl">
          <nav className="flex flex-col gap-1 px-6 py-5">
            {navLinks.map((link) => {
              if (link.hasAiDropdown) {
                return (
                  <div key="ai-products-mobile">
                    <button
                      onClick={() => setMobileAiOpen(!mobileAiOpen)}
                      className="w-full flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 uppercase tracking-wide"
                    >
                      AI Products
                      <ChevronDown size={14} className={`transition-transform duration-200 ${mobileAiOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileAiOpen && (
                      <div className="mt-1 ml-1 flex flex-col gap-1 ">
                        {aiProducts?.map((product) => (
                          <Link key={product.id} href={product.href} className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900">
                
                            {product.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.hasResourcesDropdown) {
                return (
                  <div key="resources-mobile">
                    <button
                      onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                      className="w-full flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 uppercase tracking-wide"
                    >
                      Resources
                      <ChevronDown size={14} className={`transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileResourcesOpen && (
                      <div className="mt-1 ml-1 flex flex-col gap-1 ">
                        <Link
                          href="/blog"
                          onClick={() => setMobileMenuState({ open: false, route: pathname })}
                          className="flex items-center gap-2 rounded-xl px-6 py-2 text-sm font-semibold text-slate-650 hover:bg-slate-50 hover:text-slate-900"
                        >
                          Blog
                        </Link>
                        <Link
                          href="/case-study"
                          onClick={() => setMobileMenuState({ open: false, route: pathname })}
                          className="flex items-center gap-2 rounded-xl px-6 py-2 text-sm font-semibold text-slate-650 hover:bg-slate-50 hover:text-slate-900"
                        >
                          Case Studies
                        </Link>
                        <Link
                          href="/press-release"
                          onClick={() => setMobileMenuState({ open: false, route: pathname })}
                          className="flex items-center gap-2 rounded-xl px-6 py-2 text-sm font-semibold text-slate-650 hover:bg-slate-50 hover:text-slate-900"
                        >
                          Press Releases
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.children) {
                const isServices = link.label === "Services";
                const isAbout = link.label === "About";
                const isOpen = isServices ? mobileServicesOpen : isAbout ? mobileAboutOpen : true;
                return (
                  <div key={link.label}>
                    <button
                      onClick={() => {
                        if (isServices) {
                          setMobileServicesOpen(!mobileServicesOpen);
                        } else if (isAbout) {
                          setMobileAboutOpen(!mobileAboutOpen);
                        }
                      }}
                      className="w-full flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 uppercase tracking-wide text-left"
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="mt-1 ml-1 flex flex-col gap-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileMenuState({ open: false, route: pathname })}
                            className="block rounded-xl px-6 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors uppercase tracking-wide ${
                    isActive(link.href!) ? "text-black font-[600]" : "text-slate-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" className="mt-3">
              <button className="w-full rounded-full bg-[#c8f135] py-3 text-xs font-black uppercase tracking-widest text-slate-900">
                Get In Touch
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}