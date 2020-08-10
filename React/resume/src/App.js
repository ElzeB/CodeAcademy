import React from 'react';
import logo from './logo.svg';
import './App.css';

import Title from "./components/Title";
import Separator from "./components/Separator";
import WorkExperience from "./components/WorkExperienceContentBlock";
import VerticalLine from "./components/VerticalLine";
import Contacts from "./components/ContactsContentBlock";
import BlackBoxTitle from "./components/BlackBoxTitle";
import SelectLanguage from "./components/SelectLanguage";
import SkillsContentBlock from "./components/SkillsContentBlock";
import GithubIcon from './images/github.svg';
import LinkedinIcon from './images/linkedin.svg';
import data from "./data.json";

function App() {

  const [lang, setLang] = React.useState("lt");

  const onCahnge = (event) => {
    setLang(event.target.value);
  }
  
  return (
    <div className="App">
      <div className="Content-Container">
        <div className="Select-Container">
          <SelectLanguage onChange={onCahnge}/>
        </div>
        <header className="Header">

         

          <div className="Rectangle-2">
            <Title level="3">{data[lang].header.name}</Title>
          </div>
          
          <BlackBoxTitle level="153">{data[lang].header.position}</BlackBoxTitle>
         
          <div className="Rectangle-4">
          </div>
        </header>

        <div className="Resume-grid-box">

          <div className="grid-item item1">
            <h3>LINKS</h3>
            <Separator />
            <ul className="links-ul">
              <li><a href="https://www.linkedin.com/in/elze-vainauskiene-230736b0/" target="_blank"><img src={LinkedinIcon} className="LinkedinIcon"/><span>LINKEDIN/elze-vainauskiene</span></a></li>
              <li><a href="https://github.com/ElzeB" target="_blank"><img src={GithubIcon} />GITHUB/ElzeB</a></li>
            </ul>
          </div>

          <div className="grid-item item2">
            <h3>{data[lang].about.title}</h3>
            <Separator />
            <div className="About-me-info">
              {data[lang].about.content}
            </div>
          </div>

          <div className="grid-item item3">
            <h3>{data[lang].education.title}</h3>
            <Separator />
            <ul className="Links-Education-ul">
              <li>CODE ACADEMY</li>
              <li>2020 Jan - 2020 Aug</li>
              <li>Front - end Advanced studies</li>
            </ul>
            <div class="hr-mini"></div>
            <ul className="Links-Education-ul">
              <li>VILNIUS CODING SCHOOL</li>
              <li>2019 Apr - 2019 May</li>
              <li>WEB development</li>
            </ul>
            <div class="hr-mini"></div>
            <ul className="Links-Education-ul">
              <li>{data[lang].education.schools[2].school}</li>
              <li>2002 - 2006</li>
              <li>{data[lang].education.schools[2].degree}</li>
            </ul>

          </div>
          <div className="grid-item item4">
            <SkillsContentBlock className="col-4" title={data[lang].personalSkills.title}>
              {data[lang].personalSkills.skills.map((skill, index) => {
                return (
                  <li key={index} className={`level-${skill.level}`}>
                    {skill.name}
                  </li>
                );
              })}
            </SkillsContentBlock>
          </div>

          <div className="grid-item item5">
            <SkillsContentBlock className="col-4" title={data[lang].technicalSkills.title}>
                {data[lang].technicalSkills.skills.map((skill, index) => {
                  return (
                    <li key={index} className={`level-${skill.level}`}>
                      {skill.name}
                    </li>
                  );
                })}
              </SkillsContentBlock>
          </div>
        </div>
         
          <h3 className="Work-experience-title">WORK EXPERIENCE</h3>
          <Separator />

            <div className="grid-item item6">

              <WorkExperience 
              job={data[lang].workExperience.jobs[0].position}
              company={data[lang].workExperience.jobs[0].company}
              from={data[lang].workExperience.jobs[0].from} 
              to={data[lang].workExperience.jobs[0].to}
              detalization1={data[lang].workExperience.jobs[0].info1}
              detalization2={data[lang].workExperience.jobs[0].info2}
              >
              </WorkExperience>

              <VerticalLine level="32"></VerticalLine>

              <WorkExperience 
              job={data[lang].workExperience.jobs[1].position}
              company={data[lang].workExperience.jobs[1].company}
              from={data[lang].workExperience.jobs[1].from} 
              to={data[lang].workExperience.jobs[1].to}
              detalization1={data[lang].workExperience.jobs[1].info1}
              detalization2={data[lang].workExperience.jobs[1].info2}
              >
              </WorkExperience>

              <VerticalLine level="68"></VerticalLine>

              <WorkExperience 
              job={data[lang].workExperience.jobs[2].position}
              company={data[lang].workExperience.jobs[2].company}
              from={data[lang].workExperience.jobs[2].from} 
              to={data[lang].workExperience.jobs[2].to}
              detalization1={data[lang].workExperience.jobs[2].info1}
              detalization2={data[lang].workExperience.jobs[2].info2}
              >
              </WorkExperience>

            </div>

            <hr />

            <div className="grid-item item10">
              <Contacts 
                contactType={data[lang].contacts.title}
                detalization1="+37067214327"
                detalization2="elze.vainauskiene@gmail.com"
                >
              </Contacts>
        </div>
      </div>
      </div>
  );
}

export default App;
