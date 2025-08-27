import { Progress } from "./ui/progress";
import { motion } from "motion/react";

interface Skill {
  name: string;
  level: number;
  category: 'design' | 'tools' | 'frontend';
}

const skills: Skill[] = [
  { name: "UI/UX Design", level: 92, category: 'design' },
  { name: "Wireframing", level: 88, category: 'design' },
  { name: "Prototyping", level: 90, category: 'design' },
  { name: "User-Centered Design", level: 85, category: 'design' },
  { name: "Figma", level: 95, category: 'tools' },
  { name: "Adobe XD", level: 82, category: 'tools' },
  { name: "Canva", level: 90, category: 'tools' },
  { name: "GitHub", level: 85, category: 'tools' },
  { name: "HTML", level: 88, category: 'frontend' },
  { name: "CSS", level: 85, category: 'frontend' },
  { name: "JavaScript", level: 80, category: 'frontend' },
  { name: "React", level: 75, category: 'frontend' },
  { name: "Tailwind CSS", level: 80, category: 'frontend' },
];

const categoryColors = {
  design: 'from-purple-500 to-pink-500',
  tools: 'from-cyan-500 to-blue-500',
  frontend: 'from-green-500 to-emerald-500'
};

const categoryLabels = {
  design: 'Design & Research',
  tools: 'Design Tools',
  frontend: 'Frontend Development'
};

export function Skills() {
  const categories = Object.keys(categoryColors) as Array<keyof typeof categoryColors>;
  
  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through years of experience in design and development
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div 
              key={category} 
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                borderColor: "rgba(147, 51, 234, 0.3)"
              }}
            >
              <motion.h3 
                className={`text-xl font-semibold mb-6 bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent`}
                whileHover={{ scale: 1.05 }}
              >
                {categoryLabels[category]}
              </motion.h3>
              <div className="space-y-4">
                {skills.filter(skill => skill.category === category).map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex justify-between mb-2">
                      <motion.span 
                        className="text-gray-300"
                        whileHover={{ color: "#ffffff" }}
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span 
                        className="text-gray-400"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: skillIndex * 0.1 + 0.5 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        className={`h-2 rounded-full bg-gradient-to-r ${categoryColors[category]}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: skillIndex * 0.1 + 0.3,
                          ease: "easeOut"
                        }}
                        whileHover={{ 
                          boxShadow: `0 0 10px rgba(147, 51, 234, 0.5)`,
                          filter: "brightness(1.2)"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}