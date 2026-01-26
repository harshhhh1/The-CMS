import { useState } from "react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export function EventCalender() {
    const [value, onChange] = useState(new Date());
    const events = [
        {
            id: 1,
            title: "Lorem ipsum dolor",
            time: "12:00 PM - 2:00 PM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor",
            time: "12:00 PM - 2:00 PM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor",
            time: "12:00 PM - 2:00 PM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        }
    ]

    return (
        <div className="bg-white rounded-xl h-full p-4">            
            <Calendar onChange={onChange} value={value} />
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold my-3">Events</h1>
                <img src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <div className="flex flex-col gap-4">
                {events.map((event)=>(
                    <div key={event.id} className="border border-gray-100 rounded-md p-3 border-t-4 odd:border-t-blue-200 even:border-t-purple-300">
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-gray-600">{event.title}</h1>
                            <span className="text-xs text-gray-400">{event.time}</span>
                        </div>
                        <p className="mt-2 text-xs text-gray-600">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}