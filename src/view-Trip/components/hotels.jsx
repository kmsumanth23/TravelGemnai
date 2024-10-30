/* eslint-disable react/jsx-key */
// import { Link } from "react-router-dom";
import HotelCard from "./HotelCard";

/* eslint-disable react/prop-types */
const Hotels = ({ trip }) => {
    return (
        <div>
            <h1 className="font-bold text-2xl mt-5 mb-2">Recommend Hotels</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 py-2">
                {
                    trip?.tripData?.hotel_options?.map((hotel) => (
                        <HotelCard hotel={hotel} />
                    ))
                }
            </div>
        </div>
    );
};

export default Hotels;