import { Box } from '@chakra-ui/react';
import './App.css';
// import { Navbar } from './components/Navbar';
import { Navbar2 } from './components/Navbar2';
import { Footer } from './components/Footer';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <Box>
      {/* <Navbar /> */}
      <Navbar2/>
      <AllRoutes/>
      <Footer />
    </Box>
  );
}

export default App;
