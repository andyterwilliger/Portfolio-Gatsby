import React from 'react'
import { graphql } from 'gatsby';
import * as ReactBootStrap from 'react-bootstrap';
import Layout from '../components/Layout';


function Projects({ data }){
  
const projects=data.allMarkdownRemark.nodes

  return(
      <Layout>
        <div id = 'projects-body'>
            <h1>Projects</h1>
      <div id = 'projects-cards'>
      {projects.map (project => (
            <ReactBootStrap.Card style={{ width: '20rem' }}>
    
  <ReactBootStrap.Card.Img variant="top" src= {project.frontmatter.image} />
  <ReactBootStrap.Card.Body>
    
    <ReactBootStrap.Card.Title>{project.frontmatter.title}</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
     {project.frontmatter.description}
    </ReactBootStrap.Card.Text>
   <a href ={project.frontmatter.link} target = '_blank'><ReactBootStrap.Button id='project-btn4' variant="primary">Launch</ReactBootStrap.Button></a> 
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>
    ))}


</div>
        </div>
        </Layout>
    )
}

export const query = graphql `
query MyQuery {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        image
        link
        description
      }
      id
    }
  }
  
}


`




export default Projects;

