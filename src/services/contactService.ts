import axiosInstance from './axiosService';

interface Contact {
  name: string;
  mobileNum: string;
  email: string;
  message: string;
}

// ✅ Create a new contact
export const createContactApi = async (contactData: Contact): Promise<void> => {
  try {
    await axiosInstance.post('/createcontacts', contactData);
    console.log('Contact created successfully');
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
};

// ✅ Get all contacts
export const getContactsApi = async (): Promise<Contact[]> => {
  try {
    const response = await axiosInstance.get('/getcontacts');
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

// ✅ Delete a contact by ID
export const deleteContactApi = async (id: string): Promise<void> => {
  try {
    await axiosInstance.delete(`/deletecontact/${id}`);
    console.log('Contact deleted successfully');
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};
