import { useParams, useNavigate } from 'react-router-dom';
import { Container, Paper, Typography, Box, Chip, Button, Link } from '@mui/material';
import { ArrowBack, GitHub } from '@mui/icons-material';
import { projects } from '../../data/projects';

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Typography>Project not found</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate('/')}
        sx={{ mt: 2, mb: 2 }}
      >
        Back to Resume
      </Button>
      
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          {project.title}
        </Typography>
        
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {project.duration}
        </Typography>

        <Typography variant="body1" paragraph>
          {project.details.description}
        </Typography>

        <Typography variant="h6" gutterBottom>
          Key Features
        </Typography>
        <Box sx={{ mb: 3 }}>
          {project.details.features.map((feature, index) => (
            <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
              • {feature}
            </Typography>
          ))}
        </Box>

        <Typography variant="h6" gutterBottom>
          Technologies Used
        </Typography>
        <Box sx={{ mb: 3 }}>
          {project.details.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              sx={{ mr: 1, mb: 1 }}
            />
          ))}
        </Box>

        <Link
          href={project.details.github}
          target="_blank"
          rel="noopener"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <GitHub />
          View Project on GitHub
        </Link>
      </Paper>
    </Container>
  );
}

export default ProjectDetails;