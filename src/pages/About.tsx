import React from 'react'
import { Container, Typography, Box, Grid, Paper, LinearProgress } from '@mui/material'
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

  const skills = [
    { name: 'Python', level: 95 },
    { name: 'Hugging Face', level: 85 },
    { name: 'MySQL', level: 75 },
    { name: 'React', level: 90 },
  ]

  const achievements = [
    'Master of Information and Data Science from the University of California, Berkeley',
    'Bachelor of Science in Mechanical Engineering with a Mathematics minor from the University of Alabama',
    'Applied Machine Learning projects including engineered a Long Short-Term Memory (LSTM) Model achieving 92% accuracy in predicting diabetic patient readmission rates. Trained a BERT-based NLP model for accurate sentiment analysis of movie reviews.',
    'Skills: Python, R, SQL, HTML, CSS, Java, Javascript, neural networks, TensorFlow, PyTorch, Keras, data analysis, and more.',
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
            Explore My Professional Journey
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3, color: 'text.secondary' }}>
            Delve into my diverse experience and achievements across education, projects, and professional roles, highlighting a passion for innovation and problem-solving.
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

      {/* Skills Section */}
      <Paper sx={{ p: 4, backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(148,163,184,0.12)' }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          My Skills
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 4, maxWidth: '800px', mx: 'auto' }}>
          With a relentless pursuit of excellence, I have honed a versatile skill set that empowers me to navigate the complex landscape of data science, engineering, and innovation. My commitment to staying at the forefront of technological advancements allows me to seamlessly integrate theoretical knowledge with hands-on expertise. Let's explore the intricacies of my proficiency:
        </Typography>
        
        <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
          {skills.map((skill, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                  {skill.name}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  {skill.level}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: 'rgba(148,163,184,0.18)',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Paper>
    </Container>
  )
}

export default About
