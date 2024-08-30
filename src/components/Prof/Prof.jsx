import React from 'react'
import './prof.css'
import Line from '../line/Line';
import DownloadResumeButton from '../down_res/DowRes';

export default function Prof() {
  return (
    <div className="profWrapper">
      <div className="profHeading"><h1>Professional Me</h1></div>
      <div className='headLine'><Line color='#babcbf'/></div>
      <div className="profContainer">
        <div className="education">
          <div className="heading">Education</div>
          <Line color="#6fc41a"/>
          <div className="university">
            <div className="clg_name">
              Arizona State Univeristy
            </div>
            <div className="degree">
              Master of Computer Sceince (MSc)
            </div>
            <div className="year">
              Aug, 2021 - May, 2023
            </div>
          </div>
          <div className="university">
            <div className="clg_name">
              Amrita Vishwa Vidya Peetham
            </div>
            <div className="degree">
              Bachelor of Technology
            </div>
            <div className="year">
              June, 2017 - June, 2021
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="heading">Experience</div>
          <Line color="#f23333"/>
          <div className="company">
            <div className="cmp_name">
              Tata Consultancy Services
            </div>
            <div className="role">
              SDE Intern
            </div>
            <div className="year">
              March, 2021 - May, 2021
            </div>
          </div>
          <div className="company">
            <div className="cmp_name">
              Jisnu Communications Pvt Ltd
            </div>
            <div className="role">
              System Engineer Intern
            </div>
            <div className="year">
              May, 2018 - Jul, 2018
            </div>
          </div>
        </div>
        <div className="certifications">
          <div className="heading">Certifications</div>
          <Line color="#4633f2"/>
          <div className="certification">
            <div className="certName">
              AWS Solutions Architect
            </div>
            <div className="certCmp">
              Amazon Web Services
            </div>
            <div className="certDate">
              July, 2023
            </div>
          </div>
          <div className="certification">
            <div className="certName">
              HTML, CSS, JS for Web Developers
            </div>
            <div className="certCmp">
              John Hopkins Univeristy, Coursera
            </div>
            <div className="certDate">
              September, 2020
            </div>
          </div>
          <div className="certification">
            <div className="certName">
              Foundations of User Experience (UX) Design
            </div>
            <div className="certCmp">
              Google, Coursera
            </div>
            <div className="certDate">
              Oct, 2023
            </div>
          </div>
          <div className="certification">
            <div className="certName">
              Foundations: Data, Data, Everywhere
            </div>
            <div className="certCmp">
              Google, Coursera
            </div>
            <div className="certDate">
              Oct, 2021
            </div>
          </div>
        </div>
        <div className="techSkills">
          <div className="heading">Technical Skills</div>
          <Line color="#e5eb34"/>
          <div className="techSkillsContainer">
          <div className="prog_lan">
            <span className='bold'>Programming Languages: </span>
            Python, JavaScript, Java, C++.
          </div>
          <div className="db">
            <span className='bold'>Databases: </span>
            PostgreSQL, Firebase, MongoDB, MySQL.
          </div>
          <div className="aws_ser">
            <span className='bold'>AWS: </span>
            EC2, Lambda, S3, SQS, RDS, DynamoDB, ECS.
          </div>
          <div className="frameworks">
            <span className='bold'>Framworks/Libraries: </span>
            ReactJS, NodeJS, OpenCV, <br/> DJango, Flask, TensorFlow
          </div>
          <div className="tools">
            <span className='bold'>Tools and Technologies: </span>
            Docker, Splunk, Github
          </div>
          </div>
        </div>
      </div>
      <DownloadResumeButton fileName='./assets/Jasvith-Resume.pdf' className="dowRes"/>
    </div>
  )
}
