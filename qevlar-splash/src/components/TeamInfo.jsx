import "../../src/App.css";
import "../../src/index.css";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const TeamInfo = () => {
  return (
    <div className="section-solid" id="team">
      <div className="section">
        <h1>Meet Our Team</h1>
        <h3>Get to know the team behind the project.</h3>
        <br />
        <div className="team">
          <div className="team-card">
            <teamName>Joshua McDaniel</teamName>
            <teamDescription>Software Engineer</teamDescription>
            <div className="icons-div">
              <FaGithubSquare className="team-icon" />
              <FaLinkedin className="team-icon" />
            </div>
          </div>

          <div className="team-card">
            <teamName>Conor Bell</teamName>
            <teamDescription>Software Engineer</teamDescription>
            <div className="icons-div">
              <FaGithubSquare className="team-icon" />
              <FaLinkedin className="team-icon" />
            </div>
          </div>

          <div className="team-card">
            <teamName>John Noh</teamName>
            <teamDescription>Software Engineer</teamDescription>
            <div className="icons-div">
              <FaGithubSquare className="team-icon" />
              <FaLinkedin className="team-icon" />
            </div>
          </div>

          <div className="team-card">
            <teamName>Landon Osteen</teamName>
            <teamDescription>Software Engineer</teamDescription>
            <div className="icons-div">
              <FaGithubSquare className="team-icon" />
              <FaLinkedin className="team-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
