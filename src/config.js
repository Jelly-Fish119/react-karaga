// Environment variables are automatically loaded by Create React App
const config = {
  // Get environment from Vite's environment variables
  nodeEnv: import.meta.env.VITE_NODE_ENV || 'development',
  // Set backend URL based on environment
  backendUrl: import.meta.env.VITE_NODE_ENV === 'production'
    ? import.meta.env.VITE_BACKEND_URL_PROD
    : import.meta.env.VITE_BACKEND_URL_DEV
};

// Log configuration in development
if (config.nodeEnv === 'development') {
  console.log('Config:', config);
}

export default config; 