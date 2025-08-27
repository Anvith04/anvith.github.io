import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Award, Trophy, Star } from "lucide-react";
import { motion } from "motion/react";

interface EducationItem {
  type: 'education' | 'certification' | 'experience' | 'achievement';
  title: string;
  institution?: string;
  issuer?: string;
  date: string;
  description?: string;
  skills?: string[];
}

const educationData: EducationItem[] = [
  {
    type: 'education',
    title: "Bachelor's of Science in Computer Science",
    institution: "Vishwa Vishwani Institute of Systems and Management, Hyderabad",
    date: "2022 - 2026",
    description: "Currently pursuing degree with a strong interest in UI/UX design. Focused on creating user-friendly interfaces and user-centered design principles.",
    skills: ["UI/UX Design", "Computer Science", "Frontend Development", "Design Principles"]
  },
  {
    type: 'education',
    title: "MEC (Mathematics, Economics, Commerce)",
    institution: "Avinash College of Commerce, Hyderabad",
    date: "2020 - 2022",
    description: "Completed intermediate education with focus on analytical thinking and problem-solving skills.",
    skills: ["Mathematics", "Economics", "Analytics", "Problem Solving"]
  },
  {
    type: 'education',
    title: "10th Grade",
    institution: "Our Own English High School, Sharjah, UAE",
    date: "2009 - 2020",
    description: "Completed secondary education with strong foundation in sciences and mathematics.",
    skills: ["Science", "Mathematics", "English", "Foundation Studies"]
  }
];

const certifications: EducationItem[] = [
  {
    type: 'certification',
    title: "Design Thinking for Beginners",
    issuer: "Simplilearn",
    date: "Jun 2025",
    description: "Comprehensive course on design thinking methodology and user-centered design approaches."
  },
  {
    type: 'certification',
    title: "Learn HTML and CSS from Beginning to Advanced",
    issuer: "Udemy",
    date: "Jun 2025",
    description: "In-depth training on modern HTML5 and CSS3 techniques for responsive web development."
  },
  {
    type: 'certification',
    title: "Introduction to Figma",
    issuer: "Simplilearn",
    date: "Apr 2025",
    description: "Mastered Figma design tool for creating professional UI/UX designs and prototypes."
  },
  {
    type: 'certification',
    title: "Essentials User Experience Design Adobe XD UI UX Design",
    issuer: "Udemy",
    date: "Jan 2025",
    description: "Advanced UX design principles and Adobe XD proficiency for creating user interfaces."
  },
  {
    type: 'certification',
    title: "Python Programming",
    issuer: "Skill Sigma",
    date: "Dec 2024",
    description: "Programming fundamentals and advanced Python concepts for software development."
  },
  {
    type: 'certification',
    title: "Database Programming with Oracle SQL",
    issuer: "Skill Sigma",
    date: "Apr 2024",
    description: "Database design and SQL programming with Oracle database management system."
  }

];

const experience: EducationItem[] = [
  {
    type: 'experience',
    title: "UI/UX Design Team Lead Intern",
    issuer: "ConsoleKit",
    date: "May - Jun 2025",
    description: "Led a team of 7 members to design the UI/UX of Booqin mobile application. Conducted usability testing and implemented improvements based on feedback."
  },
  {
    type: 'experience',
    title: "UI/UX Designer",
    issuer: "CommuSync",
    date: "July - Sept 2025",
    description: "Designed the UI of an app for helping and secure functioning of a society. Collaborated with development team to ensure proper implementation."
  },
  {
    type: 'experience',
    title: "Software Development Engineer Intern",
    issuer: "Knovation Learnings Pvt Ltd",
    date: "Jan - Apr 2025",
    description: "Developed frontend for VeriCert using React & Tailwind. Collaborated with developers and product managers on digital certificate platform."
  },
  {
    type: 'experience',
    title: "Designing Head",
    issuer: "Codexp Club",
    date: "Nov 2024 - Mar 2025",
    description: "Served as a lead designer for the first ever 24-hour hackathon conducted at Vishwa Vishwani Institute of Systems and Management."
  },
  {
    type: 'experience',
    title: "Designer",
    issuer: "Vishwa Vishwani Institute of Systems and Management",
    date: "Dec 2023 - Jan 2025",
    description: "Designed posters and invitations for college events like Freshers Party, Hackathon, and Math Day, enhancing event visibility and engagement."
  },
  {
    type: 'experience',
    title: "Freelance Graphic Designer",
    issuer: "Rising Sun High School & Sudar Cakes and Bakes",
    date: "Mar 2022 - Nov 2024",
    description: "Designed marketing material for Rising Sun High School and Sudar Cakes and Bakes, contributing to brand growth and increased market presence."
  }
];

