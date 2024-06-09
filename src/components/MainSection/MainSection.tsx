import "./MainSection.css";
import { motion } from "framer-motion";

interface MainSectionProps {
  n: number;
}

const MainSection = ({ n }: MainSectionProps) => {
  if (n === 1) {
    return (
      <>
        <section className="mainWelcome">
          <motion.h2
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            be quiet when someone is watching
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: [0.1, 0.2, 1] }}
            transition={{ duration: 1 }}
          >
            YOUR CHOICE
          </motion.button>
          <motion.h2
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            unleash the power when you are alone
          </motion.h2>
        </section>
        <section className="mainBlock">
          <nav className="nav1">test</nav>
          <nav className="nav2">test</nav>
          <nav className="nav3">test</nav>
          <nav className="nav4">test</nav>
        </section>
      </>
    );
  }
  if (n === 2) {
    return <h2>test2</h2>;
  }
  if (n === 3) {
    return <h2>test3</h2>;
  }
};

export default MainSection;
