import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "VeriCert - Digital Certificate Platform",
    description: "VeriCert is designed to provide organizations, educational institutions, and individuals with a seamless solution to create, manage, issue, and verify digital certificates and badges. Built with React and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1638636241638-aef5120c5153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY2VydGlmaWNhdGUlMjBkaXBsb21hJTIwb2ZmaWNpYWx8ZW58MXx8fHwxNzU2MzA1Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Figma", "React", "Tailwind CSS", "Frontend Development"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: "2",
    title: "CommuSync - Community Management App",
    description: "CommuSync is an application designed to help communities and societies function smoothly and securely. Focused on enhancing communication and management within residential communities.",
    image: "https://images.unsplash.com/photo-1744092476578-30b8c33d649c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXRlZCUyMGNvbW11bml0eSUyMHJlc2lkZW50aWFsJTIwaG91c2VzfGVufDF8fHx8MTc1NjMwNTM5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["UI/UX Design", "Figma", "User Research", "Community Management"],
    liveUrl: "#",
    featured: true
  },
  {
    id: "3",
    title: "Booqin - Beauty Salon Booking App",
    description: "Booqin is a mobile application used to provide users to book appointments in beauty salons right from the comfort of their homes. Designed with focus on user experience and convenience.",
    image: "https://images.unsplash.com/photo-1695527081827-fdbc4e77be9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHNwYSUyMGludGVyaW9yfGVufDF8fHx8MTc1NjMwNTM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile App", "Figma", "UX Design", "Booking System"],
    liveUrl: "#",
    featured: true
  }
];

export function Projects() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing design thinking, user experience, and technical implementation
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 overflow-hidden group hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    whileHover={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}
                  />
                </motion.div>
                <CardContent className="p-6">
                  <motion.h3 
                    className="text-xl font-semibold text-white mb-3"
                    whileHover={{ color: "#a855f7" }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: tagIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="outline" className="border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-400 transition-colors">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-500/30">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}