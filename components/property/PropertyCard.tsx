import { PropertyCardProps } from "@/interfaces";
import { RiStarFill } from "react-icons/ri";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { PiSealPercentFill } from "react-icons/pi";


const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-transparent rounded-xl  hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        {property.discount && (
          <div className="flex items-center gap-2 absolute top-3 left-0 bg-green-500 text-white pl-1 pr-4 py-1 rounded-md text-lg font-semibold">
            <PiSealPercentFill className="w-6 h-6" />
            <p>{property.discount}% Off</p>
          </div>
        )}

        <div className="flex flex-wrap gap-1">
            {property.category.slice(0, 5).map((cat, index) => (
              <span key={index} className="text-sm bg-gray-100 text-gray-900 px-2 py-1 rounded-full">
                {cat}
              </span>
            ))}
          </div>
      </div>

      <div className="p-4 ">
        <div className="flex items-center justify-between">
          <div className=" mb-2">
            <h3 className="font-bold  text-xl md:text-2xl ">{property.name}</h3>
          </div>
          <div className="flex items-center gap-1 ml-2">
            <RiStarFill className=" w-4 h-4 fill-yellow-500 texty" />
            <span className="text-sm font-medium">{property.rating}</span>
          </div>
        </div>
        <p className="text-sm text-black font-medium">
          {property.address.city}, {property.address.country}
        </p>

        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-4 text-sm text-gray-900 my-3 border-2 px-4  py-2 rounded-full">
            <div className="flex items-center gap-1">
              <IoBed className="w-6 h-6" />
              <span>{property.offers.bed}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaBath className="w-6 h-6" />
              <span>{property.offers.shower}</span>
            </div>
            <div className="flex items-center gap-1">
              <HiUsers className="w-6 h-6" />
              <span>{property.offers.occupants}</span>
            </div>
          </div>

          <div>
            <span className="font-semibold">${property.price}/Night</span>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default PropertyCard;
