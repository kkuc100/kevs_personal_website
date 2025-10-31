import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Stack } from '@mui/material'
import { SmartToy, TrendingUp, Gavel, Psychology } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import { getImagePath } from '../utils/imageUtils'

const Home: React.FC = () => {
  const theme = useTheme()
  const heroBgPath = getImagePath('/img/hero-bg.jpg')

  const featuredProjects = [
    {
      icon: <SmartToy />,
      title: 'RAGMint - Decentralized AI Platform',
      description: 'Full-stack decentralized AI platform with token-based payments on Arbitrum L2. Integrates multiple LLMs via AWS Bedrock, with React Native mobile apps, FastAPI backend, and Solidity smart contracts.',
      link: '',
    },
    {
      icon: <TrendingUp />,
      title: 'Real Estate Market Analysis',
      description: 'Production ML system predicting property days on market using XGBoost deployed on AWS SageMaker. Serverless architecture with React frontend, Lambda proxy, and real-time predictions via API Gateway.',
      link: '',
    },
    {
      icon: <Gavel />,
      title: 'Lawyer RAG Application',
      description: 'Retrieval-Augmented Generation system for legal document analysis. React/TypeScript frontend with Firebase auth, AWS S3 document storage, and AI chatbot with multiple instruction modes.',
      link: '',
    },
    {
      icon: <Psychology />,
      title: 'ClearanceAI - DISS Management',
      description: 'AI-powered security clearance management system with intelligent recommendations, incident tracking, and multi-source CSV data integration with UUID-based linking.',
      link: '',
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
          {featuredProjects.map((project, index) => (
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
                      {project.icon}
                    </Box>
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                {project.link && (
                  <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <Button
                      href={project.link}
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
