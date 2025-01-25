import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaAws } from "react-icons/fa";  // Add FaAws
import { BsFileEarmarkText } from "react-icons/bs";  
import ProjectCard from "../components/ProjectCard";
import ProjectModal from '../components/ProjectModal';
import WorkCard from "../components/WorkCard";
import ResearchCard from "../components/ResearchCard";
import CertificationCard from "../components/CertificationCard";
import EducationCard from "../components/EducationCard";
import OrganizationCard from "../components/OrganizationsCard";
import resumePDF from '../assets/resume.pdf';
import headshot from '../images/Headshot.jpg';
import useScrollSpy from '../hooks/useScrollSpy';
import { DiJavascript1, DiPython, DiJava, DiReact, DiGit, DiGithubBadge } from "react-icons/di";
import { SiTailwindcss, SiDjango, SiFirebase } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { useKeyboardNav } from '../hooks/useKeyboardNav';

const Home = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const sections = ['about', 'education', 'experience', 'rprojects', 'pprojects', 'certs'];
    const activeSection = useScrollSpy(sections);

    useKeyboardNav(sections);

    const getNavLinkClasses = (section) => `
        block transition-colors duration-300 relative group px-4 py-2 w-48 text-center
        after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 
        after:left-0 after:bottom-0 after:transition-all after:duration-300
        hover:after:w-full hover:text-blue-400
        ${activeSection === section ? 'text-blue-400 after:w-full' : 'text-white'}`;
    
    const skills = {
      languages: [
        { name: "Python", icon: <DiPython className="w-8 h-8" /> },
        { name: "JavaScript", icon: <DiJavascript1 className="w-8 h-8" /> },
        { name: "Java", icon: <DiJava className="w-8 h-8" /> },
        { name: "HTML", icon: <FaHtml5 className="w-8 h-8" /> },
        { name: "CSS", icon: <FaCss3Alt className="w-8 h-8" /> },
      ],
      tools: [
        { name: "GitHub", icon: <DiGithubBadge className="w-8 h-8" /> },
        { name: "Git", icon: <DiGit className="w-8 h-8" /> },
        { name: "VS Code", icon: <VscVscode className="w-8 h-8" /> }
      ],
      technologies: [
        { name: "React", icon: <DiReact className="w-8 h-8" /> },
        { name: "Django", icon: <SiDjango className="w-8 h-8" /> },
        { name: "AWS", icon: <FaAws className="w-8 h-8" /> },
        { name: "Firebase", icon: <SiFirebase className="w-8 h-8" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="w-8 h-8" /> }
      ]
    };

    const workExperience = [
      {
        title: "Co President",
        company: "Villanova Software Engineers",
        location: "Villanova, PA",
        date: "Oct 2024 - Present",
        responsibilities: [
          "Spearheaded a 20-member software engineering team and meet weekly to manage real world projects for startup clients",
          "Coordinated with business owners to elicit requirements, organize and lead projects within the club",
          "Conducted weekly meetings to oversee project progress, delegate tasks, and provide mentorship on technical challenges"
        ]
      },
      {
        title: "Front Desk Attendant",
        company: "Jersey Strong",
        location: "Manalapan, NJ",
        date: "Aug 2022 - Present",
        responsibilities: [
          "Managed front desk operations for a 500+ member gym, resolving 95% of member inquiries on the first contact",
          "Assisted in onboarding new members by explaining policies and membership plans, contributing to a 10% retention improvement",
          "Delivered exceptional customer service, increasing satisfaction scores by 20% through problem-solving and clear communication"
        ]
      }
    ];

    const pprojects = [
      {
        title: "FitSense",
        description: [
          "Implemented scalable user authentication via Firebase Authentication, supporting up to 1,000 users signing up ",
          "Optimized real-time database operations using Firestore, enabling efficient creation, update, and deletion of workout plans",
          "Developed dynamic routing and navigation using React Router, enhancing user experience with seamless page transitions",
        ],
        technologies: ["React", "JavaScript", "Firebase", "Tailwind CSS"],
        github: "https://github.com/JaylenBradley/FitSense.git",
      },
      {
        title: "MindBloom",
        description: [
          "Collaborated with a 3-person team to resolve development challenges, ensuring smooth integration of Firebase and Firestore",
          "Implemented user authentication with Firebase, enabling secure user sign-up, login, and personalized data management",
          "Designed and developed CRUD operations for a digital mental health journal, allowing users to create, edit, and delete daily notes",
          "Enhanced app functionality by leveraging Firestore for real-time database operations, enabling efficient data retrieval and updates"
        ],
        technologies: ["React", "JavaScript", "Firebase", "Tailwind CSS"],
        github: "https://github.com/julianDalban/mental-health-app.git",
        live: "https://mind-bloom.netlify.app/",
      },
      {
        title: "Note App",
        description: [
          "Built an interactive note-taking application utilizing Django REST Framework and React, enabling complete CRUD operations",
          "Secured user-specific data through JWT token-based authentication, ensuring privacy and data protection"
        ],
        technologies: ["React", "Firebase", "Tailwind"],
        github: "https://github.com/JaylenBradley/Django-React-Note-App.git"
      },
      {
        title: "Finance Tracker",
        description: [
          "Leveraged Pandas for efficient data management and analysis, enabling users to extract insights into their financial habits across customizable date ranges",
          "Designed visualizations using Matplotlib to display spending trends, providing users with actionable insights to improve budgeting and financial planning"
        ],
        technologies: ["Python", "Pandas", "Matplotlib"],
        github: "https://github.com/JaylenBradley/Personal-Finance-Tracker.git"
      }
    ];

    const certifications = [
      {
        name: "AWS Cloud Practitioner",
        organization: "Amazon Web Services",
        date: "January 15, 2025",
        expirationDate: "January 15, 2028",
        certNumber: "f628f527309e4bbd93fe3314310b8264",
        link: "https://www.credly.com/badges/6deca8f5-bec8-46e2-a997-c7ae66893bdc"
      },
    ];

    const education = {
      school: "Villanova University",
      degree: "Bachelor of Science in Computer Science, Minor in Statistics",
      location: "Villanova, PA",
      date: "Aug 2023 - May 2027",
      gpa: "3.91",
      details: [
        "Pursuing accelerated BS/MS degree in Computer Science",
        "Dean's List: Fall 2023 - Present"
      ],
      relevantCourses: [
        "Data Structures & Algorithms",
        "Analysis of Algorithms",
        "Software Engineering",
        "Discrete Structures",
        "Principles of Database Systems",
        "Platform Based Computing",
      ]
    };

    const organizations = [
      {
        name: "Villanova Programming Team",
        role: "Member",
        date: "Sep 2023 - Present",
        details: [
          "Participated in weekly algorithm challenges to solve challenging problems and enhance problem-solving techniques",
          "Mentored 5+ peers in problem-solving techniques, improving their coding efficiency and contest readiness"
        ]
      },
      {
        name: "Delta Chi Fraternity",
        role: "Scholarship Chair & Rush Committee",
        date: "May 2024 - Present",
        details: [
          "Established the chapter's 1st Building Better Men Program, mentoring 25+ brothers on professional development over 4 years",
          "Conducted weekly workshops, providing mentorship to brothers on networking, resume building, and career skills",
          "Assisted in onboarding 14 new members, driving a 17% growth in chapter size"
        ]
      }
    ];

    return (
        <div className="flex h-screen">
            <div className="w-1/3 bg-gradient-to-r from-slate-900 to-blue-500 text-white p-8 fixed h-screen">
              <div className="flex flex-col items-center mb-8">
                <img 
                  src={headshot} 
                  alt="Jaylen Bradley"
                  className="w-40 h-40 rounded-full object-cover mb-4 border-2 border-white"
                />
                <h1 className="text-4xl font-bold mb-4">Jaylen Bradley</h1>
                <p className="text-white text-lg mb-2">Software Engineer</p>
                <a 
                  href="mailto:jaylenbradley81@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 mb-2"
                > 
                  jaylenbradley81@gmail.com
                </a>
                <p>732-810-5441</p>
              </div>
              <nav className="flex flex-col items-center space-y-6 w-full">
                <a 
                  href="#about" 
                  className={getNavLinkClasses('about')}
                >
                  About
                </a>
                <a 
                  href="#education" 
                  className={getNavLinkClasses('education')}
                >
                  Education
                </a>
                <a 
                  href="#experience" 
                  className={getNavLinkClasses('experience')}
                >
                  Work Experience
                </a>
                <a 
                  href="#rprojects" 
                  className={getNavLinkClasses('rprojects')}
                >
                  Research Projects
                </a>
                <a 
                  href="#pprojects" 
                  className={getNavLinkClasses('pprojects')}
                >
                  Personal Projects
                </a>
                <a 
                  href="#certs" 
                  className={getNavLinkClasses('certs')}
                >
                  Certifications
                </a>
              </nav>
              
              <div className="mt-12 flex flex-col items-center w-full">
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://linkedin.com/in/jaylenbradley8/" 
                    className="text-gray-400 hover:text-white flex items-center gap-2 transform hover:scale-110 transition-all duration-200"
                  >
                    <FaLinkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/JaylenBradley" 
                    className="text-gray-400 hover:text-white flex items-center gap-2 transform hover:scale-110 transition-all duration-200"
                  >
                    <FaGithub className="w-5 h-5" />
                    GitHub
                  </a>
                  <a 
                    href={resumePDF}
                    className="text-gray-400 hover:text-white flex items-center gap-2 transform hover:scale-110 transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFileEarmarkText className="w-5 h-5" />
                    Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Right Scrollable Section */}
            <div className="w-2/3 ml-[33.33333%] min-h-screen bg-blue-500 p-8 scroll-smooth overflow-y-auto">
              <section id="about" className="min-h-screen mb-20">
                <h2 className="text-3xl text-white text-decoration-line: underline font-bold mb-6">About Me</h2>
                <p className="text-white mb-8">
                  Hello! I am Computer Science student at Villanova University with a 3.91 major GPA and a strong foundation in software development, 
                  problem-solving, and leadership. I plan to minor in Statistics and am currently pursuing an accelerated BS/MS degree in Computer Science, 
                  with a strong interest in artificial intelligence and machine learning. My technical expertise spans full-stack development using frameworks 
                  like Django and React, as well as tools like Firebase for real-time database management.
                </p>
                <p className="text-white mb-8">
                  As the President and Founder of Villanova Software Engineers, I lead a 20-member team, overseeing project management for startup clients 
                  and mentoring peers in technical challenges. My ability to combine technical skills with leadership and collaboration drives my passion 
                  for leveraging technology to solve complex problems and deliver results.
                </p>
                <div className="space-y-6">
                  <h3 className="text-2xl text-white text-decoration-line: underline font-semibold mb-4">Skills</h3>
                  
                  {/* Languages Section */}
                  <div>
                    <h4 className="text-lg text-white font-medium mb-3">Languages</h4>
                    <div className="grid grid-cols-4 gap-4">
                      {skills.languages.map((skill, index) => (
                        <div 
                          key={index} 
                          className="flex flex-col items-center space-y-1 p-3 bg-white rounded-lg 
                          transform transition-all duration-200 hover:scale-110 hover:shadow-lg"
                        >
                          {React.cloneElement(skill.icon, { className: "w-6 h-6" })}
                          <span className="text-xs text-gray-600">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools Section */}
                  <div>
                    <h4 className="text-lg text-white font-medium mb-3">Tools</h4>
                    <div className="grid grid-cols-4 gap-4">
                      {skills.tools.map((skill, index) => (
                        <div 
                          key={index} 
                          className="flex flex-col items-center space-y-1 p-3 bg-white rounded-lg 
                          transform transition-all duration-200 hover:scale-110 hover:shadow-lg"
                        >
                          {React.cloneElement(skill.icon, { className: "w-6 h-6" })}
                          <span className="text-xs text-gray-600">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Section */}
                  <div>
                    <h4 className="text-lg text-white font-medium mb-3">Technologies</h4>
                    <div className="grid grid-cols-4 gap-4">
                      {skills.technologies.map((skill, index) => (
                        <div 
                          key={index} 
                          className="flex flex-col items-center space-y-1 p-3 bg-white rounded-lg 
                          transform transition-all duration-200 hover:scale-110 hover:shadow-lg"
                        >
                          {React.cloneElement(skill.icon, { className: "w-6 h-6" })}
                          <span className="text-xs text-gray-600">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section id="education" className="min-h-screen mb-20">
                <h2 className="text-3xl text-white text-decoration-line: underline font-bold mb-6">Education</h2>
                <div className="space-y-6">
                  <EducationCard education={education} />
                  <h3 className="text-2xl text-white font-bold mb-4">Organizations & Leadership</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {organizations.map((org, index) => (
                      <OrganizationCard key={index} org={org} />
                    ))}
                  </div>
                </div>
              </section>

              <section id="experience" className="min-h-screen mb-20">
                <h2 className="text-3xl text-white text-decoration-line: underline font-bold mb-6">Work Experience</h2>
                <div className="space-y-8">
                  {workExperience.map((work, index) => (
                    <WorkCard key={index} work={work} />
                  ))}
                </div>
              </section>

              <section id="rprojects" className="min-h-screen mb-20">
                <h2 className="text-3xl text-white text-decoration-line: underline font-bold mb-6">Research Projects</h2>
                <div className="grid grid-cols-2 gap-6">
                
                </div>
              </section>

              <section id="pprojects" className="min-h-screen mb-20">
                <h2 className="text-3xl text-white text-decoration-line: underline font-bold mb-6">Personal Projects</h2>
                <div className="grid grid-cols-2 gap-6">
                  {pprojects.map((project, index) => (
                    <ProjectCard 
                      key={index}
                      project={project}
                      onClick={() => setSelectedProject(project)}
                    />
                  ))}
                </div>
                {selectedProject && (
                  <ProjectModal
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                    project={selectedProject}
                  />
                )}
              </section>

              <section id="certs" className="min-h-screen">
                <h2 className="text-3xl text-white text-decoration-line: underline font-bold mb-6">
                  Certifications
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <CertificationCard key={index} cert={cert} />
                  ))}
                </div>
              </section>
            </div>
            <ProjectModal 
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </div>
    );
};

export default Home;