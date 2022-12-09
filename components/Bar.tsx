import { FunctionComponent } from "react";

import { Skill } from "../types";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{ value: Skill }> = ({
  value: { Icon, level, name },
}) => {
  const bar_width = `${level}%`;
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10, // value of the bounce
        stiffness: 100, //
      },
    },
  };

  return (
    <div className="my-2 text-white bg-gray-100 mt-5 rounded-full">
      <motion.div
        className="flex items-center px-4 py-3 rounded-full bg-gray-300"
        style={{
          color: "#354358",
          width: bar_width,
        }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" /> {name}
      </motion.div>
    </div>
  );
};
export default Bar;
