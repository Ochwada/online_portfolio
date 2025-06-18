"use client";

import React from "react";
import { Skills as skills } from "@/Components/Constant";

const getLevelColor = (level: number): string => {
  if (level <= 0.3) return "bg-blue-400";
  if (level <= 0.5) return "bg-purple-400";
  if (level <= 0.7) return "bg-pink-400";
  return "bg-green-400";
};

export default function SkillsComponent() {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Center Sun */}
      <div className="w-20 h-20 bg-slate-400 rounded-full shadow-lg shadow-purple-300 animate-pulse z-10 flex items-center justify-center text-xs text-center">
        <span className="space-grotesk-bold">Skills</span>
      </div>

      {/* Orbiting Skills */}
      {skills.map((skill, index) => {
        const size = Math.round(skill.level * 24);
        const color = getLevelColor(skill.level);
        const orbitIndex = parseInt(skill.distance.split("-")[1]); // 1 to 5
        const translateX = (orbitIndex * 36); // Adjust this for better spacing
        //const angle = (index / skills.length) * 360;

        return (
          <div
            key={skill.name}
            className={`absolute ${skill.distance} rounded-full border border-dashed border-gray-500/30 flex items-center justify-center`}
          >
            <div
              className="relative animate-orbit"
              style={{ animationDuration: `${16 + index}s` }}
            >
              <div
                className="absolute flex flex-col items-center"
                style={{
                  transform: `translateX(${translateX}px)`,
                }}
              >
                <div
                  className={`${color} rounded-full`}
                  style={{ width: `${size}px`, height: `${size}px` }}
                ></div>
                <span
                  className="text-xs mt-1 text-center orbit-label"
                  
                >
                  {skill.name}
                </span>
              </div>
            </div>
          </div>


        );
      })}

      {/* Skill Legend */}
      <div className="absolute z-20 top-2">
        <div className="mt-4 text-xs space-x-2 text-center flex flex-row items-center">
          <div><span className="inline-block w-3 h-3 rounded-full bg-pink-400 mr-2"></span> Beginner (≤ 0.3)</div>
          <div><span className="inline-block w-3 h-3 rounded-full bg-purple-400 mr-2"></span> Intermediate (≤ 0.5)</div>
          <div><span className="inline-block w-3 h-3 rounded-full bg-blue-400 mr-2"></span> Proficient (≤ 0.7)</div>
          <div><span className="inline-block w-3 h-3 rounded-full bg-green-400 mr-2"></span> Expert (≤ 1.0)</div>
        </div>
      </div>
    </div>
  );
}
