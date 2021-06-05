import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = (val) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: val});
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
