import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Mail, Phone, MapPin, Linkedin, Github, X, Dribbble } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <a href="mailto:anvithreddy4@gmail.com" className="hover:text-purple-400 transition-colors">
                  anvithreddy4@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+919493467994" className="hover:text-cyan-400 transition-colors">
                  +91 9493467994
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="#about" className="block text-gray-300 hover:text-purple-400 transition-colors">
                About Me
              </a>
              <a href="#skills" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-pink-400 transition-colors">
                Projects
              </a>
              <a href="#education" className="block text-gray-300 hover:text-purple-400 transition-colors">
                Education
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/anvith-reddy-burri" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/Anvith04" 
                  className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                >
                  <Dribbble className="w-6 h-6" />
                </a>
              </div>
              <div className="pt-4">
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0"
                  size="lg"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">
            <p>&copy; 2025 Anvith Reddy Burri. All rights reserved.</p>
          </div>
          <div className="text-gray-400">
            <p>Designed with ❤️ and lots of creativity</p>
          </div>
        </div>
      </div>
    </footer>
  );
}