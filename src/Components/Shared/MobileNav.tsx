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
                    className={`fixed top-0 left-0 w-full h-screen p-6 space-y-4 z-50 md:hidden ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
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
                    {/* <nav className="mt-12">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href; // Compare with pathnam   
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
                    </nav> */}
                    <nav className="mt-12">
    {navigation.map((item) => {
        const isActive = pathname === item.href;

        return (
            <div key={item.id}>
                {/* If the item has subLinks, render just the label (not a link) */}
                {item.subLinks ? (
                    <div className="ibm-plex-mono-semibold text-base uppercase font-semibold mb-2">
                        {item.name}
                    </div>
                ) : (
                    <Link
                        href={item.href}
                        className={`ibm-plex-mono-semibold block text-base uppercase font-semibold mb-2 ${
                            isActive
                                ? 'text-purple-500'
                                : 'hover:text-mypurple hover:border-b rounded hover:border-mypurple'
                        }`}
                        onClick={toggleNav}
                    >
                        {item.name}
                    </Link>
                )}

                {/* Render subLinks if they exist */}
                {item.subLinks?.map((sub) => {
                    const isSubActive = pathname === sub.href;
                    return (
                        <Link
                            key={sub.id}
                            href={sub.href}
                            className={`block ml-4 text-sm font-medium mb-2 ${
                                isSubActive
                                    ? 'text-purple-500'
                                    : 'hover:text-mypurple'
                            }`}
                            onClick={toggleNav}
                        >
                            └ {sub.name}
                        </Link>
                    );
                })}
            </div>
        );
    })}
</nav>



                </div>
            )}
        </>
    );
};

export default MobileNav;
