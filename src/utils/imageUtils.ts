// Utility function to get the correct image path based on environment
export const getImagePath = (imagePath: string): string => {
  // Vite automatically handles the base path via BASE_URL
  // Just ensure the path starts with /
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`
  return `${import.meta.env.BASE_URL}${cleanPath.substring(1)}`
}