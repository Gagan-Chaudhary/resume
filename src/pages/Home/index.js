import { Container, Box } from '@mui/material';
import Header from '../../components/Header';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Education from '../../components/Education';

function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ maxWidth: '900px', margin: '0 auto' }}>
        <Header />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
      </Box>
    </Container>
  );
}

export default Home;