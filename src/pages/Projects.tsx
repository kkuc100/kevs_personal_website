import React from 'react'
import { Container, Typography, Box, Grid, Card, CardContent, CardActions, Button, Chip, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'

type Project = {
  title: string
  description: string
  tags: string[]
  links: { label: string; href: string }[]
}

const projects: Project[] = [
  {
    title: 'RAGMint - Decentralized AI Platform',
    description:
      'Full-stack decentralized AI platform with token-based payments on Arbitrum L2. Integrates multiple LLMs (Llama 3, Claude 3.5 Sonnet, Amazon Nova) via AWS Bedrock, with React Native mobile apps, FastAPI backend, and Solidity smart contracts.',
    tags: ['Blockchain', 'LLMs', 'React Native', 'FastAPI', 'Solidity', 'AWS Bedrock', 'Arbitrum'],
    links: []
  },
  {
    title: 'Real Estate Market Analysis',
    description:
      'Production ML system predicting property days on market using XGBoost deployed on AWS SageMaker. Serverless architecture with React frontend, Lambda proxy, and real-time predictions via API Gateway. Handles multi-source data integration from Zillow and Realtor.com APIs.',
    tags: ['XGBoost', 'AWS SageMaker', 'Lambda', 'React', 'MLOps', 'Time Series'],
    links: []
  },
  {
    title: 'Lawyer RAG Application',
    description:
      'Retrieval-Augmented Generation system for legal document analysis. React/TypeScript frontend with Firebase auth, AWS S3 document storage, and AI chatbot with multiple instruction modes (Research, Client Communication, Paralegal Support). Role-based access control.',
    tags: ['RAG', 'React', 'Firebase', 'AWS S3', 'NLP', 'TypeScript', 'Redux'],
    links: []
  },
  {
    title: 'ClearanceAI - DISS Management',
    description:
      'AI-powered security clearance management system for Defense Information System for Security (DISS). Features intelligent clearance recommendations, incident tracking, investigation deadline calculations, and multi-source CSV data integration with UUID-based linking.',
    tags: ['React', 'TypeScript', 'AI Recommendations', 'Data Integration', 'Security'],
    links: []
  },
  {
    title: 'Resume Generator',
    description:
      'AI-powered resume generation using NLP and LLMs. Transforms raw career information into polished resumes through advanced prompt engineering, text ranking algorithms, and consistency validation.',
    tags: ['Python', 'NLP', 'LLMs', 'Prompt Engineering'],
    links: [
      { label: 'View Code', href: 'https://github.com/kkuc100/resume_generator' }
    ]
  },
  {
    title: 'GPS Converter (ECEF Velocity)',
    description:
      'Geospatial analysis tool computing Earth-Centered, Earth-Fixed (ECEF) velocities from LLA CSV data. Features vectorized NumPy operations, robust data parsing, and reproducible CLI interface for batch processing.',
    tags: ['Python', 'NumPy', 'Geospatial', 'Data Processing'],
    links: [
      { label: 'View Code', href: 'https://github.com/kkuc100/lla_ecef_coding_challenge' }
    ]
  },
  {
    title: 'Project Happy',
    description:
      'Interactive data visualization platform exploring factors influencing national happiness. Built on World Happiness Report data with engaging visualizations and data storytelling techniques for educational insights.',
    tags: ['Analytics', 'Visualization', 'Dashboards', 'Data Storytelling'],
    links: []
  }
]

const Projects: React.FC = () => {
  const theme = useTheme()

  return (
    <Container maxWidth="lg" sx={{ py: 4, marginTop: '80px' }}>
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
          Projects
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Problem → Approach → Results, with links to code and demos
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))',
                boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
                borderRadius: '14px',
                border: '1px solid rgba(148,163,184,0.12)'
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h6" gutterBottom sx={{ mb: 0, flex: 1 }}>
                    {project.title}
                  </Typography>
                  <Chip
                    label={project.links.length > 0 ? 'Public' : 'Private'}
                    size="small"
                    sx={{
                      backgroundColor: project.links.length > 0 
                        ? 'rgba(6,182,212,0.15)' 
                        : 'rgba(148,163,184,0.15)',
                      color: project.links.length > 0 
                        ? theme.palette.secondary.light 
                        : theme.palette.text.secondary,
                      borderColor: project.links.length > 0 
                        ? theme.palette.secondary.main 
                        : 'rgba(148,163,184,0.35)',
                      ml: 1,
                      height: '24px',
                      fontSize: '0.7rem',
                      fontWeight: 600
                    }}
                    variant="outlined"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(124,58,237,0.12)',
                        color: theme.palette.primary.light,
                        borderColor: 'rgba(124,58,237,0.35)'
                      }}
                      variant="outlined"
                    />
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Stack direction="row" spacing={1}>
                  {project.links.map((l) => (
                    <Button
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.light,
                        '&:hover': {
                          borderColor: theme.palette.primary.main,
                          backgroundColor: 'rgba(124,58,237,0.12)'
                        }
                      }}
                    >
                      {l.label}
                    </Button>
                  ))}
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Projects


