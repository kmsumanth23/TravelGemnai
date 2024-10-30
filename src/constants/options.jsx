export const tripDestinations = [
    {
      id: 1,
      title: "Solo Adventure",
      desc: "A solo traveler's journey of exploration and self-discovery.",
      icon: "🎒",
      people: 1
    },
    {
      id: 2,
      title: "Family Vacation",
      desc: "An exciting family trip filled with fun and bonding moments.",
      icon: "👨‍👩‍👧‍👦",
      people: 4
    },
    {
      id: 3,
      title: "Couple's Getaway",
      desc: "A romantic escape for couples looking to spend quality time together.",
      icon: "💑",
      people: 2
    },
    {
      id: 4,
      title: "Road Trip with Friends",
      desc: "A memorable road trip adventure for your Buddies",
      icon: "🚗",
      people: 5
    }
  ];
  
  

  export const budgetOptions = [
    {
      id: 1,
      title: "Cheap",
      desc: "Affordable options for budget-conscious travelers, ensuring you get the most value for your money.",
      icon: "💸"
    },
    {
      id: 2,
      title: "Moderate",
      desc: "A balanced budget for those seeking comfort and quality without breaking the bank.",
      icon: "💵"
    },
    {
      id: 3,
      title: "Luxury",
      desc: "Premium experiences for travelers who want to indulge in the finest accommodations and services.",
      icon: "💎"
    }
  ];
  

  export const AI_PROMPT = 'Generate Travel Plan for Location : {location}, for {totalDays} Days for {People} with a {Budget} budget,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format:'