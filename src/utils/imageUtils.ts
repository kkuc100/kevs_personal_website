// Utility function to get the correct image path based on environment
export const getImagePath = (imagePath: string): string => {
  // In production, we need to account for the base path
  if (import.meta.env.PROD) {
    return `/kevs_personal_website${imagePath}`
  }
  // In development, use the path as-is
  return imagePath
}
