import { HotelType } from "../../../backend/src/shared/types";

type Props = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  numberOfNights: number;
  hotel: HotelType;
};

const BookingDetailsSummary = ({
  checkIn,
  checkOut,
  adultCount,
  childCount,
  numberOfNights,
  hotel,
}: Props) => {
  return (
    <div className="grid gap-4 rounded-lg border border-light-gray p-5 h-fit">
      <h2 className="text-2xl font-bold">Your booking details</h2>
      <div className="border-b py-2 border-light-gray">
        Location:
        <div className="font-bold">
          {hotel.name}, {hotel.city}, {hotel.country}
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          Check-in
          <div className="font-bold">{checkIn.toDateString()}</div>
        </div>
        <div>
          Check-out
          <div className="font-bold">{checkOut.toDateString()}</div>
        </div>
      </div>
      <div className="border-t border-b py-2 border-light-gray">
        Total length of stay:
        <div className="font-bold">{numberOfNights} nights</div>
      </div>
      <div>
        Guests:
        <div className="font-bold">
          {adultCount} adults, {childCount} children
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsSummary;
