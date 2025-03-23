import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  Link
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { skills } from '../../data/skills';

function SkillDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, skillId] = id.split('-');
  
  const skill = skills[category].find(s => s.id === skillId);

  if (!skill) {
    return <Typography>Skill not found</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        sx={{ mt: 2, mb: 2 }}
      >
        Back to Resume
      </Button>
      
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          {skill.name}
        </Typography>
        
        <Typography variant="body1" paragraph>
          {skill.details.description}
        </Typography>

        <Typography variant="h6" gutterBottom>
          Key Points
        </Typography>
        <List>
          {skill.details.keyPoints.map((point, index) => (
            <ListItem key={index}>
              <ListItemText primary={point} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" gutterBottom>
          Related Projects
        </Typography>
        <List>
          {skill.details.projects.map((project, index) => (
            <ListItem key={index}>
              <ListItemText primary={project} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" gutterBottom>
          Resources
        </Typography>
        <List>
          {skill.details.resources.map((resource, index) => (
            <ListItem key={index}>
              <Link href={resource.url} target="_blank" rel="noopener">
                {resource.title}
              </Link>
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" gutterBottom>
          Personal Notes
        </Typography>
        <Typography variant="body1">
          {skill.details.notes}
        </Typography>
      </Paper>
    </Container>
  );
}

export default SkillDetails;