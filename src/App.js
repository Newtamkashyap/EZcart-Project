import logo from './logo.svg';
import './App.css';

//components
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Box } from '@mui/material';
import { NavBar } from './components/home/Navbar';

function App() {
  return (
    <div>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />

      </Box>

    </div>
  );
}

export default App;
