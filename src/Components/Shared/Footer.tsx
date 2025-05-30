// src/components/Footer.tsx
"use client";

import React from 'react';
import { SocialMedia } from '@/Components/Constant';
import { SiLeetcode } from "react-icons/si";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaMedium, FaDev } from "react-icons/fa";
//



const Footer: React.FC = () => {
    return (
        <footer className="footer flex-col gap-2 border-t border-gray-500/[0.25] ">
            {/* Navigation Links */}
            {/*  <nav className="flex space-x-4">
                {navigation.map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        className=" ibm-plex-mono-light hover:text-mypurple"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav> */}

                {/* Social Media Links */}
                <div className="flex gap-4 mt-1">
                    {SocialMedia.map((media) => (
                        <a
                            key={media.id}
                            href={media.href}
                            target={media.target}
                            rel={media.rel}
                            aria-label={media.ariaLabel}
                            className="hover:text-mydarkpurple text-mypurple hover:shadow-[0px_4px_8px_rgba(126,96,191,0.5)]" // Apply hover shadow to all icons
                        >
                            {/* Render Icons Based on Social Media Name */}

                            {media.name === "LinkedIn" && <LinkedInIcon className="w-auto h-6" />}
                            {media.name === "GitHub" && <GitHubIcon className="w-auto h-6" />}
                            {media.name === "Medium" && <FaMedium className="w-auto h-6" />}
                            {media.name === "Dev" && <FaDev className="w-auto h-6" />}
                            {media.name === "Leetcode" && <SiLeetcode className="w-auto h-6" />}
                            {media.name === "Facebook" && <FacebookIcon className="w-auto h-6" />}
                            {media.name === "Instagram" && <InstagramIcon className="w-auto h-6" />}
                            {/* {media.name === "Medium" && (
                            <Image
                                src="assets/images/socialMedia/Medium.svg"
                                alt="Medium"
                                width={24}
                                height={24}
                                className="medium-icon"
                            />
                        )} */}
                        </a>
                    ))}
                </div>

                {/* Copyright Text */}
                <p className=" text-xs mt-2 text-gray-500">&copy; {new Date().getFullYear()} Ochwada. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
