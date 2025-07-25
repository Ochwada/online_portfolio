"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";



import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";
import assets from "@/assets";

const Home: React.FC = () => {
  const [text, setText] = useState("");
  const [isBlinking, setIsBlinking] = useState(false); // For blinking dot
  const fullText = "Niaje! I'm Linda Ochwada.";
  const typingSpeed = 200; // Typing speed in milliseconds
  const pauseDuration = 3000; // Pause before restarting

  useEffect(() => {
    let index = 0;
    const type = () => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        index = 0; // Reset index after full text
        setTimeout(() => type(), pauseDuration);
      } else {
        setTimeout(type, typingSpeed);
      }
    };
    type();
    return () => clearTimeout(type as unknown as NodeJS.Timeout); // Cleanup timeout
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500); // Toggle dot visibility
    return () => clearInterval(blinkInterval);
  }, []);

  return (
   
      <div className="flex flex-col min-h-screen home-background ">
        {/* Fixed Header */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Header />
        </div>

        {/* Main Content */}
        <div className="flex-grow overflow-y-auto pb-16 px-4 sm:px-8 place-content-center">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Image Section */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start overflow-hidden">
              <div className="hover:scale-75 transition-transform duration-300 w-40 sm:w-48 md:w-72 mt-10">
                <Image
                  src={assets.lin}
                  alt="Picture of Linda Ochwada"
                  width={500}
                  height={500}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
                style={{ minHeight: "4.5rem" }}
              >
                <span className="text-mypink ibm-plex-mono-bold">
                  {text}
                  {text === fullText && (isBlinking ? "." : "")}
                </span>
              </h1>
              <div>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-5">
                  I am currently expanding my skills through the
                  <span className={`text-pink-600 font-bold`}> Java Backend Engineering</span>
                  <span className={`text-gray-300`}> – Future Women with Zalando program program </span> ,
                  where I am deepening my backend development knowledge with a focus on scalable, modern Java applications.
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Passionate about Geoinformatics and Technology, I blend technical expertise with strategic insight.
                  Known for problem-solving and teamwork, I bring experience in
                  <span className="text-purple-500 dancing-script-regular"> GIS & Remote Sensing Analytics, Project Management,
                </span>
                  <span className="text-purple-300 dancing-script-regular"> <span></span>
                     Software Development
                </span>  <span></span>
                   and
                  <span className="text-purple-500 dancing-script-regular"> Sales</span>.

                  I drive impactful and innovative solutions in every project. Eager to learn and share knowledge with my teams.
                </p>
              </div>
            </div>
          </div>


        </div>

        {/* Fixed Footer */}
        <div className="fixed bottom-0 left-0 w-full z-50">
          <Footer />
        </div>
      </div>
  );
};

export default Home;
