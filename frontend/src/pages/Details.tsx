import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "./../api-client";
import { AiFillStar } from "react-icons/ai";
import GuestInfoForm from "../forms/GuestInfoForm/GuestInfoForm";

const Details = () => {
  const { hotelId } = useParams();

  const { data: hotelData } = useQuery(
    "fetchHotelById",
    () => apiClient.fetchHotelById(hotelId as string),
    { enabled: !!hotelId }
  );

  if (!hotelData) return <></>;

  return (
    <div className="space-y-6">
      <div>
        <span className="flex">
          {Array.from({ length: hotelData.starRating }).map(() => (
            <AiFillStar className="fill-[#FFD700]" />
          ))}
        </span>
        <h1 className="text-3xl font-bold">{hotelData.name}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {hotelData.imageUrls.map((image) => (
          <div className="h-[300px]">
            <img
              src={image}
              alt={hotelData.name}
              className="rounded-md w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        {hotelData.facilities.map((facility) => (
          <div className="border border-gray rounded-lg p-3">{facility}</div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="whitespace-pre-line">{hotelData.description}</div>
        <div className="h-fit">
          <GuestInfoForm
            pricePerNight={hotelData.pricePerNight}
            hotelId={hotelData._id}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
