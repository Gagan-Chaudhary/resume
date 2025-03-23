import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Typography, 
  Chip, 
  Box, 
  Grid 
} from '@mui/material';
import { skills } from '../../data/skills';

function Skills() {
  const navigate = useNavigate();
  
  const handleSkillClick = (category, skillId) => {
    navigate(`/skill/${category}-${skillId}`);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Skills
      </Typography>
      
      {Object.entries(skills).map(([category, skillList]) => (
        <Box key={category} sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ textTransform: 'capitalize' }}>
            {category}
          </Typography>
          <Grid container spacing={1}>
            {skillList.map((skill) => (
              <Grid item key={skill.id}>
                <Chip
                  label={skill.name}
                  onClick={() => handleSkillClick(category, skill.id)}
                  sx={{ 
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white'
                    }
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

export default Skills;