import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const ImagesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Images</h2>
      <div className="border border-light-gray rounded p-4 flex flex-col gap-4">
        <input
          type="file"
          className="w-full text-light-gray font-normal"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              if (imageFiles.length === 0)
                return "At least one image is required";
              if (imageFiles.length > 6) return "Maximum of 6 images allowed";
              return true;
            },
          })}
          multiple
          accept="image/*"
        />
      </div>
      {errors.imageFiles && (
        <span className="text-gray font-semibold">
          <strong>!</strong> {errors.imageFiles.message}
        </span>
      )}
    </div>
  );
};

export default ImagesSection;
