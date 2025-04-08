"use client";

import React from "react";

import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";
import BlogsComponent from "@/Components/Hub/blogs/BlogsComponent";

const BlogsPage: React.FC = () => {

    return (

        <div className="flex flex-col min-h-screen blog-background mt-16">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>

            {/* Page Content */}
            <BlogsComponent />
           

            {/* Fixed Footer */}
            <div className="fixed bottom-0 left-0 w-full z-50">
                <Footer />
            </div>
        </div>

    );
};

export default BlogsPage;
