import React, { useState } from 'react';
import { User, Mail, Linkedin, Award, Briefcase, Code, BookOpen, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Section = ({ title, icon, children }) => {
	  const [isOpen, setIsOpen] = useState(false);
	  return (
		      <div className="mb-6">
		        <button 
		          onClick={() => setIsOpen(!isOpen)} 
		          className="w-full text-left text-xl font-semibold text-blue-600 mb-2 flex items-center justify-between hover:bg-blue-100 p-2 rounded transition-colors duration-200"
		        >
		          <span className="flex items-center">
		            {icon}
		            <span className="ml-2">{title}</span>
		          </span>
		          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
		        </button>
		        {isOpen && <div className="ml-6 mt-2">{children}</div>}
		      </div>
		    );
};

const Skill = ({ name }) => (
	  <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-purple-200 transition-colors duration-200">
	    {name}
	  </span>
);

const Resume = () => {
	  const [showContact, setShowContact] = useState(false);

	  return (
		      <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 font-sans max-w-5xl mx-auto">
		        <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6 rounded-t-lg shadow-lg relative overflow-hidden">
		          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
		          <div className="absolute bottom-0 left-0 w-20 h-20 bg-white opacity-10 rounded-full -ml-10 -mb-10"></div>
		          <h1 className="text-4xl font-bold">Punyashree R</h1>
		          <h2 className="text-2xl mt-2">DevOps Engineer</h2>
		          <button 
		            onClick={() => setShowContact(!showContact)} 
		            className="mt-4 bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition-colors duration-200"
		          >
		            {showContact ? "Hide Contact" : "Show Contact"}
		          </button>
		          {showContact && (
				            <div className="flex flex-wrap mt-4 space-x-4 animate-fade-in">
				              <div className="flex items-center"><User size={18} className="mr-2" /> 7892118919</div>
				              <div className="flex items-center"><Mail size={18} className="mr-2" /> Punyashreergowda123@gmail.com</div>
				              <div className="flex items-center"><Linkedin size={18} className="mr-2" /> linkedin.com/in/punya-gowda-1548501b7</div>
				            </div>
				          )}
		        </header>
		        
		        <main className="bg-white p-6 rounded-b-lg shadow-lg">
		          <Section title="Summary" icon={<CheckCircle className="mr-2" />}>
		            <p className="text-sm">
		              DevOps Engineer with 3 years of hands-on experience supporting, automating, and optimizing mission-critical
		              deployments over large infrastructure, leveraging configuration management, CI/CD, and DevOps processes.
		            </p>
		          </Section>

		          <Section title="Experience" icon={<Briefcase className="mr-2" />}>
		            <div>
		              <h4 className="font-bold">Accenture, Bengaluru (Dec 2021 - Present)</h4>
		              <p className="italic">Application Development Analyst - Comcast Corporation</p>
		              <ul className="list-disc ml-5 mt-2 text-sm">
		                <li>Managed AWS cloud services (EC2, IAM, S3, CloudWatch)</li>
		                <li>Implemented server monitoring systems (Prometheus, Grafana, Alerta, Zabbix)</li>
		                <li>Automated deployments using Concourse and Jenkins</li>
		                <li>Migrated Elasticsearch and Grafana production servers</li>
		                <li>Provided 24x7 production support and incident management</li>
		                <li>Developed SOPs and impact assessment documents</li>
		                <li>Utilized Kaleidoscope and Prometheus for system monitoring</li>
		                <li>Leveraged Conduktor for Kafka cluster management</li>
		                <li>Contributed to 40 sprints in Agile Scrum methodology</li>
		              </ul>

		              <h4 className="font-bold mt-4">Application Development Associate</h4>
		              <ul className="list-disc ml-5 mt-2 text-sm">
		                <li>Migrated JavaScript rules from ODM to LRM</li>
		                <li>Executed data conversions (XML to JSON, JSON to Excel)</li>
		                <li>Performed API testing using SoapUI and Postman</li>
		                <li>Utilized GitLab, GitHub Desktop, and TortoiseSVN for version control</li>
		                <li>Used Rally for project tracking and user story management</li>
		              </ul>
		            </div>
		          </Section>
		          
		          <Section title="Technical Skills" icon={<Code className="mr-2" />}>
		            <div className="flex flex-wrap">
		              <Skill name="DevOps" />
		              <Skill name="AWS Cloud" />
		              <Skill name="CI/CD" />
		              <Skill name="Git" />
		              <Skill name="Linux" />
		              <Skill name="Docker" />
		              <Skill name="Kubernetes" />
		              <Skill name="Prometheus" />
		              <Skill name="Grafana" />
		              <Skill name="Jenkins" />
		              <Skill name="Ansible" />
		              <Skill name="Terraform" />
		              <Skill name="Python" />
		              <Skill name="Bash" />
		              <Skill name="SQL" />
		            </div>
		          </Section>

		          <Section title="Soft Skills" icon={<User className="mr-2" />}>
		            <div className="flex flex-wrap">
		              <Skill name="Communication" />
		              <Skill name="Presentation" />
		              <Skill name="Team Leadership" />
		              <Skill name="Problem Solving" />
		              <Skill name="Analytical Thinking" />
		            </div>
		          </Section>
		          
		          <Section title="Education" icon={<BookOpen className="mr-2" />}>
		            <p>BE in Computer Science and Engineering, Vemana Institute of Technology, Bangalore, Karnataka</p>
		          </Section>
		          
		          <Section title="Certifications" icon={<Award className="mr-2" />}>
		            <ul className="list-disc ml-5 text-sm">
		              <li>AWS Certified Cloud Practitioner</li>
		              <li>Google Certified Cloud Digital Leader</li>
		              <li>Google Certified Associate Cloud Engineer</li>
		            </ul>
		          </Section>
		        </main>
		      </div>
		    );
};

export default Resume;
