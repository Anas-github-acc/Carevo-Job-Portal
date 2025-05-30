import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// Configure Cloudinary with performance optimization settings
console.log('cloud name = ', process.env.CLOUD_NAME)

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true, // Use HTTPS
    timeout: 60000, // 60 seconds global timeout
});

export default cloudinary;
