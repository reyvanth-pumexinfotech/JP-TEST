import axiosInstance from "./axiosService";

// Type Definitions
interface ImageData {
  imageId: string;
  url: string;
}

interface BackendImagesResponse {
  images: ImageData[];
}

interface UploadImagesResponse {
  images: ImageData[];
}

// Define a more specific type for the delete response
interface DeleteImageResponse {
  success: boolean;
  message?: string;
}

// Team Image Upload API
export const uploadImagesApi = async (
  formData: FormData
): Promise<UploadImagesResponse> => {
  try {
    const response = await axiosInstance.post("/uploadTeamImage", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading images:", error);
    throw error;
  }
};

// Delete Image by ImageId
export const deleteImageApi = async (
  imageId: string
): Promise<DeleteImageResponse> => {
  try {
    const response = await axiosInstance.delete(`/teamImageDelete/${imageId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting image:", error);
    throw error;
  }
};

// Get All Images
export const getImagesApi = async (): Promise<BackendImagesResponse> => {
  try {
    const response = await axiosInstance.get("/getTeamImages");
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

// Get Image by ImageId
export const getImageByIdApi = async (imageId: string): Promise<ImageData> => {
  try {
    const response = await axiosInstance.get(`/getImageById/${imageId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching image by ID:", error);
    throw error;
  }
};
