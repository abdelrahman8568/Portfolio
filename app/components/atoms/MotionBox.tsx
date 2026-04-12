import { motion } from "framer-motion";

interface MotionBoxProps {
  children: React.ReactNode;
  name?: string;
}

export function MainBox({ children, name }: MotionBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className={name}
    >
      {children}
    </motion.div>
  );
}

export function AnimationsBox({ children, name }: MotionBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={name}
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
      className="servicesCard"
    >
      {children}
    </motion.div>
  );
}
