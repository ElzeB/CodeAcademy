import React from 'react';
import logo from './logo.svg';
import './App.css';

import Title from "./components/Title";
import Separator from "./components/Separator";
import WorkExperience from "./components/WorkExperienceContentBlock";
import VerticalLine from "./components/VerticalLine";
import Contacts from "./components/ContactsContentBlock";
import BlackBoxTitle from "./components/BlackBoxTitle";
import data from "./data.json";

function App() {

  let lang = "en";
  let langData;

  if(lang === "en") langData = data.en;

  const [state, setState] = React.useState(langData);
  
  return (
    <div className="App">
      <div className="Content-Container">
        <header className="Header">

          <select setLang={setState}>
            <option value="lt">Lietuviškai</option>
            <option value="en">English</option>
          </select>

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
            <ul className="Links-Education-ul">
              <li><a href="http://www.linkedin.com"><span class="dot"></span></a>LINKEDIN/username</li>
              <li><a href="http://www.twitter.com"><span class="dot"></span></a>TWITTER/@user-handle</li>
              <li><a href="http://www.github.com"><span class="dot"></span></a>GITHUB/username</li>
              <li><a href="http://www.facebook.com"><span class="dot"></span></a>BLOG/blog-name</li>
            </ul>
          </div>

          <div className="grid-item item2">
            <h3>ABOUT ME</h3>
            <Separator />
            <div className="About-me-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex. Nullam tortor diam, venenatis at enim a, lacinia porttitor erat. Vivamus tempor dictum leo id aliquam. Praesent elit lacus, tempus ac vehicula in, imperdiet dapibus elit. Nullam scelerisque euismod leo id vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. 
            </div>
          </div>

          <div className="grid-item item3">
            <h3>EDUCATION</h3>
            <Separator />
            <ul className="Links-Education-ul">
              <li>SCHOOL NAME</li>
              <li>2009 - 2013</li>
              <li>Degree</li>
            </ul>
            <div class="hr-mini"></div>
            <ul className="Links-Education-ul">
              <li>SCHOOL NAME</li>
              <li>2009 - 2013</li>
              <li>Degree</li>
            </ul>

          </div>
          <div className="grid-item item4">
            <h3>PERSONAL SKILLS</h3>
            <Separator />
            <ul className="Skils-ul">
              <li className="Personal-skils-teamwork">TEAMWORK</li>
              <li className="Personal-skils-communication">COMMUNICATION</li>
              <li className="Personal-skils-organization">ORGANIZATION</li>
            </ul>

          </div>

          <div className="grid-item item5">
            <h3>TECHNICAL SKILLS</h3>
            <Separator />
            <ul className="Skils-ul">
              <li className="Technical-skils-html">HTML</li>
              <li className="Technical-skils-css">CSS/SCSS</li>
              <li className="Technical-skils-js">JAVASCRIPT</li>
              <li className="Technical-skils-react">REACT.JS</li>
            </ul>

          </div>
        </div>
         
          <h3 className="Work-experience-title">WORK EXPERIENCE</h3>
          <Separator />

            <div className="grid-item item6">

              <WorkExperience 
              job="JOB POSITION" 
              company="Company" 
              year="2018-present"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue."
              detalization1="Lorem ipsum dolor"
              detalization2="Consectetur adipiscing elit"
              >
              </WorkExperience>

              <VerticalLine level="32"></VerticalLine>

              <WorkExperience 
              job="JOB POSITION" 
              company="Company" 
              year="2017-2018"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue."
              detalization1="Lorem ipsum dolor"
              detalization2="Consectetur adipiscing elit"
              >
              </WorkExperience>

              <VerticalLine level="64"></VerticalLine>

              <WorkExperience 
              job="JOB POSITION" 
              company="Company" 
              year="2015-2017"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue."
              detalization1="Lorem ipsum dolor"
              detalization2="Consectetur adipiscing elit"
              >
              </WorkExperience>

            </div>

            <hr />

            <div className="grid-item item10">
              <Contacts 
                contactType="ADDRESS"
                detalization1="Imaginary St. 52,"
                detalization2="Vilnius, Narnia"
                >
              </Contacts>
              <Contacts 
                contactType="CONTACT"
                detalization1="+37060000333"
                detalization2="email@test.dev"
                >
              </Contacts>
              <Contacts 
                contactType="SOCIAL"
                detalization1="Linkedin/username"
                detalization2="Twitter/@user-handle"
                >
              </Contacts>

        </div>
      </div>
      </div>
  );
}

export default App;
