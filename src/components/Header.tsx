import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'AI Gallery', path: '/ai-gallery' },
    { label: 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <IconButton
        sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', right: 10, top: 10 }}
        onClick={handleDrawerToggle}
      >
        <CloseIcon />
      </IconButton>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemText 
              sx={{ textAlign: 'center' }}
              primary={
                <Link 
                  to={item.path} 
                  style={{ 
                    textDecoration: 'none', 
                    color: isActive(item.path) ? theme.palette.primary.main : '#1e4356',
                    fontWeight: isActive(item.path) ? 'bold' : 'normal'
                  }}
                >
                  {item.label}
                </Link>
              } 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#1e4356' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: '"Roboto", sans-serif',
              fontSize: '28px',
              fontWeight: 400,
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Kevin Kuc
            </Link>
          </Typography>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navigationItems.map((item) => (
                <Typography
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: isActive(item.path) ? 'bold' : 'normal',
                    '&:hover': {
                      color: theme.palette.primary.light,
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Header
