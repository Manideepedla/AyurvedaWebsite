"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
 

export default function NavigationMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white">

      <div className="hidden md:block bg-green-200 text-black text-sm py-2 px-4 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hyd@edvenswa-ayurveda.com&su=Need%20Support&body=Hello%20Team%2C%0A%0AI%20have%20a%20question%20regarding..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Mail size={16} />
              <span className="break-all">
                <b>hyd@edvenswa-ayurveda.com</b>
              </span>
            </a>

            <a
              href="tel:+918055000016"
              className="flex items-center gap-1 hover:underline"
            >
              <Phone size={16} />
              <span>
                <b>+91 9100052961</b>
              </span>
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex justify-start md:justify-end items-center space-x-4 text-black mt-2 md:mt-0">
            <a href="https://www.facebook.com/edvenswaayurveda"  aria-label="Facebook" target="_blank"><FaFacebookF size={16}  /></a>
            <a href="https://www.instagram.com/edvenswa_ayurveda/" aria-label="Instagram" target="_blank"><FaInstagram size={16}  /></a>
            <a href="https://www.linkedin.com/showcase/edvenswa-ayurveda/posts/?feedView=all" aria-label="LinkedIn" target="_blank" ><FaLinkedinIn size={16} /></a>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-sm" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <div className="container mx-auto flex justify-between items-center relative px-4">
          {/* Logo */}
          <div className="logo z-10">
            <Link href="/">
              <div className="logo-container ml-4 relative transform transition-transform duration-300 hover:scale-105">
                <Image
                  src="/EdvenswaAyurvedaLogo.png"
                  alt="Edvenswa Ayurveda Logo"
                  width={180}
                  height={150}
                  className="rounded-md hover:shadow-lg transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:block absolute right-10 ml-10">
            <ul className="flex space-x-9 items-center">
              <li><Link href="/" className="text-gray-700 hover:text-green-700 font-medium">Home</Link></li>
              <li><Link href="/about-us" className="text-gray-700 hover:text-green-700 font-medium">About Us</Link></li>
              <li><Link href="/our-services" className="text-gray-700 hover:text-green-700 font-medium">Our Services</Link></li>
              <li><Link href="/treatments" className="text-gray-700 hover:text-green-700 font-medium">Treatments</Link></li>
              <li><Link href="/contact-us" className="text-gray-700 hover:text-green-700 font-medium">Contact Us</Link></li>
            </ul>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-gray-700 hover:text-green-700"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col space-y-4 p-4">
              <li><Link href="/" onClick={toggleMobileMenu} className="text-gray-700 hover:text-green-700">Home</Link></li>
              <li><Link href="/about-us" onClick={toggleMobileMenu} className="text-gray-700 hover:text-green-700">About Us</Link></li>
              <li><Link href="/our-services" onClick={toggleMobileMenu} className="text-gray-700 hover:text-green-700">Our Services</Link></li>
              <li><Link href="/treatments" onClick={toggleMobileMenu} className="text-gray-700 hover:text-green-700">Treatments</Link></li>
              <li><Link href="/contact-us" onClick={toggleMobileMenu} className="text-gray-700 hover:text-green-700">Contact Us</Link></li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}
