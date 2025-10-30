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
    title: 'Resume Generator (NLP)',
    description:
      'AI-powered resume generation using NLP to transform raw inputs into polished resumes. Focus on prompt engineering, text ranking, and consistency checks.',
    tags: ['Python', 'NLP', 'LLMs', 'Prompt Engineering'],
    links: [
      { label: 'View Code', href: 'https://github.com/kkuc100/resume_generator' }
    ]
  },
  {
    title: 'GPS Converter (ECEF Velocity)',
    description:
      'Compute ECEF velocities from LLA CSV data for geospatial analysis. Includes robust parsing, vectorized math, and reproducible CLI.',
    tags: ['Python', 'NumPy', 'Geospatial'],
    links: [
      { label: 'View Code', href: 'https://github.com/kkuc100/lla_ecef_coding_challenge' }
    ]
  },
  {
    title: 'Project Happy (Analytics + Viz)',
    description:
      'Explores factors influencing national happiness with interactive visualizations and data storytelling based on WHR data.',
    tags: ['Analytics', 'Visualization', 'Dashboards'],
    links: [
      { label: 'Live Demo', href: 'https://apps-spring.ischool.berkeley.edu/project_happy/' }
    ]
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
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
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


