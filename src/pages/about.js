import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import Layout from '../components/Layout';
import '../styles/global.css'
function About(props){
    return(
       <Layout>
       <div id = 'about-body'>
        
        <section id = 'about-container'>
        <ReactBootStrap.Card className ='about-card' style ={{border:'none'}}>
  <div id ='bs-img-container'style = {{backgroundColor: '#f5f5dc'}} >
  <ReactBootStrap.Card.Img id = 'bs-img' variant="top" src="https://i.imgur.com/x5CW8IT.jpg" />
  </div>
  <ReactBootStrap.Card.Body style = {{backgroundColor: '#f5f5dc'}}>
    <ReactBootStrap.Card.Title>About Me</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
      <p>Hello there! My name is Andy Terwilliger, and I am a developer living in Chicago, Illinois.
          I began my career in web development during the midst of the pandemic after spending the majority of my adult career as a firefighter. By doing so, I have found a passion for creating
          well-designed, clean, and functional web applications.</p> <p>I have two years of experience as in a professional agency setting, where I have worked on a variety of projects for Fortune 500 clients, including high traffic promotions for e-commerce websites. I am proficient in HTML, CSS, JavaScript, React, and Node.js, and I am always looking to learn more. I am currently seeking a full-time position as a front-end developer, and I am excited to bring my unique perspective and problem-solving skills to a new team.</p>
    </ReactBootStrap.Card.Text>
   <a target = '_blank'href='https://cat-collector-bucket2.s3.amazonaws.com/ATerwilligerResume.pdf' download><ReactBootStrap.Button id='resume-btn'>Download Resume</ReactBootStrap.Button></a>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>

        </section>
        </div>
        </Layout>
    )
}

export default About;