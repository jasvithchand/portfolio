import "./workspace.css"
import Card from "../card/Card"
import { Data } from "../../Data";
import { Link } from 'react-router-dom';

export default function Workspace() {
  return (
    <div className="workspaceContainer">
        <div className="workspaceContent">
                <div className="workspaceHeading">
                  <span className="text">My Recent Work</span>
                </div>
                <div className="cardContainer">
                  {Data.map(p => ( 
                    <Link to={`/project/${p.id.toString()}`} className="card">
                      <img src={p.image} alt="Card Image" />
                      <div className="overlay">
                        <h2>{p.project_title}</h2>
                        <p className="para">{p.s_description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
        </div>
  </div>
  )
}
