"use client";

import React from "react";
import { blogPosts } from "@/Components/Constant";

interface BlogsSideBarProps {
    currentPost: {
        id: number;
        tags: string[];
    };
}

const BlogsSideBar: React.FC<BlogsSideBarProps> = ({ currentPost }) => {
    const formatDate = (date: string) => {
        const d = new Date(date);
        return d.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    const relatedPosts = blogPosts
        .filter((post) => post.id !== currentPost.id)
        .map((post) => {
            const commonTags = post.tags.filter((tag) =>
                currentPost.tags.includes(tag)
            );
            return { ...post, tagMatchCount: commonTags.length };
        })
        .filter((post) => post.tagMatchCount >= 2)
        .slice(0, 4);


    return (
        <aside className="md:w-1/5 w-full mt-12 md:mt-0">
            {/* Related Blogs */}
            <div className="mb-10">
                <h2 className="text-lg font-bold mb-4">🗺️ Related Blogs</h2>
                {relatedPosts.length > 0 ? (
                    relatedPosts.map((post) => (
                        <a
                            key={post.id}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mb-3 hover:underline"
                        >
                            <span className="text-xs text-mypurple font-medium">
                                {post.title}
                            </span>
                    
                        </a>
                    ))
                ) : (
                    <p className="text-sm text-gray-500">No related posts found.</p>
                )}
            </div>

            {/* Latest Blogs */}
            <div>
                <h2 className="text-lg font-bold mb-4">🕒 Latest Blogs</h2>
                {blogPosts
                    .sort(
                        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
                    )
                    .slice(0, 4)
                    .map((post) => (
                        <a
                            key={post.id}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mb-3 hover:underline"
                        >
                            <span className="text-xs text-gray-700 dark:text-gray-300">
                                {post.title}
                            </span>
                            <p className="text-xs text-gray-400 text-right mt-1">
                                {formatDate(post.date)}
                            </p>
                        </a>
                    ))}
            </div>
        </aside>
    );
};

export default BlogsSideBar;
