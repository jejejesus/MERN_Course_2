import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const TypeSection = () => {
    const {
        register,
        watch,
        formState: { errors },
    } = useFormContext<HotelFormData>();
    const typeWatch = watch("type");

    return (
        <div>
            <h2 className="text-2xl font-bold mb-3">Type</h2>
            <div className="grid grid-cols-5 gap-2">
                {hotelTypes.map((type) => (
                    <label className={
                        typeWatch === type
                            ? "cursor-pointer bg-dark-pink text-sm rounded-full px-4 py-2 font-semibold"
                            : "cursor-pointer bg-light-gray text-sm rounded-full px-4 py-2 font-semibold"
                    }>
                        <input type="radio" className="mr-2 hidden"
                        value={type}
                        {...register("type", { required: "This field is required" })}/>
                        <span>{type}</span>
                    </label>
                ))}
            </div>
            {errors.type && (<span className="text-gray font-semibold"><strong>!</strong> {errors.type.message}</span>)}
        </div>
    );
};

export default TypeSection;