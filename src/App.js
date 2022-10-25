import Header from './components/Header';
import Trending from './Pages/Trending';
import Movies from './Pages/Movies';
import Series from './Pages/Series';
import Search from './Pages/Search';
import SimpleBottomNavigation from './components/MainNavigation';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/system';


function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>

      </div>
      <SimpleBottomNavigation />
    </Router>

  );
}

export default App;
