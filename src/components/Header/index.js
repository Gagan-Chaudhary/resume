import { Box, Typography, Link } from '@mui/material';
import { Email, LinkedIn, GitHub, LocationOn } from '@mui/icons-material';

function Header() {
  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography variant="h1">
        Gagan Chaudhary
      </Typography>
      <Typography variant="h3" sx={{ color: '#666666', mb: 2 }}>
        Software Engineer
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <LocationOn sx={{ fontSize: 18, color: '#666666' }} />
          <Typography variant="body1" color="text.secondary">
            Bangalore, India
          </Typography>
        </Box>
        <Link 
          href="mailto:gaganchaudhary0808@gmail.com"
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 0.5,
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          <Email sx={{ fontSize: 18, color: '#666666' }} />
          <Typography variant="body1" color="text.secondary">
            gaganchaudhary0808@gmail.com
          </Typography>
        </Link>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Link 
          href="https://github.com/gagan-gv"
          target="_blank"
          sx={{ color: '#666666' }}
        >
          <GitHub />
        </Link>
        <Link 
          href="https://www.linkedin.com/in/gagan-chaudhary-"
          target="_blank"
          sx={{ color: '#666666' }}
        >
          <LinkedIn />
        </Link>
      </Box>
    </Box>
  );
}

export default Header;