const achievements: EducationItem[] = [
  {
    type: 'achievement',
    title: "Co-founder, Codexp Club",
    issuer: "Vishwa Vishwani Institute of Systems and Management",
    date: "2024 - Present",
    description: "Co-founded a student-led club focused on skill development, fostering growth in technical and professional competencies among peers."
  },
  {
    type: 'achievement',
    title: "Hackathon Coordinator",
    issuer: "Vishwa Vishwani Institute of Systems and Management",
    date: "2024",
    description: "Successfully organized the first ever 24-hour Hackathon conducted in the college in collaboration with Knowvation Learnings."
  },
  {
    type: 'achievement',
    title: "3D Model Designer, Project Dallah Initiative",
    issuer: "Global Village's Project Dallah",
    date: "School Period",
    description: "Elected as a 3D model of a Dallah for the Global Village's Project Dallah due to my contributions in the art field in my school, showcasing cultural heritage through creative design."
  }
];

const iconMap = {
  education: GraduationCap,
  certification: Award,
  experience: Trophy,
  achievement: Star
};

const colorMap = {
  education: 'from-blue-500 to-cyan-500',
  certification: 'from-purple-500 to-pink-500',
  experience: 'from-yellow-500 to-orange-500',
  achievement: 'from-green-500 to-emerald-500'
};

function EducationSection({ title, items, type }: { title: string; items: EducationItem[]; type: keyof typeof iconMap }) {
  const Icon = iconMap[type];
  
  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="flex items-center gap-3 mb-8"
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className={`w-8 h-8 bg-gradient-to-r ${colorMap[type]} bg-clip-text text-transparent`} />
        </motion.div>
        <h3 className={`text-2xl font-semibold bg-gradient-to-r ${colorMap[type]} bg-clip-text text-transparent`}>
          {title}
        </h3>
      </motion.div>
      
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, x: 10 }}
          >
            <Card className="bg-gray-900/30 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <motion.h4 
                      className="text-lg font-semibold text-white mb-2"
                      whileHover={{ color: "#a855f7" }}
                    >
                      {item.title}
                    </motion.h4>
                    {item.institution && (
                      <motion.p 
                        className="text-purple-400 mb-2"
                        whileHover={{ scale: 1.02 }}
                      >
                        {item.institution}
                      </motion.p>
                    )}
                    {item.issuer && (
                      <motion.p 
                        className="text-cyan-400 mb-2"
                        whileHover={{ scale: 1.02 }}
                      >
                        {item.issuer}
                      </motion.p>
                    )}
                    {item.description && (
                      <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                    )}
                    {item.skills && (
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge variant="outline" className="border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-400 transition-colors">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                  <motion.div 
                    className="text-gray-400 font-medium md:text-right"
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                  >
                    {item.date}
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function Education() {
  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Background & Recognition
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My educational journey, professional certifications, and industry recognition
          </p>
        </motion.div>
        
        <EducationSection 
          title="Education" 
          items={educationData} 
          type="education" 
        />
        
        <EducationSection 
          title="Certifications" 
          items={certifications} 
          type="certification" 
        />
        
        <EducationSection 
          title="Experience" 
          items={experience} 
          type="experience" 
        />
        
        <EducationSection 
          title="Achievements" 
          items={achievements} 
          type="achievement" 
        />
      </div>
    </section>
  );
}