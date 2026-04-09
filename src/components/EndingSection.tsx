import { motion } from "framer-motion";

const EndingSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 gradient-bg overflow-hidden">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="glass-strong rounded-3xl p-10 md:p-16 relative"
        >
          <div className="absolute inset-0 glass rounded-3xl translate-x-2 translate-y-2 opacity-20 -z-10" />
          <p className="text-2xl md:text-4xl font-heading font-bold text-foreground italic leading-relaxed">
            "Home begins with you."
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 text-muted-foreground font-body text-sm tracking-widest uppercase"
        >
          Made with love ❤️
        </motion.p>
      </div>
    </section>
  );
};

export default EndingSection;
