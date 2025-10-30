import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Stack } from '@mui/material'
import { Description, Public, EmojiEmotions, Code } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import { getImagePath } from '../utils/imageUtils'

const Home: React.FC = () => {
  const theme = useTheme()
  const heroBgPath = getImagePath('/img/hero-bg.jpg')

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
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          background: `linear-gradient(90deg, rgba(12,14,24,0.9) 0%, rgba(17,24,39,0.85) 40%, rgba(124,58,237,0.18) 100%), url('${heroBgPath}') center top no-repeat`,
          backgroundSize: 'cover',
          position: 'relative',
          overflowX: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '80px',
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
            Building Intelligent Systems with Data
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
            I’m Kevin, a senior data scientist focused on NLP, predictive modeling, and production ML. I turn raw data into deployable, measurable impact.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4, justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              href="https://github.com/kkuc100"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </Button>
            <Button
              variant="contained"
              color="secondary"
              href="https://www.linkedin.com/in/kevinkuc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Featured Projects Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          {services.slice(0, 2).map((service, index) => (
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
                    boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
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
                      backgroundColor: 'rgba(124,58,237,0.12)',
                    }}
                  >
                    <Box sx={{ color: theme.palette.primary.light, fontSize: '36px' }}>
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
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.light,
                        '&:hover': {
                          borderColor: theme.palette.primary.main,
                          backgroundColor: 'rgba(124,58,237,0.12)',
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
        <Stack direction="row" justifyContent="center" sx={{ mt: 4 }}>
          <Button
            variant="outlined"
            color="primary"
            href="/projects"
          >
            View all projects
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Home
