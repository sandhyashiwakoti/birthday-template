import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";
import "./Cake.css";

const Cake = ({ onReset }) => {
  const [step, setStep] = useState("wish");
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (step === "countdown") {
      if (count > 0) {
        const timer = setTimeout(() => setCount(count - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setStep("blown"), 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [count, step]);

  const prepareToCut = () => {
    setStep("ready_to_cut");
  };

  const startCutting = () => {
    setStep("cutting");
    setTimeout(() => {
      setStep("celebrate");
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#ff2d75", "#ffffff", "#ff82ad"]
      });
    }, 2000); 
  };

  return (
    <div className="cake-container">
      <AnimatePresence mode="wait">
        
        {step === "wish" && (
          <motion.div key="wish" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="action-box">
            <div className="cake-wrapper">
              <span className="huge-cake">🎂</span>
              <div className="flame-overlay">
                <div className="real-flame" /><div className="real-flame" /><div className="real-flame" />
              </div>
            </div>
            <p className="cake-instruction">Close your eyes and make a wish...</p>
            <button className="btn pulse-btn" onClick={() => setStep("countdown")}>Make a wish ✨</button>
          </motion.div>
        )}

        {step === "countdown" && (
          <motion.div key="count" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="action-box">
            <div className="cake-wrapper">
              <span className="huge-cake">🎂</span>
              <div className="flame-overlay">
                <div className="real-flame" /><div className="real-flame" /><div className="real-flame" />
              </div>
            </div>
            <p className="cake-instruction">{count > 0 ? "Blowing out in..." : "FUUUUUUU! 💨"}</p>
            {count > 0 && <motion.h1 key={count} initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="countdown-number">{count}</motion.h1>}
          </motion.div>
        )}

        {step === "blown" && (
          <motion.div key="blown" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="action-box">
            <div className="cake-wrapper">
              <span className="huge-cake blown-out">🎂</span>
            </div>
            <p className="cake-instruction">Wish sent! ❤️</p>
            <button className="btn restart-btn" onClick={prepareToCut}>Let's cut the cake 🔪</button>
          </motion.div>
        )}

        {step === "ready_to_cut" && (
          <motion.div key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="action-box">
            <div className="cake-wrapper clickable-cake" onClick={startCutting}>
              <span className="huge-cake">🎂</span>
              <motion.div 
                className="knife-float"
                initial={{ x: 50, y: -50, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span style={{fontSize: "5rem", display: "block", transform: "scaleX(-1)"}}>🔪</span>
              </motion.div>
            </div>
            <p className="cake-instruction pulse-text">Tap the cake to cut it!</p>
          </motion.div>
        )}

        {step === "cutting" && (
          <motion.div key="cutting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="action-box">
            <div className="cake-wrapper">
              <span className="huge-cake">🎂</span>
              <motion.div 
                className="knife-float"
                animate={{ 
                  x: [-80, -80, -80], 
                  y: [0, -100, 120], 
                }}
                transition={{ duration: 1.8, times: [0, 0.3, 1], ease: "easeInOut" }}
              >
                <span style={{fontSize: "5rem", display: "block", transform: "scaleX(-1)"}}>🔪</span>
              </motion.div>
            </div>
            <p className="cake-instruction">Cutting...</p>
          </motion.div>
        )}

        {step === "celebrate" && (
          <motion.div key="celebrate" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="action-box">
            <span className="huge-cake">🍰</span>
            <h1 className="first-page-title celebration-title">HAPPY BIRTHDAY!</h1>
            <p className="description center-text">Cake was yummy!</p>
            <button className="btn btn-outline restart-btn" onClick={onReset}>
              <RotateCcw size={18} /> Read Again
            </button>
            <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} style={{ marginTop: '20px' }}>
              <Heart fill="#ff2d75" color="#ff2d75" size={50} />
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default Cake;