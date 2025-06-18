import { PieChart, Pie, Cell } from 'recharts';
import { Component } from 'react';

class DonutChart extends Component<{ value: number }> {
    render() {
        const { value } = this.props;

        const clampedValue = Math.min(Math.max(value, 0.1), 1);

        // Color mapping for value steps
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

        // Round to nearest 0.1 for color matching
        const roundedValue = Math.round(clampedValue * 10) / 10;

        const data = [
            { name: 'Progress', value: clampedValue },
            { name: 'Remaining', value: 1 - clampedValue },
        ];

        return (
            <PieChart width={40} height={40}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={8}
                    outerRadius={16}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                    isAnimationActive={true}
                >
                    <Cell fill={COLORS[roundedValue] || '#3490dc'} />
                    <Cell fill="#e2e4e9" />
                </Pie>
            </PieChart>
        );
    }
}

export default DonutChart;
