import { PieChart, Pie, Tooltip } from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF5733', '#DAF7A6'];

export function Chart({ chartdata, colorCombination, labelFormatter  }) {
    return (
         
             <PieChart width={500} height={300}>
            <Pie
                dataKey="value"
                isAnimationActive={true}
                cx={200}
                cy={150}
                outerRadius={80}
                fill="#8884d8"
                data={colorCombination ? chartdata : chartdata.map((entry, index) => ({
                    ...entry,
                    fill: COLORS[index % COLORS.length]
                }))}
                label={labelFormatter ? (props) => labelFormatter(props) : undefined}
            />
            <Tooltip />
        </PieChart>
        
    );
}
