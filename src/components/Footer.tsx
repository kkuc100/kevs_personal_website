import React from 'react'
import { Box, Container, Typography, Link, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const Footer: React.FC = () => {
  const theme = useTheme()

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0b212d',
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.light }}>
              Useful Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light } }}>
                Home
              </Link>
              <Link href="/about" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light } }}>
                About
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.light }}>
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/contact" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light } }}>
                Web Design
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.light }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Holly Ridge, NC<br />
              United States
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Email:</strong> kkuc234@gmail.com
            </Typography>
            <Link 
              href="https://github.com/kkuc100/personal_projects" 
              color="inherit" 
              sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light } }}
            >
              GitHub
            </Link>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: '1px solid #17455e', mt: 3, pt: 2, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant="body2">
            © Copyright <strong>Kevin Kuc</strong>. All Rights Reserved
          </Typography>
          <Typography variant="body2">
            Designed by{' '}
            <Link 
              href="https://www.linkedin.com/in/kevinkuc" 
              color="inherit" 
              sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light } }}
            >
              Kevin Kuc
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
