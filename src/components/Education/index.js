import { Box, Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { education } from '../../data/education';

function Education() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Education
      </Typography>
      {education.map((edu) => (
        <Card key={edu.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">
              {edu.degree} in {edu.field}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              {edu.institution}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {edu.duration} | {edu.location}
            </Typography>
            <Typography variant="body2" color="primary" gutterBottom>
              GPA: {edu.gpa}
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
              Key Courses:
            </Typography>
            <List dense>
              {edu.details.courses.map((course, index) => (
                <ListItem key={index}>
                  <ListItemText primary={course} />
                </ListItem>
              ))}
            </List>
            <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
              Achievements:
            </Typography>
            <List dense>
              {edu.details.achievements.map((achievement, index) => (
                <ListItem key={index}>
                  <ListItemText primary={achievement} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Education;