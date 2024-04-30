import { useParams } from "react-router-dom";
import * as apiClient from "../api-client";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import { HotelType } from "../../../backend/src/shared/types";
import { useQuery } from "react-query";
import { useMutation } from "react-query";
import { useAppContext } from "../context/AppContext";

const EditHotel = () => {
  const { showToast } = useAppContext();
  const { hotelId } = useParams<{ hotelId: string }>();

  const { data: hotel } = useQuery<HotelType>(
    "fetchMyHotelById",
    () => apiClient.fetchMyHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  const { mutate, isLoading } = useMutation(apiClient.updateMyHotelById, {
    onSuccess: () => {
      showToast({ message: "Hotel updated successfully", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Failed to update hotel", type: "ERROR" });
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };

  return (
    <ManageHotelForm hotel={hotel} onSave={handleSave} isLoading={isLoading} />
  );
};

export default EditHotel;
