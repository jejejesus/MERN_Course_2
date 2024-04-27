import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold mb-3">Facilities</h2>
      <div className="grid grid-cols-5 gap-3">
        {hotelFacilities.map((facility) => (
          <label className="text-sm flex gap-1 text-dark-gray">
            <input
              type="checkbox"
              className="accent-dark-pink"
              value={facility}
              {...register("facilities", {
                required: "This field is required",
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) return true;
                  else return "Select at least one facility";
                },
              })}
            />
            <span>{facility}</span>
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-gray font-semibold">
          <strong>!</strong> {errors.facilities.message}
        </span>
      )}
    </div>
  );
};

export default FacilitiesSection;
