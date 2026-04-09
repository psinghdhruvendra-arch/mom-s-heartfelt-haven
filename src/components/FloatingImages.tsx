import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

interface FloatingImageProps {
  src: string;
  alt: string;
  className: string;
  delay?: number;
  rotate?: number;
}

const FloatingImage = ({ src, alt, className, delay = 0, rotate = 0 }: FloatingImageProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay }}
    animate={{ y: [0, -10, 0], rotate: [rotate, rotate + 2, rotate - 1, rotate] }}
    className={`absolute glass-strong rounded-2xl p-2 shadow-lg z-0 pointer-events-none ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover rounded-xl"
    />
  </motion.div>
);

// Images scattered across different sections
export const FloatingImagesLayer1 = () => (
  <>
    <FloatingImage
      src={gallery1}
      alt="Memory 1"
      className="w-28 h-28 md:w-40 md:h-40 -right-6 md:right-8 top-16 opacity-60"
      delay={0.3}
      rotate={-6}
    />
    <FloatingImage
      src={gallery2}
      alt="Memory 2"
      className="w-24 h-24 md:w-36 md:h-36 -left-4 md:left-4 bottom-10 opacity-50"
      delay={0.6}
      rotate={4}
    />
  </>
);

export const FloatingImagesLayer2 = () => (
  <>
    <FloatingImage
      src={gallery3}
      alt="Memory 3"
      className="w-28 h-28 md:w-44 md:h-44 -left-6 md:left-6 top-8 opacity-50"
      delay={0.2}
      rotate={5}
    />
    <FloatingImage
      src={gallery4}
      alt="Memory 4"
      className="w-24 h-24 md:w-36 md:h-36 -right-4 md:right-10 bottom-16 opacity-55"
      delay={0.5}
      rotate={-4}
    />
  </>
);

export const FloatingImagesLayer3 = () => (
  <>
    <FloatingImage
      src={gallery5}
      alt="Memory 5"
      className="w-24 h-24 md:w-36 md:h-36 -right-4 md:right-6 top-12 opacity-50"
      delay={0.4}
      rotate={3}
    />
    <FloatingImage
      src={gallery6}
      alt="Memory 6"
      className="w-28 h-28 md:w-40 md:h-40 -left-6 md:left-8 bottom-8 opacity-55"
      delay={0.7}
      rotate={-5}
    />
  </>
);
