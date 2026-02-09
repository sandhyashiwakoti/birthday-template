import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Heart } from "lucide-react";
import { memories } from "./memories";
import Particles from "./components/Particles";
import Cake from "./components/Cake";
import "./App.css";

function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDone, setIsDone] = useState(false);
  
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Auto-advance the gallery photos every 2.5 seconds
  useEffect(() => {
    if (memories[current].isGallery) {
      const interval = setInterval(() => {
        setGalleryIndex((prev) => (prev + 1) % memories[current].photos.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [current]);

  const nextSlide = () => {
    if (current < memories.length - 1) {
      setDirection(1);
      setCurrent(current + 1);
      setGalleryIndex(0);
    } else {
      setIsDone(true);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent(current - 1);
      setGalleryIndex(0);
    }
  };

  const resetApp = () => {
    setDirection(-1);
    setIsDone(false);
    setCurrent(0);
  };

  return (
    <div className="container">
      <div className="bg-glow"></div>
      <Particles />

      <AnimatePresence mode="wait" custom={direction}>
        {!isDone ? (
          <motion.div
            key={current}
            custom={direction}
            initial={{ x: direction > 0 ? 500 : -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? 500 : -500, opacity: 0 }}
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.4 } }}
            className="card"
          >
            <div className="card-inner">
              
              <div className="image-side">
                {memories[current].isGallery ? (
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={galleryIndex}
                      src={memories[current].photos[galleryIndex]} 
                      alt="Hasu Gallery"
        className="memory-img slideshow-img" 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                ) : (
                  <motion.img 
                    key={`img-${current}`}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    src={memories[current].image} alt="Memory" className="memory-img" 
                  />
                )}
                <div className="vignette"></div>
              </div>

              <div className="text-side">
                <div className="content-wrapper">
                  <motion.h1 
                    key={`t-${current}`} 
                    initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} 
                    transition={{ delay: 0.2 }} 
                    className={current === 0 ? "title first-page-title" : "title"}
                  >
                    {memories[current].title}
                  </motion.h1>
                  <motion.p 
                    key={`d-${current}`} 
                    initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} 
                    transition={{ delay: 0.7 }} 
                    className={`description ${current === 0 ? "center-text" : ""}`}
                  >
                    {memories[current].text}
                  </motion.p>
                </div>

                <div className={`button-group ${current === 0 ? "center-group" : ""}`}>
                  {current > 0 && (
                    <button className="btn btn-outline" onClick={prevSlide}>
                      <ChevronLeft size={18} /> Back
                    </button>
                  )}
                  <button className="btn next-btn" onClick={nextSlide}>
                    {current === 0 ? "Start Memories" : current === memories.length - 1 ? "CELEBRATE! 🎉" : "Next Memory"} 
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="cake" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="card">
             <Cake onReset={resetApp} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;