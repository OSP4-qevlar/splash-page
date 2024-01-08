import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const TeamInfo = () => {
  return (
    <div className="py-40" id="team" style={{ backgroundColor: "" }}>
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-6">Meet Our Team</h1>
        <h3 className="text-xl mb-8 text-gray-300">
          Get to know the team behind the project.
        </h3>

        <div className="flex flex-wrap justify-center gap-16 md:gap-16">
          {/* Team Member Card - Joshua McDaniel */}
          <div className="team-card transform transition duration-200 hover:scale-105 bg-gray-700 rounded-lg shadow-lg p-6 m-2">
            <img
              src="https://i.ibb.co/yfNjNjN/josh.webp"
              alt="Joshua McDaniel"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold text-white mb-1">
              Joshua McDaniel
            </h4>
            <p className="text-sm mb-4 text-gray-300">Software Engineer</p>
            <div className="flex justify-center space-x-4">
              <FaGithubSquare className="text-3xl text-white hover:text-gray-400" />
              <FaLinkedin className="text-3xl text-white hover:text-gray-400" />
            </div>
          </div>

          {/* Team Member Card - Landon Osteen */}
          <div className="team-card transform transition duration-200 hover:scale-105 bg-gray-700 rounded-lg shadow-lg p-6 m-2">
            <img
              src="https://i.ibb.co/s6gJ45d/landon.png"
              alt="Landon Osteen"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold text-white mb-1">
              Landon Osteen
            </h4>
            <p className="text-sm mb-4 text-gray-300">Software Engineer</p>
            <div className="flex justify-center space-x-4">
              <FaGithubSquare className="text-3xl text-white hover:text-gray-400" />
              <FaLinkedin className="text-3xl text-white hover:text-gray-400" />
            </div>
          </div>

          {/* Team Member Card - Conor Bell */}
          <div className="team-card transform transition duration-200 hover:scale-105 bg-gray-700 rounded-lg shadow-lg p-6 m-2">
            <img
              src="https://i.ibb.co/7YdNGvc/conor.webp"
              alt="Conor Bell"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold text-white mb-1">
              Conor Bell
            </h4>
            <p className="text-sm mb-4 text-gray-300">Software Engineer</p>
            <div className="flex justify-center space-x-4">
              <FaGithubSquare className="text-3xl text-white hover:text-gray-400" />
              <FaLinkedin className="text-3xl text-white hover:text-gray-400" />
            </div>
          </div>

          {/* Team Member Card - John Noh */}
          <div className="team-card transform transition duration-200 hover:scale-105 bg-gray-700 rounded-lg shadow-lg p-6 m-2">
            <img
              src="https://i.ibb.co/Hq4cQzc/john.webp"
              alt="John Noh"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold text-white mb-1">John Noh</h4>
            <p className="text-sm mb-4 text-gray-300">Software Engineer</p>
            <div className="flex justify-center space-x-4">
              <FaGithubSquare className="text-3xl text-white hover:text-gray-400" />
              <FaLinkedin className="text-3xl text-white hover:text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
