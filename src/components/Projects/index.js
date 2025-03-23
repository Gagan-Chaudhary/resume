import { Box, Typography, Card, CardContent, Chip, Grid, Link } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { projects } from '../../data/projects';

function Projects() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {project.duration}
                </Typography>
                <Typography variant="body2" paragraph>
                  {project.details.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {project.details.features.map((feature, index) => (
                    <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                      • {feature}
                    </Typography>
                  ))}
                </Box>
                <Box sx={{ mb: 2 }}>
                  {project.details.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
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
                  <GitHub fontSize="small" />
                  View on GitHub
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;