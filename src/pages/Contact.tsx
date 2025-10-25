import React from 'react'
import { Container, Typography, Box, Grid, Paper, Card, CardContent } from '@mui/material'
import { LocationOn, Email, Phone } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

const Contact: React.FC = () => {
  const theme = useTheme()

  return (
    <Container maxWidth="lg" sx={{ py: 4, marginTop: '80px' }}>
      {/* Breadcrumb */}
      <Box sx={{ mb: 4, py: 2, backgroundColor: '#f3f8fa' }}>
        <Typography variant="h4" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Home / Contact
        </Typography>
      </Box>

      {/* Contact Section */}
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card sx={{ textAlign: 'center', p: 2 }}>
                <CardContent>
                  <LocationOn sx={{ fontSize: 32, color: theme.palette.primary.main, mb: 1 }} />
                  <Typography variant="h6" gutterBottom>
                    My Address
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Holly Ridge, NC 28445
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card sx={{ textAlign: 'center', p: 2 }}>
                <CardContent>
                  <Email sx={{ fontSize: 32, color: theme.palette.primary.main, mb: 1 }} />
                  <Typography variant="h6" gutterBottom>
                    Email Me
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    kkuc234@gmail.com
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card sx={{ textAlign: 'center', p: 2 }}>
                <CardContent>
                  <Phone sx={{ fontSize: 32, color: theme.palette.primary.main, mb: 1 }} />
                  <Typography variant="h6" gutterBottom>
                    Phone
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +1 908 581 8869
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeY5CuN-bw9fHxOYK5hCFZdqPFPkKqFdfZao0AEkEz3QhYnoA/viewform?embedded=true"
              width="100%"
              height="400"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Contact Form"
            >
              Loading…
            </iframe>
          </Paper>
        </Grid>
      </Grid>

      {/* Map Section */}
      <Paper sx={{ p: 0, overflow: 'hidden' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52608.38197455592!2d-77.56833554313936!3d34.50227903538051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9a1f949f8c091%3A0x826089cf65ba567e!2sHolly%20Ridge%2C%20NC%2028445!5e0!3m2!1sen!2sus!4v1702847807301!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        />
      </Paper>
    </Container>
  )
}

export default Contact
