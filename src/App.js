import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
