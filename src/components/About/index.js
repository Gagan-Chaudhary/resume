import { Box, Typography, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { about } from '../../data/about';

function About() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        {about.summary}
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <IconButton href={about.links.github} target="_blank" color="primary">
          <GitHub />
        </IconButton>
        <IconButton href={about.links.linkedin} target="_blank" color="primary">
          <LinkedIn />
        </IconButton>
        <IconButton href={`mailto:${about.email}`} color="primary">
          <Email />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default About;