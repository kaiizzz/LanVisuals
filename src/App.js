import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import { UserProvider } from './UserContext';
import Header from './components/Header';
import Home from './pages/Home/Home';


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
              {/* <Route path="/login" element={<Login />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/register-as" element={<RegisterAs />} />
              <Route path="/register/internal" element={<RegisterInternal />} />
              <Route path="/register/external" element={<RegisterExternal />} />
              <Route path="/register/internal/congratulation" element={<Congratulation />} />
              <Route path="/register/external/congratulation" element={<Congratulation />} />
              <Route path="/projects/:projectId" element={<ProjectDetail />} />
              <Route path="/projects/download/:projectId" element={<ProjectDetailDownload />} />
              <Route path={`/admin/${adminHash}`} element={<AdminDashboard />} /> 
              <Route path="/profile" element={<Profile />} />
              <Route path="/myProject" element={<MyProject />} />
              <Route path="/profile/edit-profile" element={<EditProfile />} />
              <Route path="/profile/:username" element={<PublicProfile />} />
              <Route path="/my-requests" element={<MyRequests />} />
              <Route path="/requests/:requestId" element={<RequestDetail />} />
              <Route path="*" element={<NotFound />} />  404 route */}
          </Routes>
      </>
  );
}
export default App;