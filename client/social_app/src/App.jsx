import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing React Router components
import Home from './Components/Home'; // The booking page
import BookingPage from './Components/BookingPage'; // The booking page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Main app page */}
        <Route path="/booking" element={<BookingPage />} /> {/* Booking page */}
      </Routes>
    </Router>
  );
}

export default App;
