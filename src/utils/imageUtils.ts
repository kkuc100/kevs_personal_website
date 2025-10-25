// Utility function to get the correct image path based on environment
export const getImagePath = (imagePath: string): string => {
  // In development, BASE_URL is '/'
  // In production, BASE_URL is '/'
  const baseUrl = import.meta.env.BASE_URL
  return `${baseUrl}${imagePath.substring(1)}`
}
