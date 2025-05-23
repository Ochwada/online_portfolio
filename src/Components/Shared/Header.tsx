"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggleButton from './ThemeToggleButton';
import { navigation } from '@/Components/Constant';
import Image from 'next/image';
import MobileNav from './MobileNav';

const Header: React.FC = () => {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const pathname = usePathname();

     // Function to toggle dropdown on click
    const handleDropdownClick = (id: number) => {
        setOpenDropdown((prev) => (prev === id ? null : id)); // Toggle logic
    };

    // Toggle mobile menu
    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };



    return (
        <header
            className=" fixed top-0 left-0 w-full z-50 border-b border-gray-500/[0.25] "
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-1">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <button className="text-mypink text-2xl ibm-plex-mono-bold flex items-center">
                            <Image
                                src="/assets/logo.png"
                                alt="Logo"
                                width={56}
                                height={56}
                                className="h-14 w-auto"
                            />
                            Ochwada
                        </button>
                    </Link>
                </div>

                {/* Navigation */}
                {/* <nav className="hidden md:flex space-x-4 mx-auto">
                    {navigation.map((item) => (
                        <Link key={item.id} href={item.href}>
                            <button
                                className={`ibm-plex-mono-semibold text-base font-semibold tracking-wide px-2 uppercase ${
                                    pathname === item.href
                                        ? 'border-b-2 border-mypurple text-mypurple'
                                        : 'hover:border-b hover:text-mypurple'
                                }`}
                            >
                                {item.name}
                            </button>
                        </Link>
                    ))}
                </nav> */}

                 {/* Navigation */}
                 <nav className="hidden md:flex space-x-6 mx-auto">
                    {navigation.map((item) => (
                        <div
                            key={item.id}
                            className="relative group"
                            onMouseEnter={() => setOpenDropdown(item.id)}
                            onMouseLeave={() => setTimeout(() => setOpenDropdown(null), 5000)} // Delay closing
                        >
                            {item.subLinks ? (
                                <>
                                    {/* Click to toggle dropdown */}
                                    <button
                                        className="ibm-plex-mono-semibold text-base font-semibold tracking-wide px-2 uppercase hover:border-b hover:text-mypurple"
                                        onClick={() => handleDropdownClick(item.id)}
                                    >
                                        {item.name}
                                    </button>

                                    {/* Dropdown - Opens on hover OR click */}
                                    {openDropdown === item.id && (
                                        <ul className="absolute left-0 top-full mt-1 bg-white dark:bg-gray-900 rounded-md shadow-lg w-48 z-50">
                                            {item.subLinks.map((subItem) => (
                                                <li
                                                    key={subItem.id}
                                                    className="p-2 hover:bg-gray-200/[0.5]"
                                                    onClick={() => setOpenDropdown(null)} // Close dropdown after clicking
                                                >
                                                    <Link href={subItem.href} className="block px-4 py-1">
                                                        {subItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                // Normal navigation link
                                <Link href={item.href}>
                                    <button
                                        className={`ibm-plex-mono-semibold text-base font-semibold tracking-wide px-2 uppercase ${
                                            pathname === item.href
                                                ? "border-b-2 border-mypurple text-mypurple"
                                                : "hover:border-b hover:text-mypurple"
                                        }`}
                                    >
                                        {item.name}
                                    </button>
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Theme Toggle and Mobile Navigation */}
                <div className="flex  items-center space-x-4">
                    <ThemeToggleButton />
                    <div className="md:hidden">
                        <MobileNav isOpen={isMobileNavOpen} toggleNav={toggleMobileNav} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
