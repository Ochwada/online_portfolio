"use client";

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';


import { navigation } from '@/Components/Constant';
import { useTheme } from '@/Components/Shared/ThemeContext';


interface MobileNavProps {
    isOpen: boolean;
    toggleNav: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, toggleNav }) => {

    const { theme } = useTheme();
    const pathname = usePathname(); // Get current pathname

    return (
        <>
            {/* Mobile Menu Toggle Button */}
            <button
                onClick={toggleNav}
                className="md:hidden p-2 rounded focus:outline-none"
                aria-label="Toggle mobile menu"
            >
                {isOpen ? " " : <Menu size={24} className="text-mypurple" />}
            </button>

            {/* Mobile Navigation Drawer */}
            {isOpen && (
                <div
                className={`fixed top-0 left-0 w-full h-screen p-6 space-y-4 z-50 md:hidden ${
                    theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
                }`}
            >
                    {/* Close Button */}
                    <button
                        onClick={toggleNav}
                        className="absolute top-4 right-4 p-2 rounded focus:outline-none"
                        aria-label="Close mobile menu"
                    >
                        <X size={24} className="text-mypurple" />
                    </button>

                    {/* Navigation Links */}
                    <nav className="mt-12">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href; // Compare with pathname
                            return (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className={`ibm-plex-mono-semibold block text-base uppercase font-semibold mb-4 ${
                                        isActive
                                            ? 'text-purple-500'
                                            : 'hover:text-mypurple hover:border-b rounded hover:border-mypurple'
                                    }`}
                                    onClick={toggleNav}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                </div>
            )}
        </>
    );
};

export default MobileNav;
