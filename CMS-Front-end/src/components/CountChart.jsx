import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

// #region Sample data
const data = [
    {
        name: 'Total',
        Count: 106,
        fill: 'white',
    },
    {
        name: 'Girls',
        Count: 53,
        fill: '#8884d8',
    },
    {
        name: 'Boys',
        Count: 53,
        fill: '#83a6ed',
    },
];

// #endregion

export function CountChart() {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className='font-semibold text-lg'>Students</h1>
                <img src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            {/* CHART */}
            <div className="relative w-full h-[72%] flex ">
                <RadialBarChart
                    style={{  aspectRatio: 1.618 }}
                    responsive
                    cx="33%"
                    innerRadius="25%"
                    outerRadius="100% "
                    barSize={36}
                    data={data}
                >
                    <RadialBar background dataKey="Count" />
                    <Tooltip />
                </RadialBarChart>
                <img src="maleFemale.png" alt="malefemale" width={40} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            {/* BOTTOM */}
            <div className="flex gap-16 justify-center">
                <div className="flex flex-col gap-1">
                    <div className="w-4 h-4 bg-blue-500 rounded-full" />
                    <h1 className='font-bold'>1,254</h1>
                    <h2 className='text-xs text-gray-500'>Boys (55%)</h2>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-4 h-4 bg-purple-500 rounded-full" />
                    <h1 className='font-bold'>954</h1>
                    <h2 className='text-xs text-gray-500'>Girls (45%)</h2>
                </div>
            </div>
        </div>
    );
};