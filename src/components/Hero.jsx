import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex flex-col`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row flex-1 items-start gap-5`}
      >
        <div className="flex flex-col  justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Rahul</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user friendly websites
            <br className="sm:block hidden" />
            with cool animated UI
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute sm:bottom-2 bottom-5 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-3xl border-4 border-#E6DEDD flex justify-center items-start p-2 sm:mt-16">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-2"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
