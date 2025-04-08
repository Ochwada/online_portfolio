"use client";

import React from "react";
import { FaGithubSquare, FaLinkedin, FaMedium, FaDev, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";


const Contact: React.FC = () => {
    return (
        <div >


            {/* Page Content */}
            <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-8 pt-24 pb-32">
                <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">

                    {/* Left: Form Content */}
                    <div className="w-full md:w-2/3">
                        <h1 className="md:text-4xl text-2xl font-bold text-start mb-12">
                            Ping Me: <span className="text-mypink">Contacts</span>
                        </h1>

                        {/* About or Intro Section */}
                        <p className="text-base mb-10">
                            Whether you have a project idea, a collaboration in mind, or just want to say hello —
                            feel free to reach out. I’m always excited to connect with curious minds, build meaningful things,
                            or chat over shared interests. Drop me a message below and I’ll get back to you as soon as I can!
                        </p>

                        {/* Social Media Section (Hidden on small screens) */}
                        <div className="hidden md:block mt-20">
                            <h3 className="text-2xl font-bold text-start">
                                <span className="text-mypink underline underline-offset-2">Social</span> Media
                            </h3>

                            <div className="flex flex-row gap-6 items-center justify-start mt-10">
                                <a
                                    href="https://www.linkedin.com/in/ochwada-l-66630a36/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin className="w-10 h-10 text-mypurple hover:text-mypink transition" />
                                </a>
                                <a
                                    href="https://github.com/Ochwada"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithubSquare className="w-10 h-10 text-mypurple hover:text-mypink transition" />
                                </a>
                                <a
                                    href="https://medium.com/@ochwada"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaMedium className="w-10 h-10 text-mypurple hover:text-mypink transition" />
                                </a>
                                <a
                                    href="https://dev.to/ochwada"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaDev className="w-10 h-10 text-mypurple hover:text-mypink transition" />
                                </a>
                                <a
                                    href="https://www.facebook.com/ochwada.linda/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebookSquare className="w-10 h-10 text-mypurple hover:text-mypink transition" />
                                </a>
                                <a
                                    href="https://www.instagram.com/ochwada_linda/#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagramSquare className="w-10 h-10 text-mypurple hover:text-mypink transition" />
                                </a>
                            </div>
                        </div>

                    </div>

                    <form
                        action="https://getform.io/f/aqokdkja"
                        method="POST"
                        className="w-full max-w-3xl bg-gray-300/[0.25] bg-opacity-90 shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 space-y-6"
                    >


                        <div>
                            <label className="block text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name here..."
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:ring focus:border-mypink"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your email here..."
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:ring focus:border-mypink"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2" htmlFor="subject">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Add subject..."
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-sm  leading-tight focus:outline-none focus:ring focus:border-mypink"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Your message here..."
                                rows={6}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-mypink"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-mypink hover:bg-purple-300 font-bold py-2 px-6 rounded-xl focus:outline-none"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};


export default Contact;
