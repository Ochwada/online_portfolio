import React, { useEffect, useState } from 'react';

const BarChart = ({ value }: { value: number }) => {
    const clampedValue = Math.min(Math.max(value, 0.1), 1);
    const roundedValue = Math.round(clampedValue * 10) / 10;

    const COLORS: { [key: number]: string } = {
        0.1: '#60A5FA',
        0.2: '#60A5FA',
        0.3: '#60A5FA',
        0.4: '#C084FC',
        0.5: '#C084FC',
        0.6: '#df26a5',
        0.7: '#df26a5',
        0.8: '#4ADE80',
        0.9: '#4ADE80',
        1.0: '#4ADE80',
    };

    const [barWidth, setBarWidth] = useState('0%');

    useEffect(() => {
        // Animate bar fill after component mounts
        const timeout = setTimeout(() => {
            setBarWidth(`${clampedValue * 100}%`);
        }, 50); // delay ensures transition works

        return () => clearTimeout(timeout);
    }, [clampedValue]);

    return (
        <div className="w-24 h-2 rounded bg-gray-200 overflow-hidden">
            <div
                className="h-full transition-all duration-700 ease-in-out"
                style={{
                    width: barWidth,
                    backgroundColor: COLORS[roundedValue] || '#3490dc',
                }}
            />
        </div>
    );
};

export default BarChart;
