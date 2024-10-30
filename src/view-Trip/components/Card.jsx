import { Button } from "@/components/ui/button";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GloabalApi";
import { useEffect, useState } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


/* eslint-disable react/prop-types */
const Card = ({ place }) => {

    const [photoUrl, setPhotoUrl] = useState()

    useEffect(() => {
        place && GetPlacePhoto();
    },[place])

    const GetPlacePhoto = async () => {
        const data = {
            textQuery:place.placeName
        }
        // eslint-disable-next-line no-unused-vars
        const result = await GetPlaceDetails(data).then(res => {
            // console.log(res.data.places[0].photos[3].name);

            const photourl= PHOTO_REF_URL.replace('{NAME}',res.data.places[0].photos[3].name)
            setPhotoUrl(photourl);
            
        })
    }
    
    return (
        <Link to={"https://www.google.com/maps/search/?api=1&query="+place?.placeName} target="_blank">
            <div className="flex gap-3">
                <img src={photoUrl} className="w-[110px] h-[150px] object-cover rounded-md" />

                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-xl line-clamp-1">{place.placeName}</h2>
                    <h2 className="line-clamp-2 text-gray-500">{place.placeDetails}</h2>
                    {/* <h2 className="line-clamp-2 font-semibold text-gray-800">Ticket: {place.ticketPricing}</h2> */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="font-semibold line-clamp-1">⏳ {place.timeTravel}</h2>
                             <h2 className="font-semibold">⭐ {place.rating}</h2>
                        </div>
                        <Button>
                            <FaMapMarkedAlt className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;