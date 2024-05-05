import { hotelFacilities } from "../config/hotel-options-config";

type Props = {
  selectedHotelFacilities: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const HotelFacilitiesFilter = ({
  selectedHotelFacilities,
  onChange,
}: Props) => {
  return (
    <div className="border-b border-gray pb-5">
      <h4 className="text-mb font-semibold mb-2">Facilities</h4>
      {hotelFacilities.map((hotelFacility) => (
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="rounded"
            value={hotelFacility}
            checked={selectedHotelFacilities.includes(hotelFacility)}
            onChange={onChange}
          />
          <span>{hotelFacility}</span>
        </label>
      ))}
    </div>
  );
};

export default HotelFacilitiesFilter;
