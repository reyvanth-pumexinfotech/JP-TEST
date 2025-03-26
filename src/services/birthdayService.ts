import axiosInstance from './axiosService';

// Define the interface for birthday data
export interface Birthday {
  Bno: number;
  name: string;
  email: string;
  birthday: string;
}

// Define the API function to get all birthdays
export const getAllBirthdaysApi = async (): Promise<Birthday[]> => {
  try {
    const response = await axiosInstance.get('/birthdays');
    return response.data; // Returns the list of birthdays
  } catch (error) {
    console.error('Error fetching birthdays:', error);
    throw error;
  }
};

// Define the API function to add a new birthday
export const addBirthdayApi = async (birthdayData: Birthday): Promise<Birthday> => {
  try {
    const response = await axiosInstance.post('/create-birthday', birthdayData);
    return response.data; // Returns the created birthday
  } catch (error) {
    console.error('Error adding birthday:', error);
    throw error;
  }
};

// Define the API function to delete a birthday
export const deleteBirthdayApi = async (Bno: number): Promise<{ success: boolean }> => {
  try {
    const response = await axiosInstance.delete(`/deletebirthdays/${Bno}`);
    return response.data; // Returns success message or deleted user info
  } catch (error) {
    console.error('Error deleting birthday:', error);
    throw error;
  }
};
