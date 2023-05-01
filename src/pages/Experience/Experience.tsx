import React from "react";
import Card from "../../components/Card/Card";
import "../../styles/main.scss";
import "../../pages/Experience/experience.scss";

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <div className={`experience-container${darkMode ? " dark-mode" : ""}`}>
      <h2>Work Experience</h2>
      <div className="experience-item">
        <Card
          title="Frontend Developer"
          company="XING"
          description="Frontend Developer, in the “Professional Contribution” team (part of the Content Contribution Cluster) of the German Social Network “Xing”. We provide the components to allow users to create content and react to it via posts, stories, and social interactions. We also offer tools to Publishers and Insiders to bring their articles directly into the platform. I was working mainly in the Article Editor and Article View, fixing design errors and bugs, creating small components, testing, and collaborating directly with the designers."
          startDate={new Date("2022-09-01")} 
          school={""}        
          darkMode={darkMode} // added this line
        />
      </div>
      <div className="experience-item">
        <Card
          title="Frontend Intern"
          company="NEW WORK SE"
          description="Tech Academy Program (Internship) where I had external training in Frontend React.js, internal training in the company and on the job. During this period, I developed a few projects (technical and evaluation challenges, personal projects, internal projects) working mainly with ReactJS, JavaScript, Git, TypeScript, Unit Tests, Integration Tests, Cypress, GraphQL, CSS, HTML, Styled Components, Node.js, NPM and Yarn, APIs, jQuery, Jenkins, JIRA, Figma, Responsive Design, Bootstrap, Tailwind UI, Ant Design, Docker and Agile Methodologies"
          startDate={new Date("2022-09-01")}
          school={""} 
          darkMode={darkMode} // added this line
        />
      </div>
      <div className="experience-item">
        <Card
          title="Research Scientist"
          company="CESAM & INPA"
          description="Research Scientist (Biologist) with 10+ years of experience working on various projects in academic and research settings not related with the Tech industry, in different institutions and universities from different countries, specializing in research on the Amazon rainforest region. Strong collaborator with a proven track record of working effectively in interdisciplinary teams."
          startDate={new Date("2012-09-01")} 
          school={""}        
          darkMode={darkMode} // added this line
        />
      </div>
      <div className="experience-item">
        <Card
          title="Communications, Image, and Public Relations"
          company="SCIRP - UA"
          description="Collaborator in the Communications, Image, and Public Relations Services of University of Aveiro working mainly in the Office of Access to Higher Education; UA Program in Schools and Teaching Fairs; Monitor of the 2010 and 2012 editions of Summer Academy; Digital enrollment of students placed in the 1st phase of access to Higher Education."
          startDate={new Date("2009-01-01")} 
          school={""}
          darkMode={darkMode} // added this line        
        />
      </div>
    </div>
  );
};

export default Experience;
