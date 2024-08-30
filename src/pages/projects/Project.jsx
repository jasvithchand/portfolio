import {useEffect} from 'react';
import './project.css'
import { useParams } from 'react-router-dom';
import { Data } from '../../Data';
import Line from '../../components/line/Line';

export default function Project() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { id } = useParams();
  const project_info = Data.find(project => project.id === parseInt(id, 10));

  if (!project_info) {
    return <div>Project not found</div>;
  }

  const renderHeaderContent = () => {
    if (project_info.video) {
      return (
        <video className="background-video" autoPlay loop muted>
          <source src={project_info.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else if (project_info.image) {
      return (
        <img src={project_info.image} alt="" className="background-image" />
      );
    } else {
      return <div>No media available</div>;
    }
  };

  return (
    <div className="projectsWrapper">
        <div className="projectContainer">
            <div className="projectHeader">
              {renderHeaderContent()}
              <div className="title-overlay">
                <b>{project_info.project_title}</b>
              </div>
            </div>
            <div className="projectBody">
                <div className="projectContent">
                  <div className="subHeading">
                    Problem Statement
                  </div>
                  <div className="d_line"><Line color="#3532e3"/></div>
                  <p className='paragraph'>{project_info.probStatement}</p>

                  <br/>

                  <div className="subHeading">
                    Implementation
                  </div>
                  <div className="d_line"><Line color="#30db47"/></div>
                  {project_info.Implementation.map((p)=>
                  <p className='paragraph'>{p}</p>)}

                  <br/>

                  <div className="subHeading">
                    Results
                  </div>
                  <div className="d_line"><Line color="#000000"/></div>
                  <p className='paragraph'>{project_info. Results}</p>
                </div>
                <div className="projectLib">
                  <div className="subHeading">
                    Tools/Libraries Used
                  </div>
                  <div className="t_line"><Line color='#e33235'/></div>
                  <div className="lib_used">
                    <p>
                      {project_info.toolsUsed} 
                    </p>
                  </div>
                </div>
            </div>
            <div className="toGit">
              <a href="https://www.github.com" target="_blank" className='toGitLink'>
                <img src="/assets/logos/git.png" alt="" className="icon" />
                <div className="Label">View Project on Github</div>
              </a>
            </div>
            
        </div>
    </div>
  )
}
