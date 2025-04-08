"use client";

import React from "react";

import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";


const Events: React.FC = () => {

    return (

        <div className="flex flex-col min-h-screen contact-background mt-16">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>


            {/* Page Content */}
            <div>
                <h1>Events</h1>

            </div>


            {/* Fixed Footer */}
            <div className="fixed bottom-0 left-0 w-full z-50">
                <Footer />
            </div>
        </div>

    );
};

export default Events;
