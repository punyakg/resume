import React, { useState, useEffect } from 'react';
import { User, Mail, Linkedin, Award, Briefcase, Code, BookOpen, CheckCircle, ChevronDown, ChevronUp, Github, Server, Cloud, Tool } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Section = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-xl font-bold text-gray-800 mb-4 flex items-center justify-between hover:bg-gray-100 p-2 rounded transition-colors duration-200"
      >
        <span className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="ml-8 mt-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Skill = ({ name }) => (
  <motion.span
    whileHover={{ scale: 1.1, rotate: 5 }}
    className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 transition-all duration-200 shadow-md"
  >
    {name}
  </motion.span>
);

const Resume = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 md:p-8 font-sans max-w-5xl mx-auto min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg relative overflow-hidden mb-8 transform hover:scale-105 transition-all duration-300">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full -ml-20 -mb-20 animate-pulse"></div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold mb-2 font-serif"
        >
          Punyashree R
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl font-light mb-4"
        >
          Senior DevOps Engineer
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowContact(!showContact)}
          className="bg-white text-blue-700 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors duration-200 font-semibold shadow-md"
        >
          {showContact ? "Hide Contact" : "Show Contact"}
        </motion.button>
        <AnimatePresence>
          {showContact && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap mt-4 space-y-2"
            >
              <div className="flex items-center mr-4"><User size={18} className="mr-2" /> 7892118919</div>
              <div className="flex items-center mr-4"><Mail size={18} className="mr-2" /> Punyashreergowda123@gmail.com</div>
              <div className="flex items-center mr-4"><Linkedin size={18} className="mr-2" /> linkedin.com/in/punya-gowda-1548501b7</div>
              <div className="flex items-center mr-4"><Github size={18} className="mr-2" /> github.com/punyashree-devops</div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-8">
        <Section title="Professional Summary" icon={<CheckCircle className="mr-2 text-blue-600" />}>
          <p className="text-lg leading-relaxed text-gray-700">
            Dynamic and results-driven DevOps Engineer with 3+ years of hands-on experience in supporting, automating, and optimizing mission-critical deployments across large-scale infrastructures. Proven expertise in leveraging configuration management, CI/CD, and DevOps processes to drive operational efficiency and innovation. Demonstrated ability to bridge the gap between development and operations, fostering a culture of continuous improvement and collaboration.
          </p>
        </Section>

        <Section title="Professional Experience" icon={<Briefcase className="mr-2 text-blue-600" />}>
          <div className="mb-6">
            <h4 className="text-xl font-bold text-gray-800">Application Development Analyst</h4>
            <p className="text-md font-semibold text-gray-600">Accenture, Bengaluru (Dec 2021 - Present)</p>
            <p className="italic text-gray-600 mb-2">Client: Comcast Corporation</p>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Spearheaded the implementation and management of advanced monitoring systems including Prometheus, Grafana, and Zabbix, resulting in a 40% improvement in system visibility and a 30% reduction in mean time to resolution (MTTR).</li>
              <li>Orchestrated the migration of Elasticsearch and Grafana production servers across environments, ensuring zero downtime and improving system performance by 25%.</li>
              <li>Designed and implemented automated server patching processes using Concourse pipelines, reducing manual effort by 70% and improving security compliance by 50%.</li>
              <li>Developed and maintained comprehensive SOPs for incident management, streamlining response times by 35% and enhancing overall system reliability.</li>
              <li>Leveraged expertise in AWS cloud services (EC2, IAM, S3, CloudWatch) to optimize infrastructure costs by 20% while maintaining high availability and performance standards.</li>
              <li>Implemented GitOps practices using GitLab and GitHub, increasing deployment frequency by 200% and reducing deployment errors by 60%.</li>
              <li>Utilized Kaleidoscope and Prometheus to analyze system alerts, contributing to a 45% reduction in false positives and enhancing overall service reliability.</li>
              <li>Successfully contributed to 40 Agile sprints, consistently delivering high-quality solutions and meeting project deadlines.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-bold text-gray-800">Application Development Associate</h4>
            <p className="text-md font-semibold text-gray-600">Accenture, Bengaluru</p>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Led the migration of JavaScript rules from Operational Decision Manager (ODM) to Legacy Rules Manager (LRM), ensuring 100% functionality retention and improving system compatibility.</li>
              <li>Orchestrated complex data conversions, including XML to JSON and JSON to Excel, optimizing data integration processes and reducing processing time by 40%.</li>
              <li>Conducted comprehensive API testing using SoapUI and Postman, identifying and resolving critical issues, resulting in a 30% improvement in API reliability.</li>
              <li>Implemented advanced logging and monitoring strategies, leading to a 50% reduction in system downtime and faster issue resolution.</li>
            </ul>
          </div>
        </Section>

        <Section title="Technical Expertise" icon={<Code className="mr-2 text-blue-600" />}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h5 className="font-bold text-gray-700 mb-2">DevOps & Cloud</h5>
              <Skill name="AWS Cloud" />
              <Skill name="Concourse CI/CD" />
              <Skill name="Jenkins" />
              <Skill name="Docker" />
              <Skill name="Kubernetes" />
              <Skill name="Terraform" />
            </div>
            <div>
              <h5 className="font-bold text-gray-700 mb-2">Monitoring & Logging</h5>
              <Skill name="Prometheus" />
              <Skill name="Grafana" />
              <Skill name="ELK Stack" />
              <Skill name="Zabbix" />
              <Skill name="AppDynamics" />
            </div>
            <div>
              <h5 className="font-bold text-gray-700 mb-2">Version Control & Collaboration</h5>
              <Skill name="Git" />
              <Skill name="GitHub" />
              <Skill name="GitLab" />
              <Skill name="Jira" />
              <Skill name="Rally" />
            </div>
            <div>
              <h5 className="font-bold text-gray-700 mb-2">Languages & Frameworks</h5>
              <Skill name="Python" />
              <Skill name="JavaScript" />
              <Skill name="Bash" />
              <Skill name="SQL" />
            </div>
            <div>
              <h5 className="font-bold text-gray-700 mb-2">Databases & Messaging</h5>
              <Skill name="MySQL" />
              <Skill name="RabbitMQ" />
              <Skill name="Kafka" />
            </div>
            <div>
              <h5 className="font-bold text-gray-700 mb-2">Tools & Platforms</h5>
              <Skill name="Linux" />
              <Skill name="Postman" />
              <Skill name="SoapUI" />
              <Skill name="Tomcat" />
              <Skill name="Maven" />
            </div>
          </div>
        </Section>

        <Section title="Key Achievements" icon={<Award className="mr-2 text-blue-600" />}>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>Recognized as "DevOps Champion of the Quarter" for implementing innovative automation solutions that reduced deployment time by 60%.</li>
            <li>Led a cross-functional team in developing a custom ChatOps solution, integrating Slack with various DevOps tools, which decreased incident response times by 45%.</li>
            <li>Authored a series of internal best practice guides for CI/CD pipelines, which were adopted company-wide and led to a 30% increase in deployment success rates.</li>
            <li>Spearheaded the adoption of Infrastructure as Code (IaC) practices, resulting in a 70% reduction in configuration drift and improved environment consistency.</li>
          </ul>
        </Section>

        <Section title="Education & Certifications" icon={<BookOpen className="mr-2 text-blue-600" />}>
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-800">BE in Computer Science and Engineering</p>
            <p className="text-md text-gray-700">Vemana Institute of Technology, Bangalore, Karnataka</p>
          </div>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>AWS Certified Cloud Practitioner</li>
            <li>Google Certified Cloud Digital Leader</li>
            <li>Google Certified Associate Cloud Engineer</li>
          </ul>
        </Section>

        <Section title="Soft Skills" icon={<User className="mr-2 text-blue-600" />}>
          <div className="flex flex-wrap">
            <Skill name="Communication" />
            <Skill name="Presentation" />
            <Skill name="Team Leadership" />
            <Skill name="Problem Solving" />
            <Skill name="Adaptability" />
            <Skill name="Continuous Learning" />
          </div>
        </Section>
      </main>

      <footer className="mt-8 text-center text-gray-600">
        <p>© 2024 Punyashree R - Innovating Through DevOps</p>
      </footer>
    </div>
  );
};

export default Resume;