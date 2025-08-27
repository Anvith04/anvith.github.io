import { Suspense, lazy } from "react";
import { Header } from "./components/Header";
import { MouseSparks } from "./components/MouseSparks";
import { motion } from "motion/react";

// Lazy load components for better performance
const Skills = lazy(() => import("./components/Skills").then(module => ({ default: module.Skills })));
const Projects = lazy(() => import("./components/Projects").then(module => ({ default: module.Projects })));
const Education = lazy(() => import("./components/Education").then(module => ({ default: module.Education })));
const Footer = lazy(() => import("./components/Footer").then(module => ({ default: module.Footer })));

// Loading fallback component
const LoadingSection = () => (
  <div className="flex items-center justify-center py-20">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full"
    />
  </div>
);

export default function App() {
  return (
    <motion.div 
      className="min-h-screen bg-black text-white relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <MouseSparks />
      <Header />
      <Suspense fallback={<LoadingSection />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Education />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Footer />
      </Suspense>
    </motion.div>
  );
}