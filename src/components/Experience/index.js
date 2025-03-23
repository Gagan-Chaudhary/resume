import { Box, Typography, List, ListItem } from '@mui/material';

function Experience() {
  return (
    <Box 
      sx={{ 
        mb: 4,
        px: 3,
        py: 2,
        backgroundColor: '#ffffff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        '@media print': {
          backgroundColor: '#ffffff',
          boxShadow: 'none'
        }
      }}
    >
      <Typography 
        variant="h2" 
        sx={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#1a73e8',
          borderBottom: '2px solid #1a73e8',
          pb: 0.5,
          mb: 2.5,
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}
      >
        Professional Experience
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          mb: 0.5 
        }}>
          <Box>
            <Typography 
              variant="h3" 
              sx={{ 
                fontSize: '17px',
                fontWeight: 600,
                color: '#000000',
                mb: 0.5,
                letterSpacing: '0.2px'
              }}
            >
              Software Engineer
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: '16px',
                fontWeight: 500,
                color: '#1a73e8',
                mb: 0.5,
                letterSpacing: '0.2px'
              }}
            >
              Accenture
            </Typography>
          </Box>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '15px',
              color: '#666666',
              fontWeight: 500,
              letterSpacing: '0.2px'
            }}
          >
            Aug 2022 - Present
          </Typography>
        </Box>
        <Typography 
          variant="body2" 
          sx={{ 
            fontSize: '15px',
            color: '#666666',
            mb: 1.5,
            fontWeight: 500,
            letterSpacing: '0.2px'
          }}
        >
          Bangalore, India
        </Typography>
        <List sx={{ 
          pl: 2, 
          mb: 1,
          '& .MuiListItem-root': { 
            display: 'list-item', 
            listStyleType: 'disc', 
            pl: 0.5,
            pb: 0.75,
            '& .MuiTypography-root': {
              fontSize: '15px',
              lineHeight: 1.5,
              color: '#333333',
              letterSpacing: '0.2px'
            }
          } 
        }}>
          <ListItem>
            <Typography>
              Developed and maintained microservices using Spring Boot and React, improving system efficiency by 40%
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Implemented CI/CD pipelines using Jenkins and Docker, reducing deployment time by 60%
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Created and maintained REST APIs using Spring Boot and integrated with frontend using React
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Collaborated with cross-functional teams to deliver high-quality solutions
            </Typography>
          </ListItem>
        </List>
        <Box sx={{ mt: 2 }}>
          <Typography 
            sx={{ 
              fontSize: '15px',
              color: '#333333',
              fontWeight: 500,
              letterSpacing: '0.2px'
            }}
          >
            <Box component="span" sx={{ color: '#666666', fontWeight: 600 }}>Technologies:</Box>
            {' Java, Spring Boot, React, Jenkins, Docker, Material UI, REST APIs'}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;