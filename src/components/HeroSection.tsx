import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const FloatingCard = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={`absolute glass rounded-2xl ${className}`}
    animate={{ y: [0, -15, 0], rotate: [0, 1, -1, 0] }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById("why-special")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 gradient-bg opacity-60" />
      </div>

      {/* Floating decorative cards */}
      <FloatingCard className="w-40 h-40 md:w-64 md:h-64 -top-10 -left-10 opacity-30" delay={0} />
      <FloatingCard className="w-32 h-32 md:w-48 md:h-48 top-20 right-10 opacity-20" delay={1.5} />
      <FloatingCard className="w-24 h-24 md:w-40 md:h-40 bottom-20 left-20 opacity-25" delay={3} />
      <FloatingCard className="w-36 h-36 md:w-56 md:h-56 -bottom-10 -right-10 opacity-20" delay={2} />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-2xl"
      >
        <div className="glass-strong rounded-3xl p-8 md:p-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight"
          >
            Happy Birthday Mom ❤️
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed mb-10"
          >
            To the strongest, kindest, and most beautiful person in my life.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToNext}
            className="glow-button text-primary-foreground font-body font-medium px-8 py-4 rounded-full text-lg tracking-wide"
          >
            Begin the Journey
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
