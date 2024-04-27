import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const TypeSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Guests</h2>
      <div className="flex gap-5 bg-light-gray p-6 rounded-lg">
        <label className="text-dark-gray text-sm font-semibold flex-1">
          Adults
          <input
            type="number"
            min={1}
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("adultCount", {
              required: "This field is required",
            })}
          ></input>
          {errors.adultCount?.message && (
            <span className="text-gray font-semibold">
              <strong>!</strong> {errors.adultCount?.message}
            </span>
          )}
        </label>

        <label className="text-dark-gray text-sm font-semibold flex-1">
          Children
          <input
            type="number"
            min={0}
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("childCount", {
              required: "This field is required",
            })}
          ></input>
          {errors.childCount?.message && (
            <span className="text-gray font-semibold">
              <strong>!</strong> {errors.childCount?.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default TypeSection;
