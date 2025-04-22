'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from 'lucide-react'; 

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-white py-4 fixed top-0 left-0 w-full z-10 shadow-sm">
        <div className="relative container mx-auto max-w-[1330px] flex items-center justify-between px-6">
            
            {/* Logo - Kiri */}
            <Link href="/">
            <img src="/images/icon_kaslam_with_text.png" alt="Logo" className="h-8 mr-2 cursor-pointer" />
            </Link>

            {/* Menu - Tengah */}
            <ul className="hidden md:flex space-x-10 text-gray-800 font-medium absolute left-1/2 -translate-x-1/2">
                <li><Link href="/tujuan" className="hover:text-teal-600">Tujuan</Link></li>
                <li><Link href="/scan" className="hover:text-teal-600">Scan Sampah</Link></li>

                <li
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <span
                    className="hover:text-teal-600 cursor-pointer select-none"
                    onClick={toggleDropdown}
                    >
                    Edukasi
                    </span>

                    <div
                    className={`absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-40 z-20 transition-all duration-200 ease-out ${
                        dropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                    }`}
                    >
                    <Link href="/organik" className="block px-4 py-2 hover:bg-teal-100 text-gray-700" onClick={closeDropdown}>Organik</Link>
                    <Link href="/anorganik" className="block px-4 py-2 hover:bg-teal-100 text-gray-700" onClick={closeDropdown}>Anorganik</Link>
                    <Link href="/b3" className="block px-4 py-2 hover:bg-teal-100 text-gray-700" onClick={closeDropdown}>B3</Link>
                    </div>
                </li>
            </ul>

            {/* Hamburger - Kanan (Mobile Only) */}
            <button
            className="md:hidden text-gray-700 ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="md:hidden px-6 pb-4 bg-white shadow-md pt-3">
            <ul className="flex flex-col space-y-2 text-gray-800 font-medium">
                <li><Link href="/tujuan" onClick={() => setMobileMenuOpen(false)}>Tujuan</Link></li>
                <li><Link href="/scan" onClick={() => setMobileMenuOpen(false)}>Scan Sampah</Link></li>
                <li>
                <details className="group">
                    <summary className="cursor-pointer hover:text-teal-600">Edukasi</summary>
                    <div className="ml-4 mt-2 space-y-1">
                    <Link href="/organik" onClick={() => setMobileMenuOpen(false)} className="block">Organik</Link>
                    <Link href="/anorganik" onClick={() => setMobileMenuOpen(false)} className="block">Anorganik</Link>
                    <Link href="/b3" onClick={() => setMobileMenuOpen(false)} className="block">B3</Link>
                    </div>
                </details>
                </li>
            </ul>
            </div>
        )}
        </nav>
  );
}
