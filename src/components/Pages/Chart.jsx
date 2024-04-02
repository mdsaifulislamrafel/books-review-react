/* eslint-disable react/prop-types */
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import LocalSavedData from '../DataHook/localSaveData';


const Chart = () => {
    const { localSaveData } = LocalSavedData();

    const data = localSaveData.map(item => ({
        name: item.bookName,
        uv: item.totalPages,
    }));

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="custom-tooltip bg-white px-4 py-2 rounded-lg">
                    <p className="label">{`${data.name} : ${data.uv}`}</p>

                </div>
            );
        }

        return null;
    };

    return (
        <div className='bg-[#f8f8f8] w-full h-[75vh] flex justify-center items-center'>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart
                    width={800}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />

                    <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>

                </BarChart>
            </ResponsiveContainer>
        </div >
    );
};

export default Chart;
