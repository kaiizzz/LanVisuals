import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import { UserProvider } from './UserContext';
import Header from './Components/Header';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Vogue_Entries from './pages/Gallery/Vogue_Entries/Vogue_Entries';
import Memories_of_Childhood from './pages/Gallery/Memories_of_Childhood/Memories_of_Childhood';
import Reflections_on_Dreams from './pages/Gallery/Reflections_on_Dreams/Reflections_on_Dreams';



// Function to generate a random hash string
function generateRandomHash() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function App() {
  const [adminHash, setAdminHash] = useState('');  // State to store the random hash
  //const [error, setError] = useState(null);

  useEffect(() => {
      // Check if a hash exists in localStorage
      let hash = localStorage.getItem('adminHash');
      if (!hash) {
          // If no hash exists, generate a new one and save it to localStorage
          hash = generateRandomHash();
          localStorage.setItem('adminHash', hash);
      }
      setAdminHash(hash);  // Set the hash in the state

      // Axios interceptor for handling 429 Too Many Requests globally
      const interceptor = axios.interceptors.response.use(
          response => response,
          error => {
              if (error.response && error.response.status === 429) {
                  alert("Too many requests, please try again later."); // Alert the user when 429 is encountered
              }
              return Promise.reject(error);
          }
      );

      // Cleanup the interceptor when the component unmounts
      return () => {
          axios.interceptors.response.eject(interceptor);
      };
  }, []);

  /*
  const handleSearch = async (query) => {
      try {
          await onSearch(query);
          setError(null);
      } catch (err) {
          setError('Search failed. Please try again.');
      }
  };
  */
  
  return (
      <UserProvider> 
          <Router>
              <MainContent adminHash={adminHash} /> 
          </Router>
      </UserProvider>
  );
}

function MainContent({ adminHash }) {
  const location = useLocation(); 
  const showHeader = !location.pathname.startsWith(`/admin/${adminHash}`) && location.pathname !== '/login'; // Determine if Header should be displayed

  return (
      <>
          {showHeader && <Header adminHash={adminHash} />}  {/* Pass adminHash to Header */}
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
                <Route path="/Gallery/Vogue_Entries" element={<Vogue_Entries />} />
                <Route path="/Gallery/Memories_of_Childhood" element={<Memories_of_Childhood />} />
                <Route path="/Gallery/Reflections_on_Dreams" element={<Reflections_on_Dreams />} />
          </Routes>
      </>
  );
}
export default App;