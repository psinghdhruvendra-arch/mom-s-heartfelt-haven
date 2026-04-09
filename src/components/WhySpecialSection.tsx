import { motion } from "framer-motion";
import { FloatingImagesLayer1 } from "./FloatingImages";

const cards = [
  { text: "Your love gives strength.", icon: "💪" },
  { text: "Your kindness makes home beautiful.", icon: "🏡" },
  { text: "Your patience teaches peace.", icon: "🕊️" },
  { text: "Your smile brings warmth.", icon: "☀️" },
  { text: "Your prayers light up our darkest days.", icon: "🙏" },
  { text: "Your hugs are the safest place on earth.", icon: "🤗" },
];

const WhySpecialSection = () => {
  return (
    <section id="why-special" className="relative py-24 md:py-32 px-6 gradient-bg overflow-hidden">
      {/* Background decorative layers */}
      <div className="absolute top-10 left-10 w-72 h-72 glass rounded-full opacity-10 blur-sm" />
      <div className="absolute bottom-10 right-10 w-96 h-96 glass rounded-full opacity-10 blur-sm" />

      {/* Scattered gallery images */}
      <FloatingImagesLayer1 />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-heading font-bold text-center text-foreground mb-16"
        >
          Why You Are Special
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -8, rotateY: 3, scale: 1.02 }}
              className="glass-strong rounded-2xl p-8 md:p-10 cursor-default group relative"
            >
              <div className="absolute inset-0 glass rounded-2xl -z-10 translate-x-2 translate-y-2 opacity-40" />
              <span className="text-4xl mb-4 block">{card.icon}</span>
              <p className="text-lg md:text-xl font-body text-foreground font-medium leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Handwritten warm message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 md:mt-20 max-w-3xl mx-auto relative"
        >
          <div className="absolute inset-0 glass rounded-3xl translate-x-3 translate-y-3 opacity-25" />
          <div className="glass-gold rounded-3xl p-8 md:p-12 relative z-10">
            <p
              className="text-lg md:text-2xl text-foreground leading-relaxed text-center"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                letterSpacing: "0.01em",
                lineHeight: "1.9",
              }}
            >
              "You bring warmth, strength, and kindness into every little moment. Your presence makes ordinary days feel special, and your care is felt even in the quietest things. Thank you for being someone whose love speaks without needing many words."
            </p>
            <p className="text-right mt-6 text-muted-foreground font-body text-sm tracking-wide">
              — with all my love ❤️
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySpecialSection;
