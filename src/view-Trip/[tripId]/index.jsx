import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/hotels";
import ToVisit from "../components/ToVisit";
import Header from "@/components/custom/Header";

const ViewTrip = () => {

  const { tripId } = useParams();
  const [trip, setTrip] = useState([])

  // Used to get Trip info from Firebase

  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document", docSnap.data());
      console.log(docSnap.data());
      setTrip(docSnap.data());

    } else {
      console.log("No such Document");
      toast("No trip Found")
    }
  }

  useEffect(() => {
    tripId && GetTripData();
  }, [tripId])

  return (
    <>
      <Header />
      <div className="p-5 md:px-20 lg:px-44 xl:px-56 border">
        <InfoSection trip={trip} />
        <Hotels trip={trip} />
        <ToVisit trip={trip} />
      </div>
    </>
  );
};

export default ViewTrip;