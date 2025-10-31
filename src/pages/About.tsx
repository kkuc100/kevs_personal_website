import React from 'react'
import { Container, Typography, Box, Grid, Paper } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import { getImagePath } from '../utils/imageUtils'

const About: React.FC = () => {
  const theme = useTheme()
  const canadaImagePath = getImagePath('/img/canada.jpg')

  const facts = [
    { number: 5, label: 'Clients' },
    { number: 37, label: 'Projects' },
    { number: 320, label: 'Project Hours Worked' },
    { number: 27, label: 'Masters of Data Science Credits' },
  ]

  const achievements = [
    'Master of Information and Data Science from UC Berkeley, specializing in machine learning and production ML systems',
    'Bachelor of Science in Mechanical Engineering with Mathematics minor from the University of Alabama, providing strong analytical foundations',
    'Built production ML systems: XGBoost model on AWS SageMaker for real estate predictions, RAG applications for legal document analysis, and decentralized AI platforms with blockchain integration',
    'Developed deep learning models: LSTM achieving 92% accuracy for diabetic patient readmission prediction, BERT-based NLP models for sentiment analysis, and transformer architectures for various NLP tasks',
    'Full-stack development experience: React/TypeScript frontends, FastAPI backends, serverless AWS architectures, and smart contract development on Ethereum/Arbitrum',
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 4, marginTop: '80px' }}>
      {/* Breadcrumb */}
      <Box
        sx={{
          mb: 4,
          py: 4,
          px: 3,
          borderRadius: 2,
          background: 'linear-gradient(90deg, rgba(124,58,237,0.18) 0%, rgba(6,182,212,0.12) 100%)',
          border: '1px solid rgba(148,163,184,0.12)'
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
          About Me
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Home / About Me
        </Typography>
      </Box>

      {/* About Section */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={canadaImagePath}
            alt="Kevin Kuc - Data Scientist and AI Engineer professional photo"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
            About Me
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.7 }}>
            I'm a senior data scientist building production ML systems and AI applications. My background spans machine learning, NLP, and full-stack development, with experience deploying models to production and creating end-to-end data science solutions.
          </Typography>
          <Box>
            {achievements.map((achievement, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <CheckCircle sx={{ color: theme.palette.primary.main, mr: 2, mt: 0.5, flexShrink: 0 }} />
                <Typography variant="body2">
                  {achievement}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Facts Section */}
      <Paper sx={{ p: 4, mb: 6, backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(148,163,184,0.12)' }}>
        <Grid container spacing={4}>
          {facts.map((fact, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: '48px',
                    color: theme.palette.primary.light,
                    fontWeight: 'bold',
                  }}
                >
                  {fact.number}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '14px', color: 'text.secondary' }}>
                  {fact.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  )
}

export default About
