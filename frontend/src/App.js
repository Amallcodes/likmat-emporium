import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState, useRef } from "react";


// components
import { Navbar } from "./components/Navbar";
import Loader from "./components/Loader";
import Subscribe from "./components/Subscribe";

// pages
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import All from "./pages/AllItems"



const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [pageLoaderFade, setPageLoaderfade] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);
  const pageLoaderRef = useRef(null);

  const toggleTheme = () => {
    setIsLightTheme((prevIsLightTheme) => !prevIsLightTheme);
  };

  useEffect(() => {
    const handleWindowLoad = () => {
      console.log("window workedd");

      if (pageLoaderRef.current) {
        setPageLoaderfade(true);
        
        setTimeout(() => {
          setShowLoader(false);
        }, 1000);

      }

    };

    window.addEventListener('load', handleWindowLoad);

    return () => {
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);


  return (
    <BrowserRouter>
      <div className={`app ${isLightTheme && "light-theme"}`} >
        <Navbar toggleTheme={toggleTheme} />
        {showLoader && <div ref={pageLoaderRef} className={`page-loader ${pageLoaderFade && 'loader--hidden'}`}><Loader /></div>}

        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all" element={<All />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
          </Routes>
        </div>

        <div className="sixth-section">
          <Subscribe />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;