"use client";

import React, { useState } from "react";
//import { FaMedium, FaDev } from "react-icons/fa";
import { FaTwitter, FaLinkedin,  FaWhatsapp, FaLink,  FaMedium,  FaDev} from "react-icons/fa";
import { blogPosts } from "@/Components/Constant";
import BlogsSideBar from "./BlogsSideBar";

const BlogsComponent: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(6);
    const [searchQuery, setSearchQuery] = useState("");

    const formatDate = (date: string) => {
        const d = new Date(date);
        return d.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const [copiedPostId, setCopiedPostId] = useState<number | null>(null);

    const handleCopy = (link: string, id: number) => {
        navigator.clipboard.writeText(link);
        setCopiedPostId(id);
        setTimeout(() => setCopiedPostId(null), 1500); // Hide "Copied" after 1.5s
    };


    const handleSeeMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    // Filter blogs based on search query
    const filteredPosts = blogPosts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const visiblePosts = filteredPosts.slice(0, visibleCount);

    return (
        <div className="flex flex-col md:flex-row mt-16 px-4 sm:px-8">
            <div className="p-4 sm:p-8 pb-2  mb-12">
                <h1 className="md:text-4xl text-2xl font-bold text-start mb-4">
                    Dev Diaries: <span className="text-mypink">Blogs</span>
                </h1>
                <p className="mb-8">
                    Welcome to my blog! Here you'll find a collection of my thoughts, insights, and experiences on a variety of topics. I hope you enjoy reading and exploring my posts!

                    <br />
                    <br />
                    Feel free to <a href="/hub/contact" className="text-mypurple underline  font-bold" target="_blank"
                        rel="noopener noreferrer"> reach out </a>  if you have any questions or comments. Happy reading!

                </p>
                <div className="flex flex-col md:flex-row mt-16 px-4 sm:px-8">

                    {/*  ----------------------- Main Blog Content ---------------------------- */}
                    <div className="md:w-4/5 w-full md:pr-8">
                        {/* Search Input */}
                        <div className="mb-6">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setVisibleCount(6); // Reset visible count on search
                                }}
                                placeholder="Search blog titles or descriptions..."
                                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
                                            focus:ring-2 focus:ring-mypink text-sm"
                            />
                        </div>

                        {/* Blog Grid */}

                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mt-6">
                            {visiblePosts.length > 0 ? (
                                visiblePosts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="bg-white/10 border border-gray-300/[0.25] hover:border-mypink hover:shadow-xl transition rounded-xl p-6 flex flex-col justify-between h-full"
                                    >
                                        <div className="bg-white dark:bg-white/10 dark:text-gray-200 p-3 rounded-md backdrop-blur-sm">
                                            <div className="flex items-center gap-3 mb-2">
                                                {post.platform === "medium" && (
                                                    <FaMedium className="text-violet-500 w-6 h-6" />
                                                )}
                                                {post.platform === "dev" && (
                                                    <FaDev className="text-fuchsia-500 w-6 h-6" />
                                                )}
                                                <a 
                                                    href={post.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-purple-500 font-medium">
                                                <h2 className="text-base font-semibold underline underline-offset-2">
                                                    {post.title}
                                                </h2>
                                                </a>
                                                
                                            </div>
                                            <p className="text-sm pt-2">{post.description}</p>
                                        </div>

                                        {/* Share buttons */}
                                        <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
                                            <p>{formatDate(post.date)}</p>
                                            <div className="flex gap-2 text-sm">
                                                <a
                                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                                        post.link
                                                    )}&text=${encodeURIComponent(post.title)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="Share on Twitter"
                                                >
                                                    <FaTwitter className="hover:text-[#1DA1F2]" />
                                                </a>
                                                <a
                                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                                                        post.link
                                                    )}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="Share on LinkedIn"
                                                >
                                                    <FaLinkedin className="hover:text-[#0077B5]" />
                                                </a>
                                                <a
                                                    href={`https://wa.me/?text=${encodeURIComponent(
                                                        post.title + " " + post.link
                                                    )}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="Share on WhatsApp"
                                                >
                                                    <FaWhatsapp className="hover:text-[#25D366]" />
                                                </a>
                                                <button
                                                    onClick={() => handleCopy(post.link, post.id)}
                                                    title="Copy link"
                                                    className="relative"
                                                >
                                                    <FaLink className="hover:text-mypurple" />
                                                    <span
                                                        className={`absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs bg-mypurple text-white px-2 py-0.5 rounded transition-opacity ${copiedPostId === post.id ? "opacity-100" : "opacity-0"
                                                            }`}
                                                    >
                                                        Copied
                                                    </span>
                                                </button>


                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-gray-500">No matching blog posts found.</p>
                            )}
                        </div>

                        {/* See More Button */}
                        {visibleCount < filteredPosts.length && (
                            <div className="flex justify-center mt-6 mb-16">
                                <button
                                    onClick={handleSeeMore}
                                    className="px-6 py-1 border border-mypink text-mypink hover:bg-mypink hover:text-white transition rounded-md"
                                >
                                    See More
                                </button>
                            </div>
                        )}
                    </div>
                    {/* Sidebar */}
                    <BlogsSideBar currentPost={filteredPosts[0]} />
                </div>

            </div>
        </div>
    );
};

export default BlogsComponent;
