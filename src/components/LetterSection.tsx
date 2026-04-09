import { motion } from "framer-motion";

const LetterSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 gradient-bg overflow-hidden">
      <div className="max-w-3xl mx-auto relative">
        {/* Layered glass panels behind */}
        <div className="absolute inset-0 glass rounded-3xl translate-x-4 translate-y-4 opacity-30" />
        <div className="absolute inset-0 glass rounded-3xl -translate-x-2 translate-y-6 opacity-20" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="glass-gold rounded-3xl p-10 md:p-16 relative z-10"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8 text-center"
          >
            A Letter to You, Mom
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-xl font-body font-light text-foreground leading-relaxed text-center italic"
          >
            "Thank you for every sacrifice, every prayer, every silent strength, and every smile you gave even when tired. You are the heart of our family and the light of my life."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default LetterSection;
