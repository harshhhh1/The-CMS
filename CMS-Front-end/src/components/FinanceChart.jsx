import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expence: 2400,
  },
  {
    name: 'Fed',
    income: 3000,
    expence: 1398,
  },
  {
    name: 'Mar',
    income: 2000,
    expence: 9800,
  },
  {
    name: 'Apr',
    income: 1890,
    expence: 4800,
  },
  {
    name: 'May',
    income: 2390,
    expence: 3800,
  },
  {
    name: 'June',
    income: 3490,
    expence: 4300,
  },
  {
    name: 'July',
    income: 2780,
    expence: 3908,
  },
  {
    name: 'Aug',
    income: 2780,
    expence: 3908,
  },
  {
    name: 'Sept',
    income: 2780,
    expence: 3908,
  },
  {
    name: 'Ocr',
    income: 2780,
    expence: 3908,
  },
  {
    name: 'Nov',
    income: 2780,
    expence: 3908,
  },
  {
    name: 'Dec',
    income: 2780,
    expence: 3908,
  },
  
];

export function FinanceChart() {
    return (
        <div className="bg-white rounded-xl h-full p-4">
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className='font-semibold text-lg'>Finance</h1>
                <img src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            {/* FINANCE CHART */}
            <div className="w-full h-[90%] flex justify-center items-center text-gray-400">
                <LineChart
                style={{ width: '100%', height: '100%', maxHeight: '80vh', aspectRatio: 1.618 }}
                responsive
                data={data}
                >
                <CartesianGrid strokeDasharray="3 3" stroke='#ddd'/>
                <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                <YAxis width="auto" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                <Tooltip />
                <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop:'0px', paddingBottom:'30px'}} />
                <Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="expence" stroke="#82ca9d" strokeWidth={2} />
                </LineChart>
            </div>
        </div>
    );
}