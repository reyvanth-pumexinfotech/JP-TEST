import axiosInstance from "./axiosService";

interface JobData {
  jobName: string;
  jobType: string;
  jobCategory: string;
  jobLevel: string;
  workModel: string;
  workLocation: string;
  requirements: string;
  designation: string;
  experience: string;
  noticePeriod: string;
  jobDate?: string;
  jobIsActive?: boolean;
  jobBg?: number;
}

interface JobApplicationData {
  jobName: string;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  resume: File;
}



export const createJobApi = async (jobData: JobData, token: string) => {
  try {
    const response = await axiosInstance.post("/createjob", jobData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating job:", error);
    throw error;
  }
};


export const getJobByIdApi = async (jobId: string) => {
  try {
    const response = await axiosInstance.get(`/getonejob/${jobId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching job:", error);
    throw error;
  }
};


//Get All Jobs
export const getAllJobsApi = async () => {
  try {
    const response = await axiosInstance.get("/getjobs"); // No token needed
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};


export const getActiveJobsApi = async () => {
  try {
    const response = await axiosInstance.get("/getactivejobs"); // No token needed
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};


export const applyForJobApi = async (applicationData: JobApplicationData) => {
  try {
    const formData = new FormData();
    formData.append('jobName', applicationData.jobName);
    formData.append('fullName', applicationData.fullName);
    formData.append('emailAddress', applicationData.emailAddress);
    formData.append('phoneNumber', applicationData.phoneNumber);
    formData.append('resume', applicationData.resume);

    const response = await axiosInstance.post('/applyForJob', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting job application:', error);
    throw error;
  }
};