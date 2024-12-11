import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners'; 
// import { RingLoader } from 'react-spinners'; 
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <>
      {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#fff' }}>
            <ClipLoader color="#ba3352" loading={loading} size={100} />
            {/* <RingLoader color="#ba3352" loading={loading} size={150} /> */}
          </div>
        ) : (
          <div>
            <Navbar />
            <Home />
            <Footer />
          </div>
        )}
      
    </>
  );
}

export default App;
