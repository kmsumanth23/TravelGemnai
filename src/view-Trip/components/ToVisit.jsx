import Card from "./Card";

/* eslint-disable react/prop-types */
const ToVisit = ({ trip }) => {
    return (
        <div>
            <h1 className="font-bold text-2xl mt-5">Places to Visit</h1>
            <div className="flex flex-col gap-5">
                {
                    trip?.tripData?.itinerary.map((item, index) => (
                        <div key={index} className="p-2">
                            <h1 className="font-bold text-xl">Day: {item.day}</h1>
                            <h1 className="font-semibold">Best Time to Visit: {item.best_time_to_visit}</h1>
                            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-5 rounded-md">
                                {
                                    item.plan.map((place, index) => (
                                        <div key={index} className="border hover:scale-105 hover:shadow-md hover:shadow-slate-600 transition-all cursor-pointer  rounded-md border-gray-300 p-3 mt-3">
                                            <Card place={place} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    );
};

export default ToVisit;