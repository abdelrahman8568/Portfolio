import { motion } from "framer-motion";

interface MotionBoxProps {
  children: React.ReactNode;
  className?: string;
}

export function MainBox({ children, className }: MotionBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className={`w-full max-w-full flex flex-col flex-wrap flex-auto pt-[5%] ps-[10%] ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function AnimationsBox({ children, className }: MotionBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CertificatesBox({ children }: MotionBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100, y: 100 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className={`w-full max-w-[95%] md:max-w-[90%] flex flex-col flex-wrap flex-auto pt-2 md:pt-5 ps-[10%]`}
    >
      {children}
    </motion.div>
  );
}
