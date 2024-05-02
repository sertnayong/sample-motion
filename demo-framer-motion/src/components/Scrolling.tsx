import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

type Props = {}

const Scrolling = (props: Props) => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });
    const mainControls = useAnimation();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
      });

      
    const paragraphOneValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["-100%", "0%"]
      );
    
      const paragraphTwoValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["100%", "0%"]
      );

      useEffect(() => {
        if (isInView) {
          mainControls.start("visible");
        }
      }, [isInView]);

  return (
    <section className="flex flex-col gap-10 mb-10" ref={containerRef}>
    <motion.h1
      className="text-5xl tracking-wide text-state-100 text-center"
      animate={mainControls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{ delay: 0.3 }}
    >
      Just Keep Scrolling
    </motion.h1>
    <motion.p
      style={{ translateX: paragraphOneValue }}
      className="text-slote-100 font-thin text-4xl w-1/2 mx-auto"
    >
      This is a basic tutorial on how to get up and runing with framer
      motion with some tailwideCSS. If you ecjoued this viedo, plase leave
      a link and also subscribe.
    </motion.p>
    <motion.p
      style={{ translateX: paragraphTwoValue }}
      className="text-slote-100 font-thin text-4xl w-1/2 mx-auto"
    >
      Habe fun playing with framer mogtion. it is very pwerful library
      when used prooerly. Add lift to your website.
    </motion.p>
  </section>
  )
}

export default Scrolling