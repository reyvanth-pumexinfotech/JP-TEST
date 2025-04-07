"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";
import PrimaryButton from "../PrimaryButton/primaryButton";
import PumexLogo from "../../../public/assets/Pumex-offical-logo.svg";
import { ChevronRight } from "lucide-react";

const NewNavbar = () => {
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
    <div className="newnav-main-div">
      {/* Left Section */}
      <div className="newnav-main-div-left">
        <Link href="/">
          <Image src={PumexLogo} alt="Pumex Logo" width={150} height={50} />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div
        className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
      >
        <div className="hamburger-icon">
          <span
            className={`line line-1 ${isMobileMenuOpen ? "active" : ""}`}
          ></span>
          <span
            className={`line line-2 ${isMobileMenuOpen ? "active" : ""}`}
          ></span>
          <span
            className={`line line-3 ${isMobileMenuOpen ? "active" : ""}`}
          ></span>
        </div>
      </div>

      {/* Right Section (Desktop) */}
      <div className="newnav-main-div-right">
        <Link
          href="/"
          className={`nav-option ${pathname === "/" ? "active" : ""}`}
        >
          {/* Home */}
          ホーム
        </Link>
        <Link
          href="/about-us"
          className={`nav-option ${pathname === "/about-us" ? "active" : ""}`}
        >
          {/* About Us */}
          私たちについて
        </Link>

        {/* Expertise Dropdown */}
        <div
          className="dropdown-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href="/"
            className={`nav-option nav-with-arrow ${
              isExpertiseOpen ? "active-nav-option" : ""
            }`}
          >
            {/* Area of Expertise */}
            専門領域
          </Link>

          {isExpertiseOpen && (
            <div className="dropdown-menu">
              <Link
                href="/visualization"
                className={`dropdown-item ${
                  pathname === "/visualization" ? "active" : ""
                }`}
              >
                <div className="dropdown-title">
                  {/* Visualization */}
                  ビジュアライゼーション
                </div>
                <div className="dropdown-description">
                  {/* Advanced data visualization solutions */}
                  高度なデータビジュアライゼーションソリューション
                </div>
              </Link>
              <Link
                href="/product-engineering"
                className={`dropdown-item ${
                  pathname === "/product-engineering" ? "active" : ""
                }`}
              >
                <div className="dropdown-title">
                  {/* Product Engineering */}
                  プロダクトエンジニアリング
                </div>
                <div className="dropdown-description">
                  {/* End-to-end product development services */}
                  エンドツーエンドの製品開発サービス
                </div>
              </Link>
              <Link
                href="/cloud"
                className={`dropdown-item ${
                  pathname === "/cloud" ? "active" : ""
                }`}
              >
                <div className="dropdown-title">
                  {/* Cloud */}
                  クラウド
                </div>
                <div className="dropdown-description">
                  {/* Cloud infrastructure and solutions */}
                  クラウドインフラとソリューション
                </div>
              </Link>
            </div>
          )}
        </div>

        {/* Contact Us Button */}
        <div className="navbar-button-sizer">
          <PrimaryButton onClick={() => router.push("/contact-us")}>
            {/* Contact Us */}
            連絡
          </PrimaryButton>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`mobile-menu ${menuTransition ? "active" : ""}`}
          ref={mobileMenuRef}
        >
          <div className="mobile-menu-inner">
            <div className="mobile-menu-header">
              <div className="mobile-branding">
                <Image
                  src={PumexLogo}
                  alt="ピュメックスロゴ"
                  width={120}
                  height={40}
                />
              </div>
            </div>

            <div className="mobile-menu-content">
              <div className="menu-section">
                <Link
                  href="/"
                  className={`mobile-nav-item ${
                    pathname === "/" ? "active" : ""
                  }`}
                  onClick={closeMobileMenu}
                >
                  <span className="nav-text">
                    {/* Home */}
                    ホーム
                  </span>
                </Link>
                <Link
                  href="/about-us"
                  className={`mobile-nav-item ${
                    pathname === "/about-us" ? "active" : ""
                  }`}
                  onClick={closeMobileMenu}
                >
                  <span className="nav-text">
                    {/* About Us */}
                    私たちについて
                  </span>
                </Link>

                {/* Expertise with dropdown functionality */}
                <div
                  className="mobile-nav-item expertise-dropdown"
                  onClick={toggleExpertiseDropdown}
                >
                  <span className="nav-text">
                    {/* Area of Expertise */}
                    専門分野
                  </span>
                  <span className="nav-icon">
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
                  <div className="expertise-dropdown-content">
                    <Link
                      href="/visualization"
                      className={`mobile-nav-item sub-item ${
                        pathname === "/visualization" ? "active" : ""
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <div>
                        <span className="nav-text">
                          {/* Visualization */}
                          ビジュアライゼーション
                        </span>
                        <span className="nav-description">
                          {/* Advanced data visualization solutions */}
                          高度なデータビジュアライゼーションソリューション
                        </span>
                      </div>
                    </Link>
                    <Link
                      href="/product-engineering"
                      className={`mobile-nav-item sub-item ${
                        pathname === "/product-engineering" ? "active" : ""
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <div>
                        <span className="nav-text">
                          {/* Product Engineering */}
                          プロダクトエンジニアリング
                        </span>
                        <span className="nav-description">
                          {/* End-to-end product development */}
                          エンドツーエンドの製品開発
                        </span>
                      </div>
                    </Link>
                    <Link
                      href="/cloud"
                      className={`mobile-nav-item sub-item ${
                        pathname === "/cloud" ? "active" : ""
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <div>
                        <span className="nav-text">
                          {/* Cloud */}
                          クラウド
                        </span>
                        <span className="nav-description">
                          {/* Cloud infrastructure and solutions */}
                          クラウドインフラとソリューション
                        </span>
                      </div>
                    </Link>
                  </div>
                )}

                {/* Contact Us Button */}
                <div className="mobile-careers-button">
                  <PrimaryButton
                    onClick={() => {
                      router.push("/contact-us");
                      closeMobileMenu();
                    }}
                  >
                    {/* Contact */}
                    お問い合わせ
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

export default NewNavbar;
