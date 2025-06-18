import { PieChart, Pie, Cell } from 'recharts';
import { Component } from 'react';

class DonutChart extends Component<{ value: number }> {
    render() {
        const { value } = this.props;

        const clampedValue = Math.min(Math.max(value, 0.1), 1);

        // Color mapping for value steps
        const COLORS: { [key: number]: string } = {
            0.1: '#FF6633',
            0.2: '#FFB399',
            0.3: '#89b120',
            0.4: '#f3f30d',
            0.5: '#00B3E6',
            0.6: '#d134dc',
            0.7: '#3366E6',
            0.8: '#999966',
            0.9: '#99FF99',
            1.0: '#B34D4D',
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
                    innerRadius={12}
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
