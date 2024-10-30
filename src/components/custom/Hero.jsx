import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Hero = () => {
    return (
        <div className="flex flex-col items-center md:mx-48 lg:mx-96 gap-9">
            <h1 className="text-center font-semibold text-[32px] md:text-[36px] lg:text-[40px] mt-10">
                <span className="text-[#f56551]">
                    Discover your Next Adventure with YatraGenie AI <br />
                </span>
                Your Perfect Trips, Just a Tap Away!
            </h1>

            <p className="text-center text-sm md:text-base lg:text-lg">
                Plan the perfect getaway with our personalized trip planner. Explore, book, and enjoy your dream vacation.
            </p>

            <Link to={'/create-trip'}>
                <Button>
                    Get Started. It's free
                </Button>
            </Link>

            <img src='/landing.jpg' className='-mt[20]' alt='Landing' />

            {/* Creator details */}
            <div className="flex flex-col items-center mt-10">
                <h2 className="text-center font-semibold text-xl mt-4">
                    Created by Ravi Vishwakarma
                </h2>
                <div className="flex gap-4 mt-2">
                    <a href="https://www.linkedin.com/in/ravi-vishwakarma-b14117227/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                        LinkedIn
                    </a>
                  
                </div>
            </div>
        </div>
    );
};

export default Hero;
