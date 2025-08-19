"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Header() {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".navbar__link");
    const toggle = document.querySelector(".nav-header__toggle");
    const navbarList = document.querySelector(".navbar-list");

    const handleClick = (e) => {
      e.preventDefault();
      navbarList.classList.remove("navbar-list--show-links");

      const id = e.currentTarget.getAttribute("href");
      const element = document.querySelector(id);
      const position = element.offsetTop - 62;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    };

    const handleToggle = () => {
      navbarList.classList.toggle("navbar-list--show-links");
    };

    const handleDocumentClick = (e) => {
      const isClickInside =
        navbarList.contains(e.target) || toggle.contains(e.target);
      if (!isClickInside) {
        navbarList.classList.remove("navbar-list--show-links");
      }
    };

    navLinks.forEach((link) => link.addEventListener("click", handleClick));
    toggle.addEventListener("click", handleToggle);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      navLinks.forEach((link) => link.removeEventListener("click", handleClick));
      toggle.removeEventListener("click", handleToggle);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <header id="home">
      <nav className="navbar">
        <div className="navbar-header">
          <Link href="/">
            <span>Eddie Corteen</span>
          </Link>
          <button type="button" className="nav-header__toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="navbar-list">
          <li><a href="#graphic-design" className="navbar__link">Graphic Design</a></li>
          <li><a href="#videography" className="navbar__link">Videography</a></li>
          <li><a href="#video-editing" className="navbar__link">Video editing</a></li>
        </ul>

        <ul className="navbar-icons">
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="navbar-icons__icon icon-twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="navbar-icons__icon icon-facebook">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="navbar-icons__icon">
              <i className="fab fa-instagram icon-instagram"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}