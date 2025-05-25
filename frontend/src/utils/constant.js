// API Base URL configuration
// In development: VITE_API_URL will be http://localhost:8000
// In production: VITE_API_URL will be your production backend URL (e.g., https://api.yourdomain.com)
const API_BASE_URL = import.meta.env.VITE_API_URL;

// If API_BASE_URL is not set, throw an error to make it clear that the environment variable is required
if (!API_BASE_URL) {
    throw new Error('VITE_API_URL environment variable is not set. Please check your .env file and Vercel environment variables.');
}

export const USER_API_END_POINT = `${API_BASE_URL}/api/v1/user`;
export const JOB_API_END_POINT = `${API_BASE_URL}/api/v1/job`;
export const APPLICATION_API_END_POINT = `${API_BASE_URL}/api/v1/application`;
export const COMPANY_API_END_POINT = `${API_BASE_URL}/api/v1/company`; 