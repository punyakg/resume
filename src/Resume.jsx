import React, { useState } from 'react';
import { User, Mail, Linkedin, Award, Briefcase, Code, BookOpen, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Section = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-xl font-bold text-gray-800 mb-4 flex items-center justify-between hover:bg-gray-100 p-2 rounded transition-colors duration-200"
      >
        <span className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <div className="ml-8 mt-2">{children}</div>}
    </div>
  );
};

const Skill = ({ name }) => (
  <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-blue-200 transition-colors duration-200">
    {name}
  </span>
);

const Resume = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="bg-gradient-to-br from-gray-100 to-blue-100 p-8 font-sans max-w-5xl mx-auto">
      <header className="bg-gradient-to-r from-blue-700 to-purple-700 text-white p-8 rounded-lg shadow-lg relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full -ml-20 -mb-20 animate-pulse"></div>
        <h1 className="text-5xl font-extrabold mb-2 font-serif">Punyashree R</h1>
        <h2 className="text-2xl font-light mb-4">Senior DevOps Engineer</h2>
        <button
          onClick={() => setShowContact(!showContact)}
          className="bg-white text-blue-700 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors duration-200 font-semibold"
        >
          {showContact ? "Hide Contact" : "Show Contact"}
        </button>
        {showContact && (
          <div className="flex flex-wrap mt-4 space-y-2 animate-fade-in">
            <div className="flex items-center mr-4"><User size={18} className="mr-2" /> 7892118919</div>
            <div className="flex items-center mr-4"><Mail size={18} className="mr-2" /> Punyashreergowda123@gmail.com</div>
            <div className="flex items-center mr-4"><Linkedin size={18} className="mr-2" /> linkedin.com/in/punya-gowda-1548501b7</div>
          </div>
        )}
      </header>

      <main className="bg-white p-8 rounded-lg shadow-lg">
        <Section title="Professional Summary" icon={<CheckCircle className="mr-2 text-blue-600" />}>
          <p className="text-lg leading-relaxed text-gray-700">
            Innovative and results-driven Senior DevOps Engineer with 3+ years of experience in designing, implementing, and maintaining robust CI/CD pipelines and cloud infrastructure. Proven track record in optimizing development workflows, enhancing system reliability, and driving operational efficiency. Skilled in leveraging cutting-edge technologies to solve complex problems and deliver high-impact solutions in fast-paced environments.
          </p>
        </Section>

        <Section title="Professional Experience" icon={<Briefcase className="mr-2 text-blue-600" />}>
          <div className="mb-6">
            <h4 className="text-xl font-bold text-gray-800">Senior DevOps Engineer</h4>
            <p className="text-md font-semibold text-gray-600">Accenture, Bengaluru (Dec 2021 - Present)</p>
            <p className="italic text-gray-600 mb-2">Client: Comcast Corporation</p>
            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              <li>Architected and implemented scalable AWS cloud infrastructure, resulting in a 30% improvement in system performance and 25% reduction in operational costs.</li>
              <li>Designed and deployed comprehensive monitoring solutions using Prometheus, Grafana, and ELK stack, increasing system visibility by 40% and reducing mean time to resolution by 50%.</li>
              <li>Spearheaded the migration of legacy systems to containerized microservices architecture using Docker and Kubernetes, improving deployment frequency by 200% and reducing deployment errors by 75%.</li>
              <li>Implemented Infrastructure as Code (IaC) practices using Terraform and Ansible, reducing provisioning time by 60% and ensuring consistent environments across development, staging, and production.</li>
              <li>Led the implementation of GitOps workflows, improving collaboration between development and operations teams and reducing time-to-market for new features by 40%.</li>
              <li>Optimized CI/CD pipelines using Jenkins and GitLab CI, resulting in a 50% reduction in build times and a 99.9% success rate for production deployments.</li>
              <li>Mentored junior team members on DevOps best practices and conducted knowledge-sharing sessions, contributing to a 25% increase in team productivity.</li>
            </ul>
          </div>
        </Section>

        <Section title="Technical Expertise" icon={<Code className="mr-2 text-blue-600" />}>
          <div className="flex flex-wrap">
            <Skill name="AWS (EC2, S3, RDS, Lambda)" />
            <Skill name="Kubernetes" />
            <Skill name="Docker" />
            <Skill name="Jenkins" />
            <Skill name="GitLab CI" />
            <Skill name="Terraform" />
            <Skill name="Ansible" />
            <Skill name="Prometheus" />
            <Skill name="Grafana" />
            <Skill name="ELK Stack" />
            <Skill name="Python" />
            <Skill name="Bash" />
            <Skill name="Git" />
            <Skill name="Linux" />
            <Skill name="Microservices" />
            <Skill name="RESTful APIs" />
            <Skill name="SQL" />
            <Skill name="NoSQL" />
          </div>
        </Section>

        <Section title="Core Competencies" icon={<User className="mr-2 text-blue-600" />}>
          <div className="flex flex-wrap">
            <Skill name="CI/CD Implementation" />
            <Skill name="Cloud Architecture" />
            <Skill name="Infrastructure Automation" />
            <Skill name="Performance Optimization" />
            <Skill name="System Monitoring & Logging" />
            <Skill name="Security Best Practices" />
            <Skill name="Agile Methodologies" />
            <Skill name="Technical Leadership" />
            <Skill name="Problem-Solving" />
            <Skill name="Cross-functional Collaboration" />
          </div>
        </Section>

        <Section title="Education" icon={<BookOpen className="mr-2 text-blue-600" />}>
          <p className="text-lg font-semibold text-gray-800">Bachelor of Engineering in Computer Science</p>
          <p className="text-md text-gray-700">Vemana Institute of Technology, Bangalore, Karnataka</p>
          <p className="text-md text-gray-600">Graduated: 2020</p>
        </Section>

        <Section title="Certifications" icon={<Award className="mr-2 text-blue-600" />}>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>AWS Certified Solutions Architect - Associate</li>
            <li>Certified Kubernetes Administrator (CKA)</li>
            <li>Google Cloud Professional DevOps Engineer</li>
            <li>HashiCorp Certified: Terraform Associate</li>
          </ul>
        </Section>
      </main>
    </div>
  );
};

export default Resume;
