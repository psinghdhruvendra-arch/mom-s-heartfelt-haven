import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const SurpriseSection = () => {
  const [revealed, setRevealed] = useState(false);

  const handleSurprise = () => {
    setRevealed(true);
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#f8d7da", "#d9c6ff", "#d4af37", "#fffaf5"],
    });
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.5, x: 0.3 },
        colors: ["#f8d7da", "#d9c6ff", "#d4af37"],
      });
    }, 300);
  };

  return (
    <section className="relative py-24 md:py-32 px-6 gradient-bg overflow-hidden">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-12"
        >
          A Special Surprise
        </motion.h2>

        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.button
              key="button"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSurprise}
              className="glow-button text-primary-foreground font-body font-medium px-10 py-5 rounded-full text-xl tracking-wide"
            >
              Open Surprise 🎁
            </motion.button>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Layered cards */}
              <div className="relative">
                <div className="absolute inset-0 glass rounded-3xl translate-x-3 translate-y-3 opacity-30" />
                <div className="glass-gold rounded-3xl p-10 md:p-14 relative z-10">
                  <span className="text-5xl mb-6 block">🎉</span>
                  <p className="text-lg md:text-xl font-body font-light text-foreground leading-relaxed italic">
                    "You are my first teacher, my greatest support, and my forever inspiration. Happy Birthday Mom."
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SurpriseSection;
