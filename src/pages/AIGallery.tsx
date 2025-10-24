import React from 'react'
import { Container, Typography, Box, Grid, Paper } from '@mui/material'
import { getImagePath } from '../utils/imageUtils'

const AIGallery: React.FC = () => {
  // Pre-calculate image paths to ensure they're evaluated at runtime
  const getImageSrc = (path: string) => getImagePath(path)

  const aiImages = [
    {
      src: getImageSrc('/img/DALL-E/coffee_shop_working.png'),
      title: 'Coffee Shop Working',
      description: 'AI-generated image of a productive workspace in a cozy coffee shop',
    },
    {
      src: getImageSrc('/img/DALL-E/electric_bike.png'),
      title: 'Electric Bike',
      description: 'Modern electric bike design showcasing sustainable transportation',
    },
    {
      src: getImageSrc('/img/DALL-E/happy_software_engineer.png'),
      title: 'Happy Software Engineer',
      description: 'Portrait of a satisfied software engineer celebrating successful code',
    },
    {
      src: getImageSrc('/img/DALL-E/hiker.png'),
      title: 'Hiker',
      description: 'AI-generated image of an adventurous hiker exploring nature trails',
    },
    {
      src: getImageSrc('/img/DALL-E/logo_website.png'),
      title: 'Website Logo',
      description: 'Creative logo design for web development and digital presence',
    },
    {
      src: getImageSrc('/img/DALL-E/ML_architecture.png'),
      title: 'ML Architecture',
      description: 'Visual representation of machine learning system architecture',
    },
    {
      src: getImageSrc('/img/DALL-E/runner.png'),
      title: 'Runner',
      description: 'Dynamic image of a runner in motion, representing perseverance',
    },
    {
      src: getImageSrc('/img/DALL-E/tokyo.png'),
      title: 'Tokyo',
      description: 'AI-generated cityscape of Tokyo with its vibrant urban landscape',
    },
    {
      src: getImageSrc('/img/DALL-E/triathlon.png'),
      title: 'Triathlon',
      description: 'Multi-sport athlete competing in a challenging triathlon event',
    },
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumb */}
      <Box sx={{ mb: 4, py: 2, backgroundColor: '#f3f8fa' }}>
        <Typography variant="h4" gutterBottom>
          AI Gallery
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Home / AI Gallery
        </Typography>
      </Box>

      {/* Gallery Description */}
      <Paper sx={{ p: 4, mb: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          AI-Generated Art Gallery
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Explore a collection of AI-generated images created using DALL-E and other cutting-edge AI technologies. 
          These images represent the intersection of artificial intelligence and creative expression.
        </Typography>
      </Paper>

      {/* Image Grid */}
      <Grid container spacing={3}>
        {aiImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                overflow: 'hidden',
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                },
              }}
            >
              <Box
                component="img"
                src={image.src}
                alt={image.title}
                sx={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'https://via.placeholder.com/400x250?text=Image+Not+Found'
                }}
              />
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {image.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {image.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

    </Container>
  )
}

export default AIGallery
