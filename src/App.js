import { Box } from '@chakra-ui/react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <Box>
      <Navbar/>
      <AllRoutes/>
      <Footer />
    </Box>
  );
}

export default App;
