import { motion } from "framer-motion";
import { ReactComponent as Logo } from "../assets/logo-Book-IT.svg"; // importa il tuo svg

export default function SplashLogo() {
  return (
    <div className="flex items-center justify-center h-screen bg-teal-700">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Logo className="logo-svg" />
      </motion.div>
    </div>
  );
}