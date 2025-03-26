"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import "./LightNavbar.css";
import PrimaryButton from "../../PrimaryButton/primaryButton";
import { ChevronRight } from "lucide-react";

const LightNavbar = () => {
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuTransition, setMenuTransition] = useState(false);
  const [isExpertiseExpanded, setIsExpertiseExpanded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsExpertiseOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsExpertiseOpen(false);
    }, 300);
  };

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
      setTimeout(() => setMenuTransition(true), 50);
      document.body.style.overflow = "hidden";
    } else {
      closeMobileMenu();
    }
  };

  const closeMobileMenu = () => {
    setMenuTransition(false);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = "";
      setIsExpertiseExpanded(false); // Reset expertise dropdown
    }, 400);
  };

  const toggleExpertiseDropdown = () => {
    setIsExpertiseExpanded(!isExpertiseExpanded);
  };

  useEffect(() => {
    const handlePathChange = () => {
      if (isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    handlePathChange();
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="light-newnav-main-div">
      {/* Left Section */}
      <div className="light-newnav-main-div-left">
        <Link href="/">
          
          <Image
                        src="https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/Pumex-black-logo.svg"
                        alt="Pumex Logo"
                        width={150}
                        height={50}
                      />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div
        className={`light-mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
      >
        <div className="light-hamburger-icon">
          <span
            className={`light-line line-1 ${isMobileMenuOpen ? "active" : ""}`}
          ></span>
          <span
            className={`light-line line-2 ${isMobileMenuOpen ? "active" : ""}`}
          ></span>
          <span
            className={`light-line line-3 ${isMobileMenuOpen ? "active" : ""}`}
          ></span>
        </div>
      </div>

      {/* Right Section (Desktop) */}
      <div className="light-newnav-main-div-right">
        <Link
          href="/"
          className={`light-nav-option ${pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className={`light-nav-option ${pathname === "/about-us" ? "active" : ""}`}
        >
          About Us
        </Link>

        {/* Expertise Dropdown */}
        <div
          className="light-dropdown-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href="/"
            className={`light-nav-option light-nav-with-arrow ${
              isExpertiseOpen ? "light-active-nav-option" : ""
            }`}
          >
            Area of Expertise
          </Link>

          {isExpertiseOpen && (
            <div className="light-dropdown-menu">
              <Link
                href="/visualization"
                className={`light-dropdown-item ${
                  pathname === "/visualization" ? "active" : ""
                }`}
              >
                <div className="light-dropdown-title">Visualization</div>
                <div className="light-dropdown-description">
                  Advanced data visualization solutions
                </div>
              </Link>
              <Link
                href="/product-engineering"
                className={`light-dropdown-item ${
                  pathname === "/product-engineering" ? "active" : ""
                }`}
              >
                <div className="light-dropdown-title">Product Engineering</div>
                <div className="light-dropdown-description">
                  End-to-end product development services
                </div>
              </Link>
              <Link
                href="/cloud"
                className={`light-dropdown-item ${
                  pathname === "/cloud" ? "active" : ""
                }`}
              >
                <div className="light-dropdown-title">Cloud</div>
                <div className="light-dropdown-description">
                  Cloud infrastructure and solutions
                </div>
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/allsolutions"
          className={`light-nav-option ${
            pathname === "/allsolutions" ? "active" : ""
          }`}
        >
          Solutions
        </Link>
        <Link
          href="/contact-us"
          className={`light-nav-option ${pathname === "/contact-us" ? "active" : ""}`}
        >
          Contact
        </Link>

        {/* Careers Button */}
        <div className="light-navbar-button-sizer">
          <PrimaryButton onClick={() => router.push("/careers")}>
            Careers
          </PrimaryButton>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`light-mobile-menu ${menuTransition ? "active" : ""}`}
          ref={mobileMenuRef}
        >
          <div className="light-mobile-menu-inner">
            <div className="light-mobile-menu-header">
              <div className="light-mobile-branding">
                
                <Image
                              src="https://d2l4gl47o0xxs9.cloudfront.net/AboutUs-Assets/Pumex-black-logo.svg"
                              alt="Pumex Logo"
                              width={120}
                              height={40}
                            />
              </div>
            </div>

            <div className="light-mobile-menu-content">
              <div className="light-menu-section">
                <Link
                  href="/"
                  className={`light-mobile-nav-item ${
                    pathname === "/" ? "active" : ""
                  }`}
                  onClick={closeMobileMenu}
                >
                  <span className="light-nav-text">Home</span>
                </Link>
                <Link
                  href="/about-us"
                  className={`light-mobile-nav-item ${
                    pathname === "/about-us" ? "active" : ""
                  }`}
                  onClick={closeMobileMenu}
                >
                  <span className="light-nav-text">About Us</span>
                </Link>

                {/* Expertise with dropdown functionality */}
                <div
                  className="light-mobile-nav-item light-expertise-dropdown"
                  onClick={toggleExpertiseDropdown}
                >
                  <span className="light-nav-text">Area of Expertise</span>
                  <span className="light-nav-icon">
                    <ChevronRight
                      size={25}
                      strokeWidth={3}
                      color="white"
                      className={isExpertiseExpanded ? "rotated" : ""}
                    />
                  </span>
                </div>

                {/* Expertise dropdown items */}
                {isExpertiseExpanded && (
                  <div className="light-expertise-dropdown-content">
                    <Link
                      href="/visualization"
                      className={`light-mobile-nav-item sub-item ${
                        pathname === "/visualization" ? "active" : ""
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <div>
                        <span className="light-nav-text">Visualization</span>
                        <span className="light-nav-description">
                          Advanced data visualization solutions
                        </span>
                      </div>
                    </Link>
                    <Link
                      href="/product-engineering"
                      className={`light-mobile-nav-item sub-item ${
                        pathname === "/product-engineering" ? "active" : ""
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <div>
                        <span className="light-nav-text">Product Engineering</span>
                        <span className="light-nav-description">
                          End-to-end product development
                        </span>
                      </div>
                    </Link>
                    <Link
                      href="/cloud"
                      className={`light-mobile-nav-item sub-item ${
                        pathname === "/cloud" ? "active" : ""
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <div>
                        <span className="light-nav-text">Cloud Solutions</span>
                        <span className="light-nav-description">
                          Cloud infrastructure and solutions
                        </span>
                      </div>
                    </Link>
                  </div>
                )}

                <Link
                  href="/allsolutions"
                  className={`light-mobile-nav-item ${
                    pathname === "/allsolutions" ? "active" : ""
                  }`}
                  onClick={closeMobileMenu}
                >
                  <span className="light-nav-text">Solutions</span>
                </Link>
                <Link
                  href="/contact-us"
                  className={`light-mobile-nav-item ${
                    pathname === "/contact-us" ? "active" : ""
                  }`}
                  onClick={closeMobileMenu}
                >
                  <span className="light-nav-text">Contact</span>
                </Link>

                {/* Careers Button */}
                <div className="light-mobile-careers-button">
                  <PrimaryButton
                    onClick={() => {
                      router.push("/careers");
                      closeMobileMenu();
                    }}
                  >
                    Careers
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LightNavbar;
