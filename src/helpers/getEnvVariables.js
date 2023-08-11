export const getEnvVariables = () => {

    return {
        VITE_API_RESTAURANT_URL: import.meta.env.VITE_API_RESTAURANT_URL,
        VITE_API_PRODUCTS_URL: import.meta.env.VITE_API_PRODUCTS_URL,
    }

}
