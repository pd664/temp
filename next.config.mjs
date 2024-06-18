import { config } from 'dotenv';
import path from 'path';

// Determine which .env file to load based on NODE_ENV
let envFileName = '.env.development'; // Default to development
if (process.env.NODE_ENV === 'production') {
    console.log('Loading .env.production');
    envFileName = '.env.production';
} else if (process.env.NODE_ENV === 'staging') {
    console.log('Loading .env.staging');
    envFileName = '.env.staging';
}

// Load the appropriate .env file
const envFilePath = path.resolve(process.cwd(), envFileName);
config({ path: envFilePath });

// Define the Next.js configuration
const nextConfig = {
    reactStrictMode: true,
    env: {
        backendHost: process.env.SS_BACKEND_HOST,
        NEXTAUTH_SECRET:process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
        NEXTAUTH_URL:process.env.NEXT_PUBLIC_NEXTAUTH_URL,

        GOOGLE_CLIENT_ID:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,

        REDIRECT_URL_SUCCESS:process.env.NEXT_PUBLIC_REDIRECT_URL_SUCCESS,
        BACKEND_URL:process.env.NEXT_PUBLIC_BACKEND_URL,
    },
};

export default nextConfig;
