/* eslint-disable react/prop-types */
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GloabalApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HotelCard = ({ hotel }) => {
    const [photoUrl, setPhotoUrl] = useState()

    useEffect(() => {
        hotel && GetPlacePhoto();
    },[hotel])

    const GetPlacePhoto = async () => {
        const data = {
            textQuery:hotel?.name
        }
        // eslint-disable-next-line no-unused-vars
        const result = await GetPlaceDetails(data).then(res => {
            // console.log(res.data.places[0].photos[3].name);

            const photourl= PHOTO_REF_URL.replace('{NAME}',res.data.places[0].photos[1].name)
            setPhotoUrl(photourl);
            
        })
    }
    return (
        <Link to={"https://www.google.com/maps/search/?api=1&query=" + hotel?.name + "," + hotel?.address} target="_blank">
            <div className="hover:scale-105 transition-all cursor-pointer shadow-md shadow-slate-400 rounded-md">
                <img src={photoUrl} alt="recommend" className="rounded-lg w-full h-[150px] xl:h-[180px] object-cover" />
                <div className="flex flex-col gap-2 px-2 py-1">
                    <h2 className="line-clamp-1 font-medium">{hotel?.name}</h2>
                    {/* <h2 className="line-clamp-2">{hotel.description}</h2> */}
                    <h2 className="line-clamp-1 text-xs text-gray-500">📍{hotel?.address}</h2>
                    <h2 className="text-xs xl:text-sm font-semibold line-clamp-1">💰 {hotel?.price}</h2>
                    <h2 className="text-xs xl:text-sm font-semibold">⭐ {hotel?.rating}</h2>
                </div>
            </div>
        </Link>
    );
};

export default HotelCard;