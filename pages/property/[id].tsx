import { PROPERTYLISTINGSAMPLE } from "@/constants/index"; 
import { useRouter } from "next/router"; 
import PropertyDetail from "@/components/property/PropertyDetail"; 
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";


export default function PropertyPage() { 

    const router = useRouter(); 
    const { id } = router.query; 
    const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id); 

    if (!property) return <div className="min-h-screen flex flex-col  items-center justify-center">
                <p className="mb-14 text-7xl font-extrabold text-gray-900">Property Not Found</p>
                <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300">Go back</button>
            </div>; 

    return ( 
        <div> 
            <PropertyDetail property={property} /> 
        </div> 
    ); 
} 
