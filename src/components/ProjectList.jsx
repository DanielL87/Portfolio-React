import React from 'react';
import ProjectDetails from './ProjectDetails';

class ProjectList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedProject: null,
      selectedProjectId: null
    };
    this.handleSelectedProject = this.handleSelectedProject.bind(this);
  }
  
  handleSelectedProject(id){
    let chosenProject = Projects[id]
    this.setState({
      selectedProject : chosenProject,
      selectedProjectId : id
    })
  }
  
  render() {
  return (
    <div>
      <style jsx>{`
      `}
      </style>
      <div className='container'>
        {Projects.map((x, index) =>
          <div>
            <ProjectDetails 
              projectName = {x.projectName}
              info = {x.info} 
              link = {x.link}
              key = {index}
              id={index}
              selectProject = {this.handleSelectedProject}
              chosenProject={this.state.selectedProject}
              selectedId = {this.state.selectedProjectId}
            />
          </div>
        )}
      </div>
    </div>
   );
  }
}

export default ProjectList;

const Projects = [
  {
    projectName: 'Doctor Api',
    info: 'Angular application that allows you to search through existing databse for doctors based on Names and Specialties',
    link: 'https://github.com/DanielL87/DoctorsApi.Solution.git'
  },
  {
    projectName: 'Chat App',
    info: 'Angular application using FireBase to allow multiple users to chat with eachother in RealTime',
    link: 'https://github.com/DanielL87/chat-app.git'
  },

  {
    projectName: 'Library Catalog',
    info: 'C# Application that allows users to enter both new clients, book stock and assign client to book relationships',
    link: 'https://github.com/DanielL87/Library.Solution.git'
  },

  {
    projectName: 'Store Finder',
    info: 'C# Application that locates dispensaries based on users location, will also allow new stores to be added to database via built in web scraper',
    link: 'https://github.com/DanielL87/StoreFinder-.git'
  },

];


