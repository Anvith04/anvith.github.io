import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

export function Header() {
  return (
    <header className="relative overflow-hidden bg-black min-h-screen flex items-center justify-center">
      {/* Animated neon background effects */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(147, 51, 234, 0.2) 0%, rgba(0, 0, 0, 1) 50%, rgba(6, 182, 212, 0.2) 100%)",
            "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(0, 0, 0, 1) 50%, rgba(147, 51, 234, 0.2) 100%)",
            "linear-gradient(225deg, rgba(6, 182, 212, 0.2) 0%, rgba(0, 0, 0, 1) 50%, rgba(236, 72, 153, 0.2) 100%)",
            "linear-gradient(315deg, rgba(147, 51, 234, 0.2) 0%, rgba(0, 0, 0, 1) 50%, rgba(6, 182, 212, 0.2) 100%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.8, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -100, 50, 0],
          y: [0, 50, -100, 0],
          scale: [1, 0.8, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 bg-[rgba(0,0,0,0)]">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            Anvith Reddy Burri
          </motion.h1>
          <motion.div 
            className="text-xl md:text-2xl text-gray-300 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            UI/UX Designer & Frontend Developer
          </motion.div>
          <motion.div 
            className="text-lg text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Computer Science Student • 3rd Year
          </motion.div>
        </motion.div>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Passionate about creating user-friendly interfaces and user-centered design principles. 
          Skilled in wireframes, prototypes, and frontend development. Combining creativity and functionality 
          to deliver intuitive design solutions that enhance user experiences.
        </motion.p>
        
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <motion.div 
            className="flex items-center border-2 border-transparent bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-pink-500/20 p-1 rounded-2xl"
            style={{
              background: "linear-gradient(90deg, rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.2), rgba(236, 72, 153, 0.2))",
              borderImage: "linear-gradient(90deg, rgba(147, 51, 234, 0.6), rgba(6, 182, 212, 0.6), rgba(236, 72, 153, 0.6)) 1"
            }}
            whileHover={{ 
              boxShadow: "0 0 20px rgba(147, 51, 234, 0.3), 0 0 40px rgba(6, 182, 212, 0.2), 0 0 60px rgba(236, 72, 153, 0.1)",
              scale: 1.02
            }}
            initial={{ 
              borderImageSource: "linear-gradient(90deg, rgba(147, 51, 234, 0.4), rgba(6, 182, 212, 0.4), rgba(236, 72, 153, 0.4))"
            }}
            animate={{ 
              borderImageSource: [
                "linear-gradient(90deg, rgba(147, 51, 234, 0.6), rgba(6, 182, 212, 0.6), rgba(236, 72, 153, 0.6))",
                "linear-gradient(90deg, rgba(236, 72, 153, 0.6), rgba(147, 51, 234, 0.6), rgba(6, 182, 212, 0.6))",
                "linear-gradient(90deg, rgba(6, 182, 212, 0.6), rgba(236, 72, 153, 0.6), rgba(147, 51, 234, 0.6))",
                "linear-gradient(90deg, rgba(147, 51, 234, 0.6), rgba(6, 182, 212, 0.6), rgba(236, 72, 153, 0.6))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-xl px-6 py-3 border border-gray-800/50">
              <motion.a 
                href="mailto:anvithreddy4@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 px-3"
                whileHover={{ 
                  scale: 1.05,
                  filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.5))"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span className="hidden sm:inline text-sm">anvithreddy4@gmail.com</span>
              </motion.a>
              
              <div className="w-px h-6 bg-gradient-to-b from-purple-500/50 to-cyan-500/50 mx-2" />
              
              <motion.a 
                href="tel:+919493467994"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 px-3"
                whileHover={{ 
                  scale: 1.05,
                  filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.5))"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline text-sm">+91 9493467994</span>
              </motion.a>
              
              <div className="w-px h-6 bg-gradient-to-b from-cyan-500/50 to-pink-500/50 mx-2" />
              
              <motion.a 
                href="https://linkedin.com/in/anvith-reddy-burri" 
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2 px-3"
                whileHover={{ 
                  scale: 1.05,
                  filter: "drop-shadow(0 0 8px rgba(236, 72, 153, 0.5))"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
                <span className="hidden sm:inline text-sm">Anvith Reddy Burri</span>
              </motion.a>
              
              <div className="w-px h-6 bg-gradient-to-b from-pink-500/50 to-purple-500/50 mx-2" />
              
              <motion.a 
                href="https://github.com/Anvith04" 
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 px-3"
                whileHover={{ 
                  scale: 1.05,
                  filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.5))"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline text-sm">Anvith04</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}