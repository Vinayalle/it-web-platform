import { IconType } from "react-icons";
import { BiCloud, BiShield } from "react-icons/bi";
import { CgCode } from "react-icons/cg";
import { FiZap } from "react-icons/fi";

type Feature = {
  title: string;
  desc:string;
  icon: IconType;
};

export const features:Feature[]  = [
  {
    icon: CgCode,
    title: "Clean Architecture",
    desc: "Well-structured, maintainable, and scalable codebase.",
  },
  {
    icon: BiCloud,
    title: "Cloud Ready",
    desc: "Built for AWS, Docker, Kubernetes & modern infra.",
  },
  {
     icon: BiShield,
    title: "Secure by Design",
    desc: "Security-first approach with best practices.",
  },
  {
    icon: FiZap,
    title: "High Performance",
    desc: "Optimized for speed, scalability & reliability.",
  },
];
