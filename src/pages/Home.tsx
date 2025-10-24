import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material'
import { Description, Public, EmojiEmotions, Code } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

const Home: React.FC = () => {
  const theme = useTheme()

  const services = [
    {
      icon: <Description />,
      title: 'Resume Generator',
      description: 'Revolutionize your job application process with our AI-powered Resume Generator, seamlessly transforming your career information into polished, professional resumes through advanced natural language processing and machine learning algorithms.',
      link: 'https://github.com/kkuc100/resume_generator',
      color: '#3fcdc7',
    },
    {
      icon: <Public />,
      title: 'GPS Converter',
      description: 'This Python script simplifies the process of calculating Earth-Centered, Earth-Fixed (ECEF) velocities from latitude, longitude, and altitude (LLA) data in a CSV file, offering users an intuitive solution for geospatial analysis with streamlined functionality and automated task management.',
      link: 'https://github.com/kkuc100/lla_ecef_coding_challenge',
      color: '#3fcdc7',
    },
    {
      icon: <EmojiEmotions />,
      title: 'Project Happy',
      description: 'Our project delves into the various factors influencing happiness levels in countries worldwide. Using interactive visualizations, we create an educational platform to explore the correlations between happiness and socio-economic factors, based on data from the esteemed World Happiness Report (WHR).',
      link: 'https://apps-spring.ischool.berkeley.edu/project_happy/',
      color: '#41cf2e',
    },
    {
      icon: <Code />,
      title: 'Future Project',
      description: 'Future projects will unfold through a dynamic fusion of cutting-edge technologies, collaborative problem-solving, and a relentless pursuit of innovation, ensuring a continuous evolution toward impactful solutions.',
      link: '',
      color: '#2282ff',
    },
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(to right, rgba(30, 67, 86, 0.8), rgba(30, 67, 86, 0.6)), url('./assets/img/hero-bg.jpg') center top no-repeat`,
          backgroundSize: 'cover',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: '50%',
            top: 0,
            width: '130%',
            height: '96%',
            background: theme.palette.primary.main,
            opacity: 0.3,
            zIndex: 0,
            borderRadius: '0 0 50% 50%',
            transform: 'translateX(-50%) translateY(18px) rotate(2deg)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            left: '50%',
            top: 0,
            width: '130%',
            height: '95%',
            background: `linear-gradient(to right, rgba(30, 67, 86, 0.8), rgba(30, 67, 86, 0.6)), url('./assets/img/hero-bg.jpg') center top no-repeat`,
            zIndex: 0,
            borderRadius: '0 0 50% 50%',
            transform: 'translateX(-50%) rotate(0deg)',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              mb: 4,
              fontSize: { xs: '30px', md: '48px' },
            }}
          >
            Welcome to <span style={{ color: theme.palette.primary.main }}>Kevin Kuc's Portfolio</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              maxWidth: '80%',
              mx: 'auto',
              fontSize: { xs: '16px', md: '18px' },
            }}
          >
            Welcome to my digital portfolio, a curated collection showcasing the intersection of data science and innovation. I am passionate about leveraging data to uncover insights and drive meaningful decisions.
          </Typography>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(68, 88, 144, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      backgroundColor: service.color === '#3fcdc7' ? '#e6fdfc' : 
                                      service.color === '#41cf2e' ? '#eafde7' : '#e1eeff',
                    }}
                  >
                    <Box sx={{ color: service.color, fontSize: '36px' }}>
                      {service.icon}
                    </Box>
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
                {service.link && (
                  <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <Button
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: service.color,
                        color: service.color,
                        '&:hover': {
                          borderColor: service.color,
                          backgroundColor: service.color,
                          color: 'white',
                        },
                      }}
                    >
                      View Project
                    </Button>
                  </CardActions>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Home